import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dataTingkatan } from '../../../../data/data'
import TextStyles from '../../../../assets/fonts'
import ContainerWithHeader from '../../../../components/containerWithHeader'

const Video = ({route, navigation}) => {
  const {user, onUpdate} = route.params
  const data = dataTingkatan[user.tingkat]
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const dataVideo = data.video
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.itemContainer, {width:windowWidth*0.9, height:windowHeight*0.32, padding:10, borderRadius: windowWidth * 0.05,}]} onPress={() =>goToPage("VideoPlayer", item)}>
      <Image
        source={{ uri: `https://img.youtube.com/vi/${item.id}/0.jpg` }}
        style={{
            borderRadius: windowWidth * 0.05,
            height: windowHeight * 0.23,
            width: windowWidth * 0.8,
            resizeMode: 'cover'
        }}
      />
      <Text style={[TextStyles.boldSmall, {color:"black", marginTop:10, textAlign:'center'}]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const goToPage = (itemPage, item) => {
    navigation.navigate(itemPage, {
      item
    });
  };
  return (
    <ContainerWithHeader title="Video">
    <View style={{flex:1, justifyContent:'center'}}>
      <FlatList
        data={dataVideo}
        keyExtractor={dataVideo.id}
        renderItem={renderItem}
        style={{marginTop:20}}
      />
    </View>
    </ContainerWithHeader>
  )
}

export default Video

const styles = StyleSheet.create({
  itemContainer:{
    justifyContent:'center', alignItems:"center", backgroundColor:'white', marginBottom:10, borderRadius:5
  }
})