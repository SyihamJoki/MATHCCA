import { Alert, Button, Dimensions, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ContainerWithHeader from '../../../components/containerWithHeader'
import TextStyles from '../../../assets/fonts';
import { BarChart } from 'react-native-gifted-charts';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as RNFS from 'react-native-fs';
import SweetAlert from 'react-native-sweet-alert';
import { PermissionsAndroid, Platform } from 'react-native';
const Rapor = ({ route }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { user } = route.params;

  const renderExerciseScore = (score, defaultText) => {
    return score === 0 ? defaultText : score;
  };

  const exerciseData = [
    { label: 'Asesmen 1', value: user.exercise1 * 10 },
    { label: 'Asesmen 2', value: user.exercise2 * 10 },
    { label: 'Asesmen 3', value: user.exercise3 * 10 },
    { label: 'Pengayaan', value: user.pengayaan * 10 },
  ];

  const filteredData = exerciseData.filter(item => item.value !== 0);

  const data = exerciseData.map(item => ({
    value: item.value,
    label: item.label,
    frontColor: '#FF9E1F',
  }));

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Izin Akses Penyimpanan",
            message: "Aplikasi ini memerlukan akses ke penyimpanan Anda untuk mengunduh dan menyimpan file.",
            buttonNeutral: "Tanya Nanti",
            buttonNegative: "Batal",
            buttonPositive: "OK"
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    const formatValue = (value) => (value === 0 ? '-' : value);

    let htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .header {
            text-align: center;
            padding: 20px;
            background-color: #4F2305;
            color: white;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header p {
            margin: 5px 0;
            font-size: 16px;
          }
          .line {
            border-bottom: 2px solid #FF9E1F;
            margin: 20px 0;
          }
          .content {
            padding: 0 20px;
          }
          .content .info {
            margin-bottom: 20px;
            font-size: 16px;
          }
          .content .info p {
            margin: 5px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: white;
          }
          th, td {
            padding: 12px;
            text-align: center;
            border: 1px solid #ddd;
          }
          th {
            background-color: #4F2305;
            color: white;
          }
          td {
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Rapor Pembelajaran</h1>
          <p>dibuat oleh Mathcca App</p>
          <p>Email: pkmrshmathcca@gmail.com</p>
        </div>
        <div class="line"></div>
        <div class="content">
          <div class="info">
            <p><strong>Nama:</strong> ${user.fullName}</p>
            <p><strong>Asal Sekolah:</strong> ${user.school}</p>
            <p><strong>Kelas:</strong> ${user.grade}</p>
          </div>
          <table>
            <tr>
              <th>Asesmen</th>
              <th>Nilai</th>
            </tr>
            ${exerciseData
              .map(
                item => `
                <tr>
                  <td>${item.label}</td>
                  <td>${formatValue(item.value)}</td>
                </tr>
              `
              )
              .join('')}
          </table>
        </div>
      </body>
    </html>
  `;

    const getUniqueFilePath = async (filePath) => {
      let uniqueFilePath = filePath;
      let fileExists = await RNFS.exists(uniqueFilePath);
      let count = 1;

      while (fileExists) {
        const extension = filePath.substring(filePath.lastIndexOf('.'));
        const baseName = filePath.substring(0, filePath.lastIndexOf('.'));
        uniqueFilePath = `${baseName}_${count}${extension}`;
        fileExists = await RNFS.exists(uniqueFilePath);
        count++;
      }

      return uniqueFilePath;
    };

    Alert.alert(
      "Konfirmasi Akses",
      "Apakah Anda yakin ingin mengunduh Rapor Pembelajaran?",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Unduh",
          onPress: async () => {
            const hasPermission = await requestStoragePermission();
            if (!hasPermission) {
              Alert.alert(
                "Izin ditolak",
                "Aplikasi memerlukan izin untuk menyimpan file.",
                [
                  {
                    text: "Buka Pengaturan",
                    onPress: () => {
                      // Buka pengaturan aplikasi secara manual
                      Linking.openSettings();
                    }
                  },
                  {
                    text: "Batal",
                    style: "cancel"
                  }
                ]
              );
              return;
            }
    
            try {
              let file = await RNHTMLtoPDF.convert({
                html: htmlContent,
                fileName: 'rapor_pembelajaran',
              });
    
              const initialPath = `${RNFS.DownloadDirectoryPath}/rapor_pembelajaran.pdf`;
    
              const destinationPath = await getUniqueFilePath(initialPath);
    
              await RNFS.moveFile(file.filePath, destinationPath);
    
              SweetAlert.showAlertWithOptions({
                title: 'Berhasil',
                subTitle: `File berada di ${destinationPath}`,
                confirmButtonTitle: 'OK',
                style: 'success',
                cancellable: false,
              });
              console.log(destinationPath);
            } catch (error) {
              console.error("Error creating or moving PDF:", error);
              Alert.alert("Terjadi kesalahan saat membuat atau memindahkan PDF.");
            }
          }
        }
      ]
    );
    
  };

  return (
    <ContainerWithHeader title="Rapor Belajar">
      <View style={{ paddingTop: 10 }}>
        <Text style={[TextStyles.boldLarge, { color: 'white' }]}>Statistik Pembelajaran</Text>
        <View style={{ backgroundColor: '#4F2305', borderRadius: 10, width: windowWidth * 0.9, marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
          <BarChart
            data={data}
            barWidth={windowWidth * 0.12}
            height={windowHeight * 0.25}
            width={windowWidth * 0.75}
            barBorderRadius={5}
            yAxisThickness={0}
            rulesLength={windowWidth * 0.73}
            xAxisThickness={0}
            noOfSections={5}
            isAnimated
            maxValue={100}
            spacing={windowWidth * 0.065}
            xAxisLabelTextStyle={[TextStyles.regular, { color: 'white', fontSize: 10, rotateLabel: -45 }]}
          />
        </View>
        <TouchableOpacity onPress={createPDF} style={{ backgroundColor: '#FF0000', width: windowWidth * 0.9, height: windowHeight * 0.05, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 10 }}>
          <Text style={[TextStyles.boldSmall, { color: "white" }]}>Unduh Rapor Pembelajaran</Text>
        </TouchableOpacity>
        <View style={{ width: windowWidth * 0.9, height: windowHeight * 0.23, alignSelf: 'center', marginTop: 20 }}>
          <ImageBackground source={require("../../../assets/image/bg-batik.png")} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={[TextStyles.boldLarge, { color: "white" }]}>Sedikit kemajuan setiap hari menambah hasil yang besar!</Text>
          </ImageBackground>
        </View>
      </View>
    </ContainerWithHeader>
  )
};

export default Rapor

const styles = StyleSheet.create({})