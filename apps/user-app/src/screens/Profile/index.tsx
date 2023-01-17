import React from 'react'
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { signout } from '../../features/auth';
import { useDispatch } from 'react-redux';

const Profile = () => {

    const {user} = useSelector((state:any) => state.auth);

    const dispatch = useDispatch();
    const exit = () => {
        dispatch(signout());
    }
  return (
    <View>
      <StatusBar animated={true} />
      <View style={styles.header}>
                <Text style={{fontWeight: '600', fontSize: 23}}>@{user.username}</Text>
                <View style={styles.header_left}>
                <Ionicons name={'ios-qr-code-outline'} style={{ fontWeight: '100', fontSize: 23, marginRight: 7}} />
                <TouchableOpacity>
                    <Ionicons name={'ios-menu-outline'} style={{ fontWeight: '100', fontSize: 40, marginTop: -10}} />
                </TouchableOpacity>
                </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', paddingVertical: 10, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{marginRight: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Text style={{fontWeight:'700', fontSize: 20}} >40</Text>
                    <Text style={{fontSize: 15}}>Seguidores</Text>
                </View>
                <Image  source={{uri: 'https://i.postimg.cc/bN38PzZn/Captura-de-pantalla-2022-08-24-163058.png'}} style={{height: 110, width:110, borderRadius: 100, resizeMode: 'cover'}} />
                <View style={{marginLeft: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Text style={{fontWeight:'700', fontSize: 20}}>10</Text>
                    <Text style={{fontSize: 15}}>Seguidos</Text>
                </View>
            </View>
            <View style={{display: 'flex', paddingTop: 10, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontWeight: '700', color: '#111111', fontSize: 20, marginBottom: 5}}>Nestor Mosquera</Text>
                <Text>Click para anadir una biografia</Text>
                <Text>{JSON.stringify(user)}</Text>

            </View>

            <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'center',  alignItems: 'center', marginTop: 30}}>
                <TouchableOpacity  style={{ marginRight: 10, backgroundColor: 'rgba(0,0,0,.005)', borderColor: 'rgba(0,0,0,.1)', borderWidth:1, width: 150, borderRadius: 5, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: '500', fontSize:16}}>Editar perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,.005)', borderColor: 'rgba(0,0,0,.1)', borderWidth:1, width: 50, borderRadius: 5, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                   <Image source={{uri: 'https://i.postimg.cc/Hn6R798t/instagram.png'}} style={{height: 25, width: 25, resizeMode: 'cover'}} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={exit}  style={{ marginRight: 10, backgroundColor: 'rgba(0,0,0,.005)', borderColor: 'rgba(0,0,0,.1)', borderWidth:1, width: 150, borderRadius: 5, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{fontWeight: '500', fontSize:16}}>Salir de la cuenta</Text>
                </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
      flexDirection: 'row',
      height: 40,
      justifyContent: 'space-between',
      marginTop: 15,
      paddingLeft: 20,
      paddingRight: 20,
  },
  header_left: {
      display: "flex",
      flexDirection: 'row',
  }
})


export default Profile
