import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../components/container'
import FormInput from '../../../components/forminput';
import TextStyles from '../../../assets/fonts';
import SweetAlert from 'react-native-sweet-alert';
import { doc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../hooks/firebase';
import Loading from '../../../components/loading';

const EditProfile = ({route, navigation}) => {
    const { user, onUpdate } = route.params;
    console.log("edit",onUpdate)
    const [username, setUsername] = useState(user.username);
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const [school, setSchool] = useState(user.school);
    const [grade, setGrade] = useState(user.grade);
    const [isLoading, setLoading] = useState(false);
    const firestore = FIRESTORE_DB;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const showConfirmUpdate = () => {
        Alert.alert(
        'Konfirmasi',
        'Apakah Anda yakin ingin memperbarui pengguna?',
        [
            { text: 'Batal', style: 'cancel' },
            { text: 'Ya', onPress: updateUser },
        ]
        );
    };
    const updateUser = async () => {
        
        try {
            const uid = user.uid;
            const userDocRef = doc(firestore, 'users', uid);
            setLoading(true);
            await updateDoc(userDocRef, {
                username: username,
                fullName: fullName,
                grade: grade,
                school: school,
            });
        
            // Show success alert
            SweetAlert.showAlertWithOptions({
                title: 'Selamat',
                subTitle: 'Anda Berhasil Mengupdate',
                confirmButtonTitle: 'OK',
                style: 'success',
                cancellable: false,
            });
            // Update local user state and call the callback
            const updatedUser = {
                ...user,
                username: username,
                fullName: fullName,
                grade: grade,
                school: school,
            };
            onUpdate(updatedUser);
            navigation.reset({
                index: 0,
                routes: [{ name: 'MainApp', params: { user: updatedUser } }],
            });
            
        
            console.log('User updated successfully!');
            } catch (error) {
            setLoading(true);
            console.log('Error updating user:', error);
        
            // Show error alert
            SweetAlert.showAlertWithOptions({
                title: 'Error',
                subTitle: `Update Failed: ${error.message}`,
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#746555',
            });
        } finally {
            setLoading(false);
        }
    };
  return (
    <Container justifyContent="center">
        <Loading visible={Loading}/>
        <View>
            <Text style={[TextStyles.BerkshireSwash, {color:"white", fontSize:24, textAlign:'center', marginBottom:15}]}>Edit Profil</Text>
            <FormInput value={username} setValue={setUsername} placeholder={"Masukkan Username"} keyboardType={"text"} />
            <FormInput value={fullName} setValue={setFullName} placeholder={"Masukkan Nama Lengkap"} keyboardType={"text"} />
            <FormInput value={school} setValue={setSchool} placeholder={"Masukkan Nama Sekolah"} keyboardType={"text"} />
            <FormInput value={grade} setValue={setGrade} placeholder={"Masukkan Tingkat Kelas"} keyboardType={"text"} />
            <TouchableOpacity onPress={showConfirmUpdate} style={[styles.button, { width: windowWidth * 0.4, height: windowHeight * 0.05, borderRadius: windowWidth * 0.02 }]}>
                <Text style={[TextStyles.BerkshireSwash, {color: 'black', fontSize: 15 }]}>Simpan</Text>
            </TouchableOpacity>
        </View>
    </Container>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFD911',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
})