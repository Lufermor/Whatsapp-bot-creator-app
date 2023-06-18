import * as Google from 'expo-google-app-auth';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

import { WEB_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '../../Config';
import LoginScreen from '../screens/LoginScreen';

const GOOGLE_CONFIG = {
    clientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID
};

const navigation = useNavigation();

// Resto de las funciones: signOut, getAuthToken, etc.
export const signOut = async () => {
    try {
      // Elimina el token de autenticación del almacenamiento seguro
      await SecureStore.deleteItemAsync('authToken');
  
      // Realiza el cierre de sesión de Google
      await Google.logOutAsync(GOOGLE_CONFIG);
  
      navigation.navigate('LoginScreen')
    } catch (error) {
      console.log(error);
    }
  };
  