import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

//web: 1038271761206-svvrvcl989fc825koe67allv39fuus4j.apps.googleusercontent.com
//ios: 1038271761206-jihoh4nus97fcv00e4unnsh41atu0t8d.apps.googleusercontent.com
//android: 1038271761206-hn2fvl057pvq4g00ekjofglgkmocieoa.apps.googleusercontent.com

/*
@lufermor/chatflow
  Upload Keystore hashes
    Google Certificate Fingerprint:     E4:AF:1B:0A:77:E0:69:F5:27:F5:1F:72:51:09:80:07:96:F9:C4:74
    Google Certificate Hash (SHA-1):    E4AF1B0A77E069F527F51F725109800796F9C474
    Google Certificate Hash (SHA-256):  2FEC75C348620315B636BBE6BDC1080BC752689E1A8035AD3BDB10358A71F2C9
    Facebook Key Hash:                  5K8bCnfgafUn9R9yUQmAB5b5xHQ=
  Push Notifications credentials
    FCM Api Key:  ---------------------
     */

// Ventana que nos va a permitir abrir la modal al momento de la autenticación
WebBrowser.maybeCompleteAuthSession();

const WEB_CLIENT_ID = "1038271761206-svvrvcl989fc825koe67allv39fuus4j.apps.googleusercontent.com";
const IOS_CLIENT_ID = "1038271761206-jihoh4nus97fcv00e4unnsh41atu0t8d.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "1038271761206-hn2fvl057pvq4g00ekjofglgkmocieoa.apps.googleusercontent.com";

export default function App() {
  // Este accessToken nos ayuda a autenticarnos para obtener la información de google del usuaro que está autenticado
  const [accessToken, setAccessToken] = React.useState(null); //Lo inicializamos a null ya que en principio no hay sesión iniciada
  // La siguiente variable user se usa para guardar la información del usuario
  const [user, setUser] = React.useState(null); //Lo inicializamos a null ya que en principio no tenemos usuario
  // 
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID
  });
  // Este use effect nos va a ayudar para que cuando la aplicación se cargue podamos ver si el usuario tiene una sesión o no, o quiere iniciar una sesión
  React.useEffect(() => {
    // En caso de que tengamos una respuesta, comprobamos si es success
    if(response?.type === "success"){
      //Se guarda la información del usuario en el accessToken:
      setAccessToken(response.authentication.accessToken);
      // De esta manera nos aseguramos de que fetchUserInfo se ejecute sí y solo sí tenemos el accessToken (accessToken != null):
      accessToken && fetchUserInfo();
      //onLoginSuccess && onLoginSuccess();
    }
  }, [response, accessToken]) //Cada que cambie la response o el accessToken se hace fetch de los datos del usuario (Esto es, cada que haya cambio de login)

  //Con la siguiente función, obtenemos la información del usuario que se loguea 
  //Es una función asíncrona porque se hace una request y tiene que esperar
  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", { //Esta dirección es un endpoint por el que accedemos a la información del usuario
      // Como segundo parámetro necesitamos pasarle a la función la autenticación del usuario (el token) en el objeto Authorization:
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    // La respuesta que nos arroja es un Json, así que lo parseamos:
    const useInfo = await response.json();
    //Guardamos la información en nuestra variable del usuario:
    setUser(useInfo);
    //sendUser(useInfo);
  }

  // Este componente nos va a permitir renderizar la información del usuario si es que está logueado 
  const ShowUserInfo = () => {
    if (user) { //Si no tenemos user, no renderizamos nada
      return ( //Aquí devolvemos una vista muy sencilla con un texto y una imagen: (user.name y user.profile)
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>Welcome</Text>
          <Image source={{ uri: user.picture }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.name}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  return (
    //Solo se llama a ShowUserInfo si tenermos un usuario logeado y el mostrar este componente también depende de que haya usuario (true)
    <View style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null && //Si no tenemos un usuario, cargamos este componente para dar opción de login
        <>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Welcome</Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray' }}>Please login</Text>
          <TouchableOpacity //Esto es un componente que captura si el usuario toca en esta parte
            disabled={!request}
            onPress={() => {
              promptAsync();
            }}
          >
            <Image source={require("./src/assets/images/login/btn.jpeg")} style={{ width: 300, height: 40 }} />
          </TouchableOpacity>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
