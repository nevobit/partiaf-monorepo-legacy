import React, { useEffect, useState } from "react";
import {
  Text,
  View as DefaultView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { signout } from "../../features/auth";
import { useDispatch } from "react-redux";
import { SafeAreaView } from 'react-native';
import {Dimensions} from 'react-native';
import CloudinaryUploader from "../../utilities/uploadImage";
import {launchImageLibrary} from 'react-native-image-picker';
import axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_BALANCE, UPDATE_USER_PIN } from "../../graphql/queries/user";
import colors from "../../components/Layout/Theme/colors";
import Input from "../../components/Shared/Input";
import Button from "../../components/Shared/Button";
import { View } from "../../components/Layout/Theme";
import { useTheme } from "../../contexts/ThemeContext";
import Modal from 'react-native-modal'
import ModalBottom from "../../components/Shared/ModalBottom";

const Profile = ({navigation}: any) => {
    const {theme, updateTheme} = useTheme();
  const { user } = useSelector((state: any) => state.auth);
  const [uploader] = useState<CloudinaryUploader>(new CloudinaryUploader());
  const [photo, setPhoto] = useState<any | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [modalBio, setModalBio] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");
  
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  
  const { data, loading, error,refetch } = useQuery(GET_USER_BALANCE, {
    variables: { uuid: user.uuid },
  });

  
  const handleChange = async () => {
    
    // const file = e.target.files?.item(0);
    console.log({photo})
    const file = photo.assets[0].uri; 
    if (file) {
      setFile(file);
      uploader.setFile(file);
    }
    await uploader.upload();
    setUploadedUrl(uploader.getUrl());
  };
  
  const [updateUser] = useMutation(UPDATE_USER_PIN);
  
  const updateUserHandler = async (p:string) => {
    console.log("ENTRO")
    try {
      setLoader(true)
      const { data } = await updateUser({
        variables:  {
          data: {
            photo: [...user.photo, p],
            uuid: user.uuid,
          }
        }
      });
      
      setLoader(false)
    } catch (err) {
      console.log(err);
    }
  };

  const handleChoosePhoto = async() => {
    const options = {
      title: 'Seleccionar foto de perfil',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary({mediaType: 'photo'}, (response) => {
      if(response.didCancel){
        console.log("User cancelled image picker")
      }else if(response.errorMessage){
        console.log("Error: " + response?.errorMessage)
      }
    }).then(response => {
      const uri = response.assets? response.assets[0].uri : '';
        const type = response.assets? response.assets[0].type : '';
        const name = response.assets? response.assets[0].fileName : "";
        const source = {
          uri,
          type,
          name
        }
        
        console.log("Image ", source)
        cloudinaryUpload(source.uri)
      
    });
    
    const cloudinaryUpload = async(photo:any) => {
      const data = new FormData()
      data.append('file', photo)
      data.append('upload_preset', 'r9rqkvzr')
      data.append("cloud_name", "r9rqkvzr")
      
      const res:any = await axios.post(
        "https://api.cloudinary.com/v1_1/matosr96/image/upload",
        data
      );
      
      console.log(res.data.secure_url)
      setUploadedUrl(res.data.secure_url)
      updateUserHandler(res.data.secure_url)
    }
  };
  
  const [modal, setModal] = useState(false);
 
  const updateUserBioHandler = async () => {
    try {
      setLoader(true)
      const { data } = await updateUser({
        variables:  {
          data: {
            biography: bio,
            uuid: user.uuid,
          }
        }
      });
      
      setLoader(false)
    } catch (err) {
      console.log(err);
    }
  };
  
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(signout());
  };
  
  useEffect(() => {
    refetch();
    setModalBio(false)
  }, [uploadedUrl, loader]);
  

  return (
    <View>
      <StatusBar animated={true} />
      <DefaultView style={styles.header}>
        <Text style={{ fontWeight: "600", fontSize: 18, color: colors[theme].text }}>
          @{user.username}
        </Text>
        <DefaultView style={styles.header_left}>
        <TouchableOpacity onPress={() =>
              navigation.navigate("Tickets", { user: "" })
            }
            style={{
              marginRight: 10
            }}
            >
            <Ionicons
              name={"ios-qr-code-outline"}
              color= {colors[theme].text}
              style={{ fontWeight: "100", fontSize: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModal(true)}>
            <Ionicons
              name={"ios-menu-outline"}
              style={{
                fontWeight: "100",
                fontSize: 36,
                color: colors[theme].text
              }}
            />
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
      <DefaultView
        style={{
          display: "flex",
          flexDirection: "row",
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DefaultView
          style={{
            marginRight: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18, color: colors[theme].text }}>0</Text>
          <Text style={{ fontSize: 14, color: colors[theme].text }}>Seguidores</Text>
        </DefaultView>
        <TouchableOpacity style={{
          position: 'relative'
        }}
        onPress={handleChoosePhoto}
        >
          
        <Image
          source={{
            uri: loader &&
            data?.userById?.photo?.length <= 0
                ? "https://i.postimg.cc/0jMMGxbs/default.jpg"
                : data?.userById?.photo[data?.userById.photo.length - 1],
          }}
          style={{
            height: 110,
            width: 110,
            borderRadius: 100,
            resizeMode: "cover",
          }}
        />
        <DefaultView style={{
          position: "absolute",
          bottom: 5,
          right: 5,
          height: 20,
          width: 20,
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.dark.primary,
          borderRadius: 50,
          borderColor: "#f2f2f2",
          borderWidth: 2
        }}>
          <Ionicons name="ios-add" style={{
            fontSize: 20,
            color: '#f2f2f2',
            textAlign: 'center'
          }}/>
        </DefaultView>
        </TouchableOpacity>
        
        <DefaultView
          style={{
            marginLeft: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 18, color: colors[theme].text }}>0</Text>
          <Text style={{ fontSize: 14, color: colors[theme].text }}>Seguidos</Text>
        </DefaultView>
      </DefaultView>
      <DefaultView
        style={{
          display: "flex",
          paddingTop: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            marginBottom: 5,
            color: colors[theme].text,
            
          }}
        >
          {user.firstname} {user.lastname}
        </Text>
        <TouchableOpacity onPress={ () => setModalBio(true)}>
          {data?.userById?.biography ? (
            <Text style={{
                color: colors[theme].text
            }}>{data.userById.biography}</Text>
          ) : (
            <Text style={{
              color: colors[theme].text
            }}>Click para anadir una biografia</Text>                    
          )}
        </TouchableOpacity>
      </DefaultView>

      <DefaultView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        {/* <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: "rgba(0,0,0,.005)",
            borderColor: colors[theme].text,
            borderWidth: 1,
            width: 150,
            borderRadius: 5,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 , color: colors[theme].text}}>Editar perfil</Text>
        </TouchableOpacity> */}
{/*         
        <TouchableOpacity
        onPress={() => updateTheme('light')}
        ><Text>Dark Mode</Text></TouchableOpacity>
         */}
        {/* <Button name="Cerrar sesion" onPress={() => exit()} /> */}
        {/* <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,.005)",
            borderColor: colors[theme].text,
            borderWidth: 1,
            width: 50,
            borderRadius: 5,
            height: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.postimg.cc/Hn6R798t/instagram.png" }}
            style={{ height: 25, width: 25, resizeMode: "cover", tintColor: colors[theme].text }}
          />
        </TouchableOpacity> */}
      </DefaultView>
      
      <ModalBottom
        modal={modal}
        setModal={setModal}
        height={100}
      >
    
            {/* <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                    color:colors[theme].text
                  }}
                  name="ios-bookmark-outline"
                />
              <Text
                style={{
                  fontSize: 14,
                  color:colors[theme].text
                }}
              >
                Guardados
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                
              }}
            >
                <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                    color:colors[theme].text
                  }}
                  name="ios-star-outline"
                />
              <Text
                style={{
                  fontSize: 14,
               
                  color:colors[theme].text
                }}
              >
                
                Favoritos
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                height: 50,
                width: '100%',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              
              onPress={() => {setModal(false); navigation.navigate('Settings')}}
            >
                 <Ionicons
                  style={{
                    fontSize: 25,
                    marginRight: 5,
                    color:colors[theme].text
                  }}
                  name="ios-cog-outline"
                />
              <Text
                style={{
                  fontSize: 14,

                  color:colors[theme].text
                }}
              >
               
                <Text style={{
                }}>
                  Soporte y configuración                  
                </Text>
              </Text>
            </TouchableOpacity>
          
      </ModalBottom>
      
      <Modal
        onSwipeComplete={() => setModalBio(false)}
        animationIn="fadeIn"
        style={{
        }}
        isVisible={modalBio}
        swipeDirection={["down"]}
        onBackdropPress={() => setModalBio(false)}
      >
        <DefaultView
          style={{
            backgroundColor: colors[theme].background,
            height: 250,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <DefaultView
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
              position: "relative",
            }}
          >
           
           <DefaultView style={{
            padding: 15,
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
           }}>
            <TouchableOpacity onPress={() => setModalBio(false)}>
                <Text><Ionicons name="ios-arrow-back-outline" style={{
                    fontSize: 40,
                    color:colors[theme].text,
                }} /></Text>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: '600',
                color:colors[theme].text
            }}>Editar Biografia</Text>
            
            <TouchableOpacity onPress={() => setModal(false)}>
                <Text><Ionicons name="ios-arrow-back-outline" style={{
                    fontSize: 40,
                    color:colors[theme].background
                }} /></Text>
            </TouchableOpacity>
           </DefaultView>
            <DefaultView style={{
              padding: 10,
              paddingHorizontal: 20
            }} >  
               <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width:'100%',
                  height:'100%'
                }}
                
              >
                <View style={{
                  width: '100%',
                  height: 100
                }}>
                  <Input 
                  placeholder="Ingresa tu biografia" value={bio} style={{
                    marginBottom: 5,
                    outlineStyle: 'none',
                    width: '100%',
                    height: '100%',
                    color: colors[theme].text
                  }} onChangeText={setBio} />
                  <Button text="Guardar"  onPress={updateUserBioHandler} />
                
                </View>
                </View>
                
            </DefaultView>
          </DefaultView>
        </DefaultView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Profile;
