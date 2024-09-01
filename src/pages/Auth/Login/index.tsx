import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../../../components/forminput'
import SweetAlert from 'react-native-sweet-alert';
import { doc, collection, getDoc, getDocs, where, query, setDoc } from 'firebase/firestore'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../hooks/firebase';
import {signInWithEmailAndPassword} from "firebase/auth"
import PasswordInput from '../../../components/passwordInput';
import Container from '../../../components/container';
import TextStyles from '../../../assets/fonts';
import Loading from '../../../components/loading';
import { calculateTingkat } from '../../../hooks/CalculateTingkat';

const Login = ({navigation}) => {
  const initialUser = {}; // Initial user state
  const [user, setUser] = useState(initialUser);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;

  const onPasswordChange = (text) => {
    setPassword(text); // Set the password in the state
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser); // Function to update user state
  };

  const determineUserLevel = (abilityTestScore) => {
    const score = Math.round((abilityTestScore / 15) * 100);
    if (score >= 0 && score <= 50) {
      return 'rendah';
    } else if (score > 50 && score <= 80) {
      return 'sedang';
    } else if (score > 80 && score <= 100) {
      return 'tinggi';
    }else{
      return ""
    }
  };

  const LoginPressed = async () => {
    if (!email || !password) {
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
      const user = userCredential.user;

      const userDocRef = doc(firestore, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        // Tentukan tingkat berdasarkan nilai tes kemampuan
        const tingkat = determineUserLevel(userData.abilityTest);
        let nextLevel = tingkat;

        // Logika untuk kenaikan tingkatan
        if (tingkat === "rendah" && userData.exercise1 >= 6) {
            nextLevel = "sedang";
        } else if (tingkat === "sedang" && userData.exercise2 >= 6) {
            nextLevel = "tinggi";
        }
        // Buat objek user yang diperbarui dengan tingkat (level)
        const updatedUser = { ...userData, nextLevel };

        handleUserUpdate(updatedUser);
        
        // Navigasi ke layar Home atau lakukan aksi lainnya
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainApp', params: { user: updatedUser } }],
        });

        SweetAlert.showAlertWithOptions({
          title: 'Login Berhasil',
          subTitle: `Selamat datang, ${userData.username}!`,
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      }
    } catch (error) {
      console.error('Sign-in error:', error.code, error.message);

      // Display appropriate error message based on error code
      SweetAlert.showAlertWithOptions({
        title: 'Login Gagal',
        subTitle: error.message,
        confirmButtonTitle: 'OK',
        style: 'error',
        cancellable: false,
      });
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
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
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