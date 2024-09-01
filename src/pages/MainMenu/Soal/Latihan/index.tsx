import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SweetAlert from 'react-native-sweet-alert';
import { dataTingkatan } from '../../../../data/data';
import ContainerWithHeader from '../../../../components/containerWithHeader';
import Loading from '../../../../components/loading';
import TextStyles from '../../../../assets/fonts';

const Latihan = ({ route, navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { user, onUpdate } = route.params;
    const materi = dataTingkatan[user.tingkat];
    const asesmenSoal = materi.latihanSoal;

    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (asesmenSoal) {
        setQuestions(asesmenSoal);
        setSelectedAnswers(asesmenSoal.map(() => null));
        setLoading(false);
        }
    }, [asesmenSoal]);

    const handleSave = () => {
        if (!selectedAnswers[currentQuestionIndex]) {
        SweetAlert.showAlertWithOptions({
            title: 'Mohon Maaf',
            subTitle: 'Anda harus mengisi jawaban terlebih dahulu',
            confirmButtonTitle: 'OK',
            style: 'warning',
        });
        } else {
        setPopUpVisible(true);
        }
    };

    const handleBoxPress = (choice) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = choice;
        setSelectedAnswers(updatedAnswers);
    };

    const handleClosePopUp = () => {
        setPopUpVisible(false);

        if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
        navigation.navigate("Soal", {
            user,
            onUpdate: (updatedUser) => {
            onUpdate(updatedUser);
            },
        });
        }
    };

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];

    if (loading) {
        return (
        <ContainerWithHeader title={"Latihan Soal"}>
            <Loading visible={loading} />
        </ContainerWithHeader>
        );
    }

    return (
        <ContainerWithHeader title={"Latihan Soal"}>
        <View>
            <View style={{ marginTop: windowWidth * 0.02 }}>
            <Text style={[TextStyles.boldSmall, { color: 'white', textAlign: 'center', marginBottom: 10 }]}>
                Soal no <Text style={{ fontWeight: 'bold' }}>{currentQuestionIndex + 1}</Text> / <Text style={{ fontWeight: 'bold' }}>{questions.length}</Text>
            </Text>
            {currentQuestion && (
                <View style={[styles.card, { width: windowWidth * 0.8, borderRadius: 10, marginBottom: windowHeight * 0.02, height: windowHeight * 0.4 }]}>
                {currentQuestion.questionImage && (
                    <ScrollView horizontal style={{ backgroundColor: 'white', height: windowHeight * 0.25 }}>
                    <Image
                        source={currentQuestion.questionImage}
                        style={{ width: windowWidth, height: windowHeight * 0.25, resizeMode: 'contain' }}
                    />
                    </ScrollView>
                )}
                {currentQuestion.questionText && (
                    <ScrollView style={{ maxHeight: currentQuestion.questionImage ? windowHeight * 0.15 : windowHeight * 0.4 }}>
                    <Text style={[TextStyles.regularSmall, { color: 'white' }]}>
                        {currentQuestion.questionText}
                    </Text>
                    </ScrollView>
                )}
                </View>
            )}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.boxesContainer, { marginBottom: windowHeight * 0.02 }]}>
                {currentQuestion && currentQuestion.choices.map((choice) => (
                    <TouchableOpacity
                    key={choice.id}
                    style={[
                        styles.box,
                        selectedAnswer === choice ? styles.selectedBox : null,
                        {
                        width: windowWidth * 0.8,
                        height: choice.image ? windowHeight * 0.3 : windowHeight * 0.06, // Adjust height based on image presence
                        },
                    ]}
                    onPress={() => handleBoxPress(choice)}
                    >
                    {choice.image ? (
                        <Image
                        source={choice.image}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                        />
                    ) : (
                        <Text style={[styles.answer, TextStyles.boldSmall]}>
                        {choice.text}
                        </Text>
                    )}
                    </TouchableOpacity>
                ))}
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, { width: windowWidth * 0.4, height: windowHeight * 0.05 }]}
                    onPress={handleSave}
                >
                    <Text style={[TextStyles.boldSmall, styles.buttonText]}>Simpan Jawaban</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
            {isPopUpVisible && (
            <Modal transparent animationType="slide">
                <View style={styles.popUpContainer}>
                <View style={styles.popUp}>
                    <Text style={[TextStyles.boldSmall,{color:'black'}]}>Pertanyaan</Text>
                    <Text style={[TextStyles.regularSmall, {color:'black', marginBottom:10}]}>{currentQuestion.questionText}</Text>
                    {currentQuestion.image && (
                        <ScrollView horizontal style={{ backgroundColor: 'white', height: windowHeight * 0.25 }}>
                        <Image
                            source={currentQuestion.image}
                            style={{ width: windowWidth*0.7, height: windowHeight * 0.25, resizeMode: 'contain' }}
                        />
                        </ScrollView>
                    )}
                    <Text style={[TextStyles.boldSmall, {color: selectedAnswer && selectedAnswer.id === currentQuestion.correctAnswerId ? '#08c239' : '#FF0B0B', marginBottom:10}]}>
                        {`Jawaban Anda ${selectedAnswer && selectedAnswer.id === currentQuestion.correctAnswerId ? 'Benar' : 'Salah'}`}
                    </Text>
                    <Text style={[TextStyles.boldSmall,{color:'black'}]}>Pembahasan</Text>
                    <Text style={[TextStyles.regularSmall, {color:"black", marginBottom: 10 }]}>
                    {currentQuestion.pembahasan} {/* Explanation text */}
                    </Text>
                    <TouchableOpacity onPress={handleClosePopUp} style={[styles.closeButton, {width:windowWidth*0.2, height:windowHeight*0.04}]}>
                    <Text style={[TextStyles.boldSmall, {color:'white'}]}>OK</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
            )}
        </View>
        </ContainerWithHeader>
    );
};
  
const styles = StyleSheet.create({
    // Add your styles here
    popUpContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popUp: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    closeButton: {
      backgroundColor:'#c1393d',
      justifyContent:'center',
      alignItems:'center',
      marginTop: 10,
      borderRadius:5,
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
});

export default Latihan