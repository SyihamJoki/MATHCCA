import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContainerWithHeader from '../../../../components/containerWithHeader';
import PopUp from '../../../../components/PopUp';
import SweetAlert from 'react-native-sweet-alert';
import { dataTingkatan } from '../../../../data/data';
import TextStyles from '../../../../assets/fonts';
import Loading from '../../../../components/loading';
import Sound from 'react-native-sound';

const Asesmen = ({ route, navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { user, onUpdate } = route.params;
    const materi = dataTingkatan[user.tingkat];
    const asesmenSoal = materi.asesmen;
    
    const [isPopUpVisible, setPopUpVisible] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (asesmenSoal) {
            setQuestions(asesmenSoal);
            setSelectedAnswers(asesmenSoal.map(() => null));
            setLoading(false); // Set loading to false once data is loaded
        }
    }, [asesmenSoal]);

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
                navigation.replace("HasilAsesmen", {
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

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    const handleClosePopUp = () => {
        setPopUpVisible(false);
    };

    useEffect(() => {
        let backgroundSound;

        // Inisialisasi sound
        backgroundSound = new Sound('music.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Failed to load the sound', error);
                return;
            }
            // Memulai pemutaran sound
            backgroundSound.setNumberOfLoops(-1); // Looping
            backgroundSound.play((success) => {
                if (!success) {
                    console.log('Sound did not play successfully');
                }
            });
        });

        // Menghentikan sound ketika keluar dari halaman
        return () => {
            if (backgroundSound) {
                backgroundSound.stop(() => {
                    backgroundSound.release();
                });
            }
        };
    }, []);

    if (loading) {
        // You can replace this with a custom loader or any UI you'd like to show during loading
        return (
            <ContainerWithHeader title={"Asesmen"}>
                <Loading visible={loading}/>
            </ContainerWithHeader>
        );
    }

    return (
        <ContainerWithHeader title={"Asesmen"}>
            <PopUp visible={isPopUpVisible} onClose={handleClosePopUp} />
            <View>
                <View style={{ marginTop: windowWidth * 0.02 }}>
                    <Text style={[TextStyles.boldSmall, { color: 'white', textAlign: 'center', marginBottom: 10 }]}>
                        Soal no <Text style={{ fontWeight: 'bold' }}>{currentQuestionIndex + 1}</Text> / <Text style={{ fontWeight: 'bold' }}>{questions.length}</Text>
                    </Text>
                    {currentQuestion && (
                        <View style={[styles.card, { width: windowWidth * 0.8, borderRadius: 10, marginBottom: windowHeight * 0.02, height: windowHeight * 0.4 }]}>
                            {currentQuestion.questionImage && (
                                <ScrollView horizontal style={{backgroundColor:'white', height:windowHeight*0.25}}>
                                    <Image
                                        source={currentQuestion.questionImage}
                                        style={{ width:windowWidth, height: windowHeight * 0.25, resizeMode:'contain'}}
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
                    </ScrollView>
                </View>
            </View>
        </ContainerWithHeader>
    );
};



export default Asesmen

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