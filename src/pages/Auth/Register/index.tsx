import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../components/container'
import FormInput from '../../../components/forminput'
import PasswordInput from '../../../components/passwordInput'
import TextStyles from '../../../assets/fonts'
import SweetAlert from "react-native-sweet-alert"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../hooks/firebase'
import Loading from '../../../components/loading'
const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const onPasswordChange = (text) => {
    setPassword(text); // Set the password in the state
  };

  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;
  const onRegisterPressed = async () => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
  
      // Add user data to Firestore with UID as the document ID
      await setDoc(doc(firestore, 'users', user.uid), {
        username: username,
        email: user.email,
        uid: user.uid,
        school: school,
        grade: grade,
        fullName: fullName,
        exercise1: 0,
        exercise2: 0,
        exercise3: 0,
        pengayaan: 0,
        abilityTest: 0,
      });
  
      console.log(response);
      navigation.replace('Login');
      SweetAlert.showAlertWithOptions({
        title: 'Selamat',
        subTitle: `Anda Berhasil Mendaftar, ${username}!`, // Add username here
        confirmButtonTitle: 'OK',
        style: 'success',
        cancellable: false,
      });
    } catch (error) {
      console.log(error);
      if (!email || !password || !username) {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: 'Tolong lengkapi input!',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      }  else if (error.code === 'auth/email-already-in-use') {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: 'Email anda sudah terdaftar, silahkan Login!',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else if (error.code === 'auth/invalid-email') {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: 'Gunakan email yang valid',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else {
        SweetAlert.showAlertWithOptions({
          title: 'Error',
          subTitle: `Sign up failed: ${error.message}`,
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#746555',
        });
      }

    } finally {
      setLoading(false);
    }
  };
  return (
    <Container justifyContent={"center"}>
      <Loading visible={loading}/>
      <Text style={[TextStyles.BerkshireSwash,{color:'white', fontSize:24, marginBottom:10}]}>REGISTER</Text>
    <View>
      <FormInput value={email} setValue={setEmail} placeholder={"Masukkan Email"} keyboardType={"email"} />
      <FormInput value={username} setValue={setUsername} placeholder={"Masukkan Username"} keyboardType={"text"} />
      <FormInput value={fullName} setValue={setFullName} placeholder={"Masukkan Nama Lengkap"} keyboardType={"text"} />
      <FormInput value={school} setValue={setSchool} placeholder={"Masukkan Nama Sekolah"} keyboardType={"text"} />
      <FormInput value={grade} setValue={setGrade} placeholder={"Masukkan Tingkat Kelas"} keyboardType={"text"} />
      <PasswordInput onPasswordChange={onPasswordChange} />
      <TouchableOpacity onPress={onRegisterPressed} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05, borderRadius:windowWidth*0.05, marginTop:15}]}>
          <Text style={[TextStyles.boldSmall, {color:'black'}]}>DAFTAR</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row', marginTop:25, alignSelf:'center'}}>
            <Text style={[TextStyles.semiboldSmall,{color:'white'}]}>
              Sudah punya akun?{'  '}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text style={[TextStyles.boldSmall, {color:'black'}]}>Masuk</Text>
            </TouchableOpacity>
      </View>
    </View>
  </Container>
  )
}

export default Register

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor:"#FF9E1F",
    alignItems:'center',
  },
})