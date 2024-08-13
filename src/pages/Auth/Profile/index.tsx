import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import Container from '../../../components/container'
import TextStyles from '../../../assets/fonts'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CommonActions} from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import SweetAlert from 'react-native-sweet-alert';
import { FIREBASE_AUTH } from '../../../hooks/firebase';

const Profile = ({user, onUpdate, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const auth = FIREBASE_AUTH
  const logout = () => {
    signOut(auth).then(() => navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    ));
    console.log('Logged out');
    SweetAlert.showAlertWithOptions(
      {
        subTitle: 'Anda Berhasil Keluar Akun',
        confirmButtonTitle: 'YA',
        confirmButtonColor: '#000',
        style: 'success',
        cancellable: true
      },
    );
  };
  const showConfirmLogOut = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin keluar akun?',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Ya', onPress: logout },
      ]
    );
  };
  const goToEditProfile = () => {
    navigation.navigate('EditProfile', {
      user,
      onUpdate: (updatedUser) => {
        onUpdate(updatedUser);
      },
    });
  };
  return (
    <Container>
      <View style={{marginTop:10, alignItems:'center'}}>
        <Text style={[TextStyles.BerkshireSwash, {fontSize:24, color:'white', marginBottom:20}]}>Profile</Text>
        <Image source={require('../../../assets/image/ICON/user.png')} style={{width:windowWidth*0.4, height:windowWidth*0.4, marginBottom:windowHeight*0.04}}/>
        <Text style={[TextStyles.regular,{fontSize:18, color:"white"}]}>Haloo, <Text style={TextStyles.BerkshireSwash}>{user.username}</Text></Text>
        <View style={[styles.card, {width:windowWidth*0.85}]}>
          <View style={styles.itemCard}>
            <View style={{flexDirection:'row',}}>
              <Icon name="user" color="#f19733" size={20} />
              <Text style={[TextStyles.boldSmall,{color:'#573529', marginStart:10}]}>Nama Lengkap</Text>
            </View>
            <Text style={[TextStyles.semiboldSmall,{color:'gray', marginVertical:5}]}>{user.fullName}</Text>
          </View>
          <View style={styles.itemCard}>
            <View style={{flexDirection:'row',}}>
              <Icon name="envelope" color="#f19733" size={20} />
              <Text style={[TextStyles.boldSmall,{color:'#573529', marginStart:10}]}>Email</Text>
            </View>
            <Text style={[TextStyles.semiboldSmall,{color:'gray', marginVertical:5}]}>{user.email}</Text>
          </View>
          <View style={styles.itemCard}>
            <View style={{flexDirection:'row',}}>
              <Icon name="school" color="#f19733" size={20} />
              <Text style={[TextStyles.boldSmall,{color:'#573529', marginStart:10}]}>Asal Sekolah / Kelas</Text>
            </View>
            <Text style={[TextStyles.semiboldSmall,{color:'gray', marginVertical:5}]}>{user.school} / Kelas {user.grade}</Text>
          </View>
        </View>
        <View style={[styles.card, {width: windowWidth * 0.85}]}>
          <TouchableOpacity style={[styles.button, {width: windowWidth * 0.8}]} onPress={goToEditProfile}>
            <Icon name="user-edit" color="#E2C800" size={20} />
            <View style={{marginStart: 10}}>
              <Text style={[TextStyles.boldSmall, {color: '#E2C800'}]}>Edit Profil</Text>
              <Text style={[TextStyles.regular, {color: 'gray', fontSize: 13}]}>Anda bisa mengedit profil anda</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="chevron-right" color="gray" size={20} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {width: windowWidth * 0.8}]} onPress={showConfirmLogOut}>
            <Icon name="sign-out-alt" color="red" size={20} />
            <View style={{marginStart: 10}}>
              <Text style={[TextStyles.boldSmall, {color: 'red'}]}>Log Out</Text>
              <Text style={[TextStyles.regular, {color: 'gray', fontSize: 13}]}>Keluar dari akun ini</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginTop:5}}>
              <Icon name="chevron-right" color="gray" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    marginVertical:10
  },
  itemCard:{
    marginBottom:10, borderBottomWidth:0.5, paddingBottom:5, borderBottomColor:"gray"
  },
  button:{
    padding:5, flexDirection:'row', alignContent:'flex-start', borderBottomWidth:0.8, borderBottomColor:"gray", marginBottom:5
  }
})