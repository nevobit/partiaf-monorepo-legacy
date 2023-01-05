import Button from '@/components/shared/Button'
import Field from '@/components/shared/Field'
import ImageInput from '@/components/shared/ImageInput'
import Input from '@/components/shared/Input'
import { PublicRoutes } from '@/constants-definitions/Routes'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Signin.module.css'

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-parti.svg" alt="Log Partiaf" />
         <div className={styles.grid}>
        <div>
        <Field label='Nombre*' >
            <Input placeholder="Introduce tu nombre" />
        </Field>
        <Field label='Apellido*'>
            <Input placeholder='ingresa tu apellido' />
        </Field>
        <Field label='Correo electronico*'>
            <Input placeholder='Ingresa tu correo electronico' />
        </Field> 
        </div>
         
        <Field label='Foto de perfil'>
          <ImageInput />
        </Field>
        </div>

        <div className={styles.grid}>
        <Field label='Tipo de documento*'>
        <select name="" id="">
            <option value="">Cedula de ciudadania</option>
            <option value="">Cedula de extranjeria</option>
            <option value="">Pasaporte</option>
          </select>
        </Field> 
        <Field label='Documento*'>
            <Input placeholder='Ingresa tu numero de documento' />
        </Field> 
        
        <Field label='Edad*'>
            <Input placeholder='Ingresa tu edad' />
        </Field> 
        <Field label='Telefono*'>
            <Input placeholder='Ingresa tu telefono' />
        </Field> 
    
        <Field label='Fecha de nacimiento*'>
            <Input type='date' placeholder='Contrasena' />
        </Field>
        <Field label='Genero*'>
          <select name="" id="">
            <option value="">Masculino</option>
            <option value="">Femenino</option>
            <option value="">Otro</option>
          </select>
        </Field>
        </div>
        <Field label='Direccion*'>
            <Input placeholder='Ingresa tu direccion' />
        </Field>
        <div className={styles.grid}>
       <Field label='Ingresa una contrasena'>
          <Input placeholder='Contrasena' />
        </Field>
       <Field label='Confirmar contrasena'>
       <Input placeholder='Confirmar contrasena' />
        </Field>

      
       </div>
       
      
    
    
     
    
      
       
       <div className={styles.grid}>
       <Field>
          <Button>
            <Link to={PublicRoutes.SIGNIN}>
            Ir a iniciar sesion

            </Link>
            </Button>
        </Field>
       <Field>
          <Button backgroundColor='#333' color='#f2f2f2'>Registrarse</Button>
        </Field>

      
       </div>
        
      <span className={styles.copy}>Al registrarse usted acepta los términos y condiciones del servicio de PARTIA</span>
        
      </div>

    </div>
  )
}

export default Signup
