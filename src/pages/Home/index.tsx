import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Container from '../../components/container'
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextStyles from '../../assets/fonts';
import { homeMenu } from '../../data/data';

const Home = ({user, onUpdate, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.itemContainer, {width:windowWidth*0.45, height:windowWidth*0.45}]} onPress={() =>goToPage(item.page)}>
      <Image source={item.icon} style={{width:windowWidth*0.28, height:windowHeight*0.17}} resizeMode='contain' />
      <Text style={[TextStyles.boldSmall, {color:"white"}]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const ListHeaderComponent = () => (
    <View style={styles.header}>
      <View style={{justifyContent:'flex-end'}}>
        <Text style={[TextStyles.bold, {fontSize:17, color:"white"}]}>Haloo, <Text style={[TextStyles.BerkshireSwash, {fontSize:17, color:"white"}]}>{user.fullName}</Text></Text>
        <Text style={[TextStyles.regularSmall, {color:"white"}]}>Tingkat</Text>
      </View>
      <View style={{backgroundColor:'#4F2305', width:windowWidth*0.1, height:windowWidth*0.1, borderRadius:windowWidth*0.1, alignItems:'center', justifyContent:'center'}}>
        <Icon name="bell" solid color="#FF9E1F" size={20} />
      </View>
    </View>
  );
  const goToPage = (item) => {
    navigation.navigate(item, {
      user,
      onUpdate: (updatedUser) => {
        onUpdate(updatedUser);
      },
    });
  };
  const ListFooterComponent = () => (
    <View style={{alignItems:'center', marginTop:20}}>
      <View style={{width:windowWidth*0.9, height:windowHeight*0.23, alignSelf:'center', marginTop:20}}>
        <ImageBackground source={require("../../assets/image/bg-batik.png")} resizeMode='cover' style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        {
            user.abilityTest === 0 ? (
              <>
                <Text style={[TextStyles.boldLarge, { color: "white" }]}>Tentukan Level Kemampuan{"\n"}Dengan Asesmen Diagnostik</Text>
                <TouchableOpacity onPress={() => goToPage("AbilityTest")} style={{ backgroundColor: '#FF0000', width: windowWidth * 0.85, height: windowHeight * 0.05, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 10 }}>
                  <Text style={[TextStyles.boldSmall, { color: "white" }]}>START</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={[TextStyles.boldLarge, { color: "white", textAlign: 'center' }]}>Anda sudah mengerjakan tes kemampuan</Text>
                <TouchableOpacity onPress={() => goToPage("AbilityResult")} style={{ backgroundColor: '#FF0000', width: windowWidth * 0.85, height: windowHeight * 0.05, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 10 }}>
                  <Text style={[TextStyles.boldSmall, { color: "white" }]}>LIHAT NILAI</Text>
                </TouchableOpacity>
              </>
            )
          }
        </ImageBackground>
      </View>
    </View>
  );

  return (
    <Container>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={homeMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between', width:"92%", alignSelf:'center', marginTop:10}}
        ListFooterComponent={ListFooterComponent}
      />
    </Container>
  );
};
export default Home

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:10
  },
  itemContainer:{
    backgroundColor:'#4F2305',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:5
  }
})