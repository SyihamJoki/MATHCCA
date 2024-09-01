import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
            questionText: "Diketahui S= {bilangan asli kurang dari 10} dan A= {2, 4, 6, 8}. Nilai dari A^c adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: "A^c  = {1, 2, 3, 4, 5, 6, 7, 8, 9}", image: null },
                { id: 2, text: "A^c  = {1, 2, 3, 5, 7, 9}", image: null },
                { id: 3, text: "A^c  = {1, 3, 5, 7, 9}", image: null },
                { id: 4, text: "A^c  = {2, 4, 6, 8}", image: null },
            ],
            explainImage:null,
            correctAnswerId: 3,
            explain:"S = {1, 2, 3, 4, 5, 6, 7, 8, 9}\nA = {2, 4, 6, 8}\nA^cc  = {1, 3, 5, 7, 9} (C)"
        },
        {
            id: 2,
            questionText: "Jika A = {x | -3 ≤ x ≤ 12,x є bilangan bulat}, maka n(A) adalah..",
            questionImage: null,
            choices: [
                { id: 1, text: "17", image: null },
                { id: 2, text: "16", image: null },
                { id: 3, text: "15", image: null },
                { id: 4, text: "14", image: null },
            ],
            explainImage:null,
            correctAnswerId: 2,
            explain:'A = {x | -3 ≤ x ≤ 12, x є bilangan bulat}\nA = {-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}\nn(A) = 16 (B)'
        },
        {
            id: 3,
            questionText: "Diketahui P = {bilangan asli kurang dari 5}, Q = {bilangan cacah kurang dari 6}, dan R = {bilangan ganjil kurang dari 6}, maka n(P - (Q ∩ R)) adalah ….",
            questionImage: null,
            choices: [
                { id: 1, text: "2", image: null },
                { id: 2, text: "3", image: null },
                { id: 3, text: "4", image: null },
                { id: 4, text: "5", image: null },
            ],
            explainImage:null,
            correctAnswerId: 1,
            explain:'P = {bilangan asli kurang dari 5}\nP = {1, 2, 3, 4}\nQ = {bilangan cacah kurang dari 6}\nQ = {0, 1, 2, 3, 4, 5}\nR = {bilangan ganjil kurang dari 6}\nR = {1, 3, 5}\n(Q ∩ R) = {1, 3, 5}\nP – (Q ∩ R) = ({1, 2, 3, 4} – {1, 3, 5})\nn(P – (Q ∩ R)) = {2,4}\n= 2 (A)'
        },
        {
            id: 4,
            questionText: "Diketahui A = {10, 11, 12, 13}, B = {bilangan cacah antara 10 dan 15}, dan C ={x | 8 ≤ x ≤ 12, x є bilangan asli) maka A - (B ∩ C) dan A - (B ∪ C) adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: "A – (B ∩ C) = {10, 13} dan A – (B ∪ C) = {10, 13}", image: null },
                { id: 2, text: "A – (B ∩ C) = {} dan A – (B ∪ C) = {}", image: null },
                { id: 3, text: "A – (B ∩ C) = {} dan A – (B ∪ C) = {10, 13}", image: null },
                { id: 4, text: "A – (B ∩ C) = {10, 13} dan A – (B ∪ C) = {}", image: null },
            ],
            explainImage:null,
            correctAnswerId: 4,
            explain:"A = {10, 11, 12, 13}\nB = {bilangan cacah antara 10 dan 15}\nB = {11, 12, 13, 14}\nC = {x | 8 ≤ x ≤ 12, x є bilangan asli}\nC = {8, 9, 10, 11, 12}\nA – (B ∩ C) = ({10, 11, 12, 13} – {11, 12})\n= {10, 13}\nA – (B ∪ C) = ({10, 11, 12, 13} – {8, 9, 10, 11, 12, 13, 14})\n= {}\nJadi, A – (B ∩ C) = {10, 13} dan A – (B ∪ C) = {} (D)"
        },
        {
            id: 5,
            questionText: "Diketahui B = {1, 2, 3, 4}. Banyaknya himpunan bagian dari B adalah ….",
            questionImage: null,
            choices: [
                { id: 1, text: "14", image: null },
                { id: 2, text: "15", image: null },
                { id: 3, text: "16", image: null },
                { id: 4, text: "17", image: null },
            ],
            explainImage:null,
            correctAnswerId: 3,
            explain:"n(B) = 4\nBanyaknya himpunan bagian = 2^n\n2^4=16 (C)"
        },
        {
            id: 6,
            questionText: "Jika M={faktor dari 15} dan N={bilangan cacah kurang dari 8}, tentukan manakah pernyataan tersebut yang benar?",
            questionImage: null,
            choices: [
                { id: 1, text: "(M ∩ N) = {0,2,4,6,15}", image: null },
                { id: 2, text: "(M ∪ N) = {0,1,2,3,4,5,6,7,15}", image: null },
                { id: 3, text: "(M ∩ N) = {1,3,5,6}", image: null },
                { id: 4, text: "(M ∪ N) = {0,1,1,2,2,3,3,4,4,5,5,6,6,15}", image: null },
            ],
            explainImage:null,
            correctAnswerId: 2,
            explain:'Diketahui :\nM={1, 3, 5, 15}\nN={0, 1, 2, 3, 4, 5, 6, 7}\nPilihan A : (M∩N)={0,2,4,6,7,15} pernyataan tersebut salah karena seharusnya (M∩N)={1,3,5}\nPilihan B : (M∪N)={0,1,2,3,4,5,6,7,15}, pertanyaan tersebut benar\nPilihan C : (M∩N)={1,3,5,6}, pernyataan tersebut salah karena seharusnya (M∩N)={1,3,5}\nPilihan D = (M∪N)={0,1,1,2,2,3,3,4,4,5,5,6,6,7,15}, pernyataan tersebut salah karena untuk penulisan dari kedua himpunan yang sama hanya ditulis salah satu'
        },
        {
            id: 7,
            questionText: "Jika K={x | 5≤x≤11,x bilangan asli}\n dan L= {x | 7 ≤ x < 13,x bilangan cacah}. Pernyataan tersebut yang benar adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: "(K ∪ L) = {5,6,7,9,10,11} ", image: null },
                { id: 2, text: "(K ∪ L) = {7,8,9,10,11}", image: null },
                { id: 3, text: "(K ∩ L) = {5,6,12}", image: null },
                { id: 4, text: "(K ∩ L) = {7,8,9,10,11}", image: null },
            ],
            explainImage:null,
            correctAnswerId: 4,
            explain:'Diketahui :\nK={5, 6, 7, 8, 9, 10, 11)\nL={7, 8, 9, 10, 11, 12}\nPernyataan tersebut yang benar adalah\nPilihan A : (K∪L)={5,6,7,9,10,11,12}. pernyataan A salah karena (K∪L)={5,6,7,8,9,10,11,12}.  Dan pada pilihan A tidak terdapat bilangan 8\nPilihan B : (K∪L)={7,8,9,10,11}, pernyataan B salah karena (K∪L)={5,6,7,8,9,10,11,12}\nPilihan C : (K∩L)={5,6,12}, pernyataan C salah karena  (K∩L)={7,8,9,10,11}\nPilihan D : (K∩L)={7,8,9,10,11}, pernyataan D benar'
        },
        {
            id: 8,
            questionText: "Perhatikan diagram Venn diatas. Himpunan yang anggota-anggotanya {4, 6, 9} disebut dengan …",
            questionImage: require("../../../assets/image/AbiltyTest/soal_8.png"),
            choices: [
                { id: 1, text: "P ∪ Q", image: null },
                { id: 2, text: "P ∩ Q", image: null },
                { id: 3, text: "P ⊂ Q", image: null },
                { id: 4, text: "P ∈ Q", image: null },
            ],
            explainImage:null,
            correctAnswerId: 2,
            explain:'[4, 6, 9} merupakan anggota-anggota dari himpunan P dan Q. Pada himpunan P dan Q terdapat anggota yang sama yaitu {4, 6, 9}, sehingga himpunan ini disebut dengan P Irisan Q atau  (P∩Q)'
        },
        {
            id: 9,
            questionText: "Perhatikan himpunan-himpunan berikut\nS={1,2,3,4,5,6}\nA={2,4,6}\nB={2,3,5}\nPernyataan tersebut yang salah adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: "(A ∩ B)^C = {1,3,4,5,6}", image: null },
                { id: 2, text: "(A ∪  B) = {2,3,4,5,6}", image: null },
                { id: 3, text: "(A ∩ B) = {2}", image: null },
                { id: 4, text: "(A ∪ B) = {1,2,3,4,5,6}", image: null },
            ],
            explainImage:null,
            correctAnswerId: 4,
            explain:'Pilihan A : (A∩B)^Cartinya yang bukan anggota (A∩B)={2} sehingga (A∩B)^C={1,3,4,5,6}\nPilihan B: (A∪B)={2,3,4,5,6}, pernyataan tersebut benar\nPilihan C : (A∩B)={2}, pernyataan tersebut benar\nPilihan D : (A∪B)={1,2,3,4,5,6}, pernyataan tersebut salah karena (A∪B)={2,3,4,5,6}'
        },
        {
            id: 10,
            questionText: "Diketahui himpunan A={2, 3, 5, 7, 9, 11}\nBanyak himpunan bagian dari himpunan A adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: "4", image: null },
                { id: 2, text: "16", image: null },
                { id: 3, text: "24", image: null },
                { id: 4, text: "64", image: null },
            ],
            explainImage:null,
            correctAnswerId: 4,
            explain:'Berdasarkan pada teori dasar himpunan bahwa banyak anggota himpunan bagian suatu himpunan adalah 2^n, dimana n adalah banyak anggota himpunan.\nHimpunan A jika kita tuliskan anggota himpunannya menjadi\nA={2,3,5,7,9,11},n=6\nBanyak anggota himpunan bagian A adalah 2^6=64'
        },
        {
            id: 11,
            questionText: "Diketahui himpunan semesta S adalah himpunan bilangan cacah yang kurang dari 20. A adalah himpunan bilangan prima antara 3 dan 20. B adalah himpunan bilangan asli antara 3 dan 15. Komplemen dari A ∪ B adalah …",
            questionImage: null,
            choices: [
                { id: 1, text: "{0,1,2,5,7,11,13,15,16,18}", image: null },
                { id: 2, text: "{4,6,8,9,10,12,14,17,19}", image: null },
                { id: 3, text: "{4,6,8,9,10,12,14,15,17,19}", image: null },
                { id: 4, text: "{0,1,2,3,15,16,18}", image: null },
            ],
            explainImage:null,
            correctAnswerId: 4,
            explain:'Diketahui :\nS={0,1,2,3,4,5,…,18,19}\nA={5,7,11,13,17,19}\nB={4,5,…,13,14}\nDengan demikian, gabungan dari A dan B dinyatakan oleh\nA∪B={4,5,…,13,14,17,19}\nIni berarti, komplemen dari A∪B adalah\n(A∪B)^C = {0,1,2,3,15,16,18}'
        },
        {
            id: 12,
            questionText: "Diketahui P=[x | 3<x<13,x bilangan ganjil} dan Q={x | x<11,x bilangan prima}. Diagram Venn yang sesuai untuk kedua himpunan tersebut adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: null, image:require("../../../assets/image/AbiltyTest/jawban_a_soal_12.png") },
                { id: 2, text: null, image:require("../../../assets/image/AbiltyTest/jawban_b_soal_12.png") },
                { id: 3, text: null, image:require("../../../assets/image/AbiltyTest/jawban_c_soal_12.png") },
                { id: 4, text: null, image:require("../../../assets/image/AbiltyTest/jawban_d_soal_12.png") },
            ],
            explainImage:null,
            correctAnswerId: 1,
            explain:'Dengan mendaftarkan anggota(tabulasi) masing-masing himpunan, diperoleh\nP={5,7,9,11}\nQ={2,3,5,7}\nIrisan dari kedua himpunan ini adalah P∩Q={5,7}\nDiagram Venn yang tepat adalah pada pilihan A'
        },
        {
            id: 13,
            questionText: "Misalkan A={bilangan asli} dan B={x | √n=x}. Di antara nilai-nilai n berikut yang tidak memenuhi hubungan B ⊂ A adalah …",
            questionImage: null,
            choices: [
                { id: 1, text: "1", image: null },
                { id: 2, text: "3", image: null },
                { id: 3, text: "9", image: null },
                { id: 4, text: "16", image: null },
            ],
            explainImage:null,
            correctAnswerId: 2,
            explain:"B ⸦ A artinya semua anggota B adalah anggota A.\nDalam kasus ini, B harus beranggotakan bilangan asli.\nDiketahui : B={x⃓ √n=x}\nKetika n=1, maka x=√1=1 (bilangan asli)\nKetika n=3, maka x=√3 (bukan bilangan asli).\nDari sini kita tahu bahwa n harus berupa bilangan kuadrat sempurna (lebih dari 0). Jadi, nilai n yang tidak memenuhi hubungan tersebut adalah n=3."
        },
        {
            id: 14,
            questionText: "Dari 50 orang terdapat  35 orang berlangganan Koran, 26 orang berlangganan majalah, dan 7 orang tidak berlangganan keduanya. Banyak orang yang hanya berlangganan tepat satu dari keduanya adalah…",
            questionImage: null,
            choices: [
                { id: 1, text: "8", image: null },
                { id: 2, text: "17", image: null },
                { id: 3, text: "18", image: null },
                { id: 4, text: "25", image: null },
            ],
            explainImage:null,
            correctAnswerId: 4,
            explain:'Banyak orang yang berlangganan Koran atau majalah = 50 – 7 = 43 orang\nBanyak orang yang berlangganan Koran dan majalah = 35 + 26 – 43 = 18 orang\nBanyak orang yang hanya berlangganan Koran = 35 – 18 = 17 orang\nBanyak orang yang hanya berlangganan majalah = 26 – 18 = 8 orang\nBanyak orang yang berlangganan tepat satu dari keduanya = 17 + 8 = 25 orang '
        },
        {
            id: 15,
            questionText: "Perhatikan diagram Venn diatas. Hasil dari (P-Q)∩R^C adalah…",
            questionImage: require("../../../assets/image/AbiltyTest/soal_15.png"),
            choices: [
                { id: 1, text: "{a,b}", image: null },
                { id: 2, text: "{a,b,c}", image: null },
                { id: 3, text: "{l,m,n}", image: null },
                { id: 4, text: "{a,b,k,i}", image: null },
            ],
            correctAnswerId: 1,
            explainImage:require('../../../assets/image/AbiltyTest/explain_15.jpeg'),
            explain:"Berdasarkan diagram Venn di atas, diketahui\nP={a,b,c,d,i,k}\nQ={d,e,f,g,i,k}\nR={c,d,g,h,j}\nP-Q adalah anggota P yang bukan anggota Q, yaitu P-Q={a,b,c}\nR^C (komplemen R) adalah anggota semesta yang bukan anggota R, yaitu\nR^C={a,b,e,f,i,k,m,l,n}\nDengan demikian,\n(P-Q)∩R^C\n={a,b,c}∩{a,b,e,f,i,k,m,l,n}\n={a,b}"
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
                    onUpdate,
                    questions, // Mengirimkan semua data pertanyaan
                    selectedAnswers, // Mengirimkan semua jawaban yang dipilih oleh user
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
    return (
      <ContainerWithHeader title={"Tes Kemampuan"}>
          <PopUp visible={isPopUpVisible} onClose={handleClosePopUp} />
          <View>
              <View style={{ marginTop: windowWidth * 0.02 }}>
                  <Text style={[TextStyles.boldSmall, { color: 'white', textAlign: 'center', marginBottom: 10 }]}>
                      Soal no <Text style={{ fontWeight: 'bold' }}>{currentQuestionIndex + 1}</Text> / <Text style={{ fontWeight: 'bold' }}>{questions.length}</Text>
                  </Text>
                  <View style={[styles.card, { width: windowWidth * 0.8, borderRadius: 10, marginBottom: windowHeight * 0.02, height: windowHeight * 0.4 }]}>
                        {currentQuestion.questionImage && (
                          <Image
                          source={currentQuestion.questionImage}
                          style={{ width: windowWidth*0.75, height: windowHeight*0.25, resizeMode: 'contain' }}
                          />
                        )}
                        {currentQuestion.questionText && (
                            <Text style={[TextStyles.regularSmall, {color: 'white'}]}>
                                {currentQuestion.questionText}
                            </Text>
                        )}
                  </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={[styles.boxesContainer, { marginBottom: windowHeight * 0.02 }]}>
                            {currentQuestion.choices.map((choice) => (
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