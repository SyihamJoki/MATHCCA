import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../components/container'
import FormInput from '../../../components/forminput'
import SweetAlert from "react-native-sweet-alert"
import { sendPasswordResetEmail } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../../hooks/firebase'
import TextStyles from '../../../assets/fonts'

const ForgotPassword = ({navigation}) => {
    const auth = FIREBASE_AUTH
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [email, setEmail] = useState('');
    const onSubmitPressed = () => {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        SweetAlert.showAlertWithOptions({
          title: 'Berhasil',
          subTitle: `Kami Mengirim Link Reset Password Ke Email Anda`, // Display the username here
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: errorMessage, // Display the username here
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      });
    };

  return (

    <Container justifyContent={"center"}>
        <Text style={[TextStyles.boldLarge,{ color:'white', marginBottom:15}]}>Reset Kata Sandi</Text>
        <FormInput placeholder={"Isilah email anda yang terdaftar"} setValue={setEmail} value={email} keyboardType='email-address'/>
        <TouchableOpacity onPress={onSubmitPressed} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.05}]}>
            <Text style={[TextStyles.boldSmall,{color:'black',}]}>Kirim Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={[TextStyles.regularSmall, {color:'white'}]}>Kembali ke halaman login</Text>
        </TouchableOpacity>
    </Container>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#FF9E1F',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    }
})