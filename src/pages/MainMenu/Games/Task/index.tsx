import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SweetAlert from 'react-native-sweet-alert';
import ContainerWithHeader from '../../../../components/containerWithHeader';
import PopUp from '../../../../components/PopUp';
import TextStyles from '../../../../assets/fonts';
import { AllGamesQuestion } from '../../../../data/data';

const Task = ({ route, navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { id, user, onUpdate } = route.params;
  console.log("soal games",user, onUpdate);

  const [isPopUpVisible, setPopUpVisible] = useState(true);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Load the question based on id
    const selectedQuestion = AllGamesQuestion.find(q => q.id === id);
    setQuestion(selectedQuestion);
  }, [id]);

  const handleSave = () => {
    if (!selectedAnswer) {
      SweetAlert.showAlertWithOptions({
        title: 'Mohon Maaf',
        subTitle: 'Anda harus mengisi jawaban terlebih dahulu',
        confirmButtonTitle: 'OK',
        style: 'warning',
      });
    } else {
      let totalPoints = 0;
      if (selectedAnswer.id === question.correctAnswerId) {
        totalPoints++;
      }
      if (totalPoints === 1) {        
        SweetAlert.showAlertWithOptions({
          title: 'Anda Benar',
          subTitle: 'Terimakasih sudah bermain game',
          confirmButtonTitle: 'OK',
          style: 'success',
        });
      }else{
        SweetAlert.showAlertWithOptions({
          title: 'Mohon Maaf',
          subTitle: 'Jawaban anda kurang tepat',
          confirmButtonTitle: 'OK',
          style: 'error',
        });
      }
      navigation.replace("MainApp", {
        user, onUpdate
      });
    }
  };

  const handleBoxPress = (choice) => {
    setSelectedAnswer(choice);
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  if (!question) {
    return <Text>Loading...</Text>; // Add a loading indicator if needed
  }

  return (
    <ContainerWithHeader title={"Games"}>
      <PopUp visible={isPopUpVisible} onClose={handleClosePopUp} />
      <View>
        <View style={{ marginTop: windowWidth * 0.02 }}>
          <View style={[styles.card, { width: windowWidth * 0.9, borderRadius: 10, marginBottom: windowHeight * 0.07, height: windowHeight * 0.2 }]}>
            <Text style={[TextStyles.regularSmall, { color: "white" }]}>{question.question}</Text>
          </View>
          <View style={[styles.boxesContainer, { marginBottom: windowHeight * 0.02, width:windowWidth*0.9 }]}>
            {question.choices.map((choice) => (
              <TouchableOpacity
                key={choice.id}
                style={[
                  styles.box,
                  selectedAnswer === choice ? styles.selectedBox : null,
                  { width: windowWidth * 0.42, height: windowWidth * 0.42 },
                ]}
                onPress={() => handleBoxPress(choice)}
              >
                <Text
                  style={[
                    styles.answer, TextStyles.boldSmall,
                  ]}
                >
                  {choice.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { width: windowWidth * 0.25, height: windowHeight * 0.05 }]}
          onPress={handleSave}
        >
          <Text style={[TextStyles.boldSmall, styles.buttonText]}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </ContainerWithHeader>
  );
}

export default Task;

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#4F2305'
  },
  content: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#c1393d",
  },
  card:{
      backgroundColor:'#4F2305',
      padding:10,
      alignSelf:'center'
  },
  box:{
      backgroundColor:'white',
      marginBottom:10,
      borderRadius:10,
      padding:5,
      justifyContent:'center',
      alignItems:'center'
  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  answer:{
      color:'#4F2305'
  },
  selectedBox:{
      backgroundColor:'#FF9E1F'
  },
  button:{
      backgroundColor:'#FF9E1F',
      borderWidth:3,
      borderColor:'#4F2305',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      margin:5
  },
  buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
  },
  buttonText:{
      color:'black'
  }
});
