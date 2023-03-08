import { useCallback, useState } from "react";

type onSubmit = (values:any) => void;
type formState = {
    isDirty: boolean;
    isValid: boolean;
    errors: any;
    allErrors?:any;
}

export default function useForm ({initialState={}, schema={}}:any) {
  const [values, setValues] = useState(initialState??{});
  const [touched,setTouched]=useState<any>([]);
  const [formState, setFormState] = useState<formState>({
    isDirty: false,
    isValid: false,
    allErrors:{},
    errors: {},
    });

    const validate = useCallback(async () => {
        try {
            const data = await schema.validate(values, {abortEarly: false});
            setFormState({
                ...formState,
                isValid: true,
                errors: {},
            });
           
            return data;
        } catch (err:any) {
            const errors = err.inner.reduce((acc:any, error:any) => {
                acc[error.path] = error.message;
                return acc;
            }, {});

            const formErrors = Object.keys(errors).reduce((acc:any, key:any) => {
                if (touched.includes(key)) {
                    acc[key] = errors[key];
                }
                return acc;
            }, {});

            setFormState({
                ...formState,
                isValid: false,
                allErrors:errors,
                errors: formErrors,
            });
            return errors;
            
        }
    }, [formState, schema, values])


    const handleBlur = useCallback((event:any) => {
        const {name} = event.target;
        validate()
        if(!touched.includes(name)){
            setTouched([...touched, name])
        }
    }, [formState, touched, validate])

  const handleChange = useCallback((event:any) => {
    const {name,value}=event.target;
    validate()
    setFormState({
        ...formState,
        isDirty: true,
    });
    
    setValues({
        ...values,
        [name]: value,
        });
    }, [values, formState, validate])


    const handleSubmit = useCallback((onSubmit:onSubmit) => {
      return (event:any) => {
       event.preventDefault();
       formState.isValid && onSubmit(values)
    }
    }, [values])

  return {values, handleChange, setValues, handleSubmit, formState, handleBlur}
} 