import React from 'react'
import { View, TextInput, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles  from './styles';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { SIGNIN } from '../../graphql/queries/waiters';
import { signin } from '../../features/auth';
import { useMutation } from '@apollo/client';

const Login = () => {
  const [login] = useMutation(SIGNIN);

  const [loading, setLoading] = useState(false); 
  

   const [error, setError] = useState("");
   const [waiter, setWaiter] = useState({
     username: "",
     code: "",
   });

   const dispatch = useDispatch();

   const onSubmit = async (e: any) => {
     e.preventDefault();
     setLoading(true)
     try {
       const { data } = await login({
         variables: {
           username: waiter.username,
           code: waiter.code,
         },
       });

        console.log(data)
       dispatch(signin({ ...data.waiterSignin }));
       setLoading(false)
     } catch (err) {
       if (err instanceof Error) {
        setLoading(false);
         setError(err.message);
       }
     }
   };

   if (error.length > 0) {
     setTimeout(() => {
       setError("");
     }, 10000);
   }
   
   console.log(error);
  return (
    <View style={styles.container}>
         <Image
           source={{ uri: "https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png" }}
           style={{
             marginTop: 4,
             width: 200,
             height: 40,
             resizeMode: "contain",
           }}
         />
        <TextInput placeholder='Usuario' style={styles.input}  
        value={waiter.username}
        onChangeText={(text) =>  setWaiter((prev) => ({ ...prev, ['username']: text }))}
        />
        <TextInput 
        value={waiter.code}
        onChangeText={(text) =>  setWaiter((prev) => ({ ...prev, ['code']: text }))}
        placeholder='Codigo'  style={styles.input}  keyboardType='number-pad' />
        {error.length > 0 && (
          
        <Text style={{
          color: 'red'
        }}>{error}</Text>
        )}

        <TouchableOpacity 
        onPress={onSubmit}
        disabled={loading} style={styles.button}>
            {loading ? (
                <ActivityIndicator color="#333"  size="small" />                
              
                
            ): (
            <Text style={styles.buttonText}>Inciar Sesión</Text>
              
            )}
            
        </TouchableOpacity> 
    </View>
  )
}

export default Login
