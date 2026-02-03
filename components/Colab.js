// import React from 'react'
// import { StyleSheet,ImageBackground, Text, View, Dimensions  } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";


// const { width, height } = Dimensions.get("window");


// export default function Colab() {
//   return (
// <View style={styles.container}>
//  <ImageBackground
//       source={require('../assets/shape.png')} // your background image
//       style={styles.background}
//       resizeMode='cover'
//    >

//       <View style={styles.content}>
//         <Text style={styles.title}>Colabrative Tasks</Text>
//         <Text style={styles.title}>Stay tuned...</Text>

//       </View>
      
//      </ImageBackground>
//          </View>

   
//   );

//     // <View>
//     //     <Text style={styles.sectionTitle}> Colabrative Tasks </Text>
//     //     <Text style={styles.sectionTitle}> Stay tuned... </Text>
//     // </View>
    
// }


// const styles = StyleSheet.create({
//    background: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//     // container: {
//     //   flex: 1,
//     //   backgroundColor: 'E8EAED',
//     // },
//     // scrollView: {
//     //   backgroundColor: '#fff',
//     //   marginHorizontal: 5,
//     // },
//     // taskWrapper:{
//     //   paddingTop:70,
//     //   paddingHorizontal:20,
//     // },
//     // sectionTitle:{
//     //   fontSize:24,
//     //   fontWeight:'bold',
//     //   textAlign: 'center',
//     //   padding: 100 ,
//     // },


    
// //"#c894e9ff"
//     container: {
//     flex: 1,
//     backgroundColor: "#b5c99a",
    
//   },
//   circle: {
//     position: "absolute",
//     borderRadius: 9999,
//     opacity: 0.2,
//   },
//   gradientRing: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 6, // thickness of the ring
//   },
//    innerCircle: {
//     flex: 1,
//     width: '100%',
//     borderRadius: 60,
//     backgroundColor: 'transparent', // background inside the ring
//   },
//   circle1: {
//     width: width * 0.6,
//     height: width * 0.6,
//     backgroundColor: "#a78bfa",
//     top: 50,
//     left: 40,
//   },
//   circle2: {
//     width: width * 0.8,
//     height: width * 0.8,
//     backgroundColor: "#7c3aed",
//     bottom: 100,
//     right: 20,
//   },
  // content: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
//   title: {
//     fontSize: 26,
//     fontWeight: "600",
//     color: "white",
//   },
// })



import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import SvgComponent from "../assets/BackgroundSvg.js";
import { useTranslation } from 'react-i18next';



export default function Colab() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
       {/* <SvgComponent style={StyleSheet.absoluteFill} /> */}

     <View style={styles.content}>
         <Text style={styles.title}>Colabrative Tasks</Text>
         <Text style={styles.title}>Stay tuned...</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassCard: {
    width: 300,
    padding: 24,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.25)', // adds translucency
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
    content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
