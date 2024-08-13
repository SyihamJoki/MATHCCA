import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../../components/forminput'
import SweetAlert from 'react-native-sweet-alert';
import { doc, collection, getDoc, getDocs, where, query } from 'firebase/firestore'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../hooks/firebase';
import {signInWithEmailAndPassword} from "firebase/auth"
import PasswordInput from '../../../components/passwordInput';
import Container from '../../../components/container';
import TextStyles from '../../../assets/fonts';
import Loading from '../../../components/loading';

const Login = ({navigation}) => {
  const initialUser = {}; // Initial user state
  const [user, setUser] = useState(initialUser);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const onPasswordChange = (text) => {
    setPassword(text); // Set the password in the state
  };
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;
  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser); // Function to update user state
  };
  const LoginPressed = async () => {
    if (!email || !password) {
      // Validate if email or password is empty
      SweetAlert.showAlertWithOptions({
        title: 'Login Gagal',
        subTitle: 'Tolong lengkapi input email & password',
        confirmButtonTitle: 'OK',
        style: 'error',
        cancellable: false,
      });
      return;
    }
  
    setLoading(true); // Assuming you have a setLoading function to handle loading state
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Sign-in successful
      const user = userCredential.user;
      console.log('User signed in:', user.uid);
  
      // Fetch the user data from Firestore
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const username = userData.username;
        handleUserUpdate({ ...userData });
  
        // Navigate to the Home screen or perform any other actions
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainApp', params: { user: { ...userData } } }],
        });
        SweetAlert.showAlertWithOptions({
          title: 'Login Berhasil',
          subTitle: `Selamat datang, ${username}!`,
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      }
    } catch (error) {
      // Handle sign-in error
      console.error('Sign-in error:', error.code, error.message);
  
      // Display an alert with the error message
      if (error.code === 'auth/invalid-email') {
        SweetAlert.showAlertWithOptions({
          title: 'Login Gagal',
          subTitle: 'Masukkan email dengan benar',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else if (error.code === 'auth/user-not-found') {
        SweetAlert.showAlertWithOptions({
          title: 'Login Gagal',
          subTitle: 'Email anda belum terdaftar',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else if (error.code === 'Failed to get document because the client is offline.') {
        SweetAlert.showAlertWithOptions({
          title: 'Login Gagal',
          subTitle: 'Coba ulangi lagi, masalah terdapat pada jaringan',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else if (error.code === 'auth/wrong-password') {
        SweetAlert.showAlertWithOptions({
          title: 'Login Gagal',
          subTitle: 'Password Anda Salah!',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else if (error.code === 'auth/invalid-credential') {
        SweetAlert.showAlertWithOptions({
          title: 'Login Gagal',
          subTitle: 'Periksa lagi email & passwordnya',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: error.message,
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      }
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <Container justifyContent={"center"}>
      <Loading visible={loading}/>
      <Image
        source={require("../../../assets/image/Logo.png")} 
        style={[{height: windowHeight * 0.35, width: windowWidth * 0.5,}]} 
        resizeMode='contain' 
      />
      <Text style={[TextStyles.carubanRegular, {fontSize:45, color:'black'}]}>MATHCCA</Text>
      <View>
        <FormInput value={email} setValue={setEmail} placeholder={"Masukkan Email"} keyboardType={"email"} />
        <PasswordInput onPasswordChange={onPasswordChange} />
        <TouchableOpacity>
          <Text style={[TextStyles.semiboldSmall,{color:'white'}]}>Lupa Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={LoginPressed} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:15}]}>
            <Text style={[TextStyles.boldSmall, {color:'black'}]}>MASUK</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:25, alignSelf:'center'}}>
            <Text style={[TextStyles.semiboldSmall,{color:'white'}]}>
              Belum punya akun?{'  '}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
              <Text style={[TextStyles.boldSmall, {color:'black'}]}>Daftar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

export default Login

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor:"#FF9E1F",
    alignItems:'center',
  },
})