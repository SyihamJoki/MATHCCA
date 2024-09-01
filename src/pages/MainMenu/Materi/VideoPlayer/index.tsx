import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../../components/container'
import ContainerWithHeader from '../../../../components/containerWithHeader'
import TextStyles from '../../../../assets/fonts'
import YoutubePlayer from "react-native-youtube-iframe";
const VideoPlayer = ({route}) => {
    const {item} = route.params
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <ContainerWithHeader title={"Video"}>
        <View style={[styles.card, {width:windowWidth*0.92, height:windowHeight*0.35}]}>
            <Text style={[TextStyles.boldSmall, {color:'black', marginBottom:10}]}>{item.title}</Text>
            <YoutubePlayer
                width={windowWidth*0.9}
                videoId={item.id}
                height={windowHeight*0.3}
            />
        </View>
    </ContainerWithHeader>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
    card:{
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        marginTop:20,
        padding:5
    }
})