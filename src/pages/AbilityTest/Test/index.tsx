import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ContainerWithHeader from '../../../components/containerWithHeader';
import PopUp from '../../../components/PopUp';
import TextStyles from '../../../assets/fonts';
import SweetAlert from 'react-native-sweet-alert';

const Test = ({ route, navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { user, onUpdate } = route.params;
  const [isPopUpVisible, setPopUpVisible] = useState(true);
  const [questions, setQuestions] = useState([
      {
          id: 1,
          questionText: "Soal dengan teks biasa dan pangkat A^2 kakakak",
          questionImage: null,
          choices: [
              { id: 1, text: "A", image: null },
              { id: 2, text: "B^2", image: null },
              { id: 3, text: "C", image: null },
              { id: 4, text: "D", image: null },
          ],
          correctAnswerId: 2,
      },
      {
          id: 2,
          questionText: null,
          questionImage: "https://example.com/image.jpg",
          choices: [
              { id: 1, text: "A", image: null },
              { id: 2, text: "B", image: null },
              { id: 3, text: "C", image: null },
              { id: 4, text: "D", image: null },
          ],
          correctAnswerId: 2,
      },
      {
          id: 3,
          questionText: "Soal dengan teks dan gambar A^3 + B^2",
          questionImage: "https://example.com/image.jpg",
          choices: [
              { id: 1, text: "A", image: "https://example.com/imageA.jpg" },
              { id: 2, text: "B", image: "https://example.com/imageB.jpg" },
              { id: 3, text: "C^2", image: null },
              { id: 4, text: "D", image: null },
          ],
          correctAnswerId: 2,
      },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
      questions.map(() => null)
  );

  const handleBack = () => {
      if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
  };

  const handleNext = () => {
      if (!selectedAnswers[currentQuestionIndex]) {
          SweetAlert.showAlertWithOptions({
              title: 'Mohon Maaf',
              subTitle: 'Anda harus mengisi jawaban terlebih dahulu',
              confirmButtonTitle: 'OK',
              style: 'warning',
          });
      } else {
          if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
          }
      }
  };

  const handleSave = () => {
      if (!selectedAnswers[currentQuestionIndex]) {
          SweetAlert.showAlertWithOptions({
              title: 'Mohon Maaf',
              subTitle: 'Anda harus mengisi jawaban terlebih dahulu',
              confirmButtonTitle: 'OK',
              style: 'warning',
          });
      } else {
          let totalPoints = 0;
          for (let i = 0; i < questions.length; i++) {
              if (
                  selectedAnswers[i] &&
                  selectedAnswers[i].id === questions[i].correctAnswerId
              ) {
                  totalPoints++;
              }
          }

          if (currentQuestionIndex === questions.length - 1) {
              navigation.replace("AbilityScore", {
                  totalPoints,
                  user: user,
                  onUpdate
              });
          }
      }
  };

  const handleBoxPress = (choice) => {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[currentQuestionIndex] = choice;
      setSelectedAnswers(updatedAnswers);
  };

  const formatSuperscript = (text, textStyles) => {
        const parts = text.split(/(\^[0-9]+)/); // Split text into parts
        return (
            <Text style={textStyles}> {/* Ensuring the text color matches your design */}
                {parts.map((part, index) => {
                    if (part.startsWith('^')) {
                        return (
                            <Text key={index}>
                                <Text style={{ fontSize: 13 }}>
                                    {parts[index - 1]}
                                </Text>
                                <Text style={{ fontSize: 10, transform: [{ translateY: -6 }] }}>
                                    {part.slice(1)}
                                </Text>
                            </Text>
                        );
                    } else if (!parts[index + 1]?.startsWith('^')) {
                        return <Text key={index}>{part}</Text>;
                    }
                    return null;
                })}
            </Text>
        );
    };




  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const handleClosePopUp = () => {
      setPopUpVisible(false);
  };
  const choicesText = [styles.answer, TextStyles.boldSmall]
  const questionText = { ...TextStyles.regularSmall, color: 'white' }
  return (
      <ContainerWithHeader title={"Tes Kemampuan"}>
          <PopUp visible={isPopUpVisible} onClose={handleClosePopUp} />
          <View>
              <View style={{ marginTop: windowWidth * 0.02 }}>
                  <Text style={[TextStyles.boldSmall, { color: 'white', textAlign: 'center', marginBottom: 10 }]}>
                      Soal no <Text style={{ fontWeight: 'bold' }}>{currentQuestionIndex + 1}</Text> / <Text style={{ fontWeight: 'bold' }}>{questions.length}</Text>
                  </Text>
                  <View style={[styles.card, { width: windowWidth * 0.8, borderRadius: 10, marginBottom: windowHeight * 0.07, height: windowHeight * 0.2 }]}>
                      {currentQuestion.questionText && (
                          <Text>
                              {formatSuperscript(currentQuestion.questionText, questionText)}
                          </Text>
                      )}
                      {currentQuestion.questionImage && (
                          <Image
                              source={{ uri: currentQuestion.questionImage }}
                              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                          />
                      )}
                  </View>
                  <View style={[styles.boxesContainer, { marginBottom: windowHeight * 0.02 }]}>
                      {currentQuestion.choices.map((choice) => (
                          <TouchableOpacity
                              key={choice.id}
                              style={[
                                  styles.box,
                                  selectedAnswer === choice ? styles.selectedBox : null,
                                  { width: windowWidth * 0.8, height: windowHeight * 0.06 },
                              ]}
                              onPress={() => handleBoxPress(choice)}
                          >
                              {choice.image ? (
                                  <Image
                                      source={{ uri: choice.image }}
                                      style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                  />
                              ) : (
                                  <Text>
                                      {formatSuperscript(choice.text, choicesText)}
                                  </Text>
                              )}
                          </TouchableOpacity>
                      ))}
                  </View>
              </View>
          </View>
          <View style={styles.buttonContainer}>
              {currentQuestionIndex > 0 && (
                  <TouchableOpacity
                      style={[styles.button, { width: windowWidth * 0.25, height: windowHeight * 0.05 }]}
                      onPress={handleBack}
                  >
                      <Text style={[TextStyles.boldSmall, styles.buttonText]}>Kembali</Text>
                  </TouchableOpacity>
              )}
              {currentQuestionIndex < questions.length - 1 ? (
                  <TouchableOpacity
                      style={[styles.button, { width: windowWidth * 0.25, height: windowHeight * 0.05 }]}
                      onPress={handleNext}
                  >
                      <Text style={[TextStyles.boldSmall, styles.buttonText]}>Lanjut</Text>
                  </TouchableOpacity>
              ) : (
                  <TouchableOpacity
                      style={[styles.button, { width: windowWidth * 0.25, height: windowHeight * 0.05 }]}
                      onPress={handleSave}
                  >
                      <Text style={[TextStyles.boldSmall, styles.buttonText]}>Simpan</Text>
                  </TouchableOpacity>
              )}
          </View>
      </ContainerWithHeader>
  );
};


export default Test

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
        padding:5
    },
    box:{
        backgroundColor:'white',
        marginBottom:10,
        borderRadius:10,
        padding:5,
        justifyContent:'center'
    },
    boxesContainer:{
        marginTop:20,
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
})