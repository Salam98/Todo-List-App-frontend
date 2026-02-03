import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import api from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleLogin from "../utils/GoogleAuth.js";
import SvgComponent from "../assets/BackgroundSvg.js";
import { useTranslation } from 'react-i18next';





export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      const res = await api.post(`/api/register`, {
        name,
        email,
        password,
      });
      if (res.status === 200 || res.status === 201) {
        await AsyncStorage.setItem('authToken',  res.data.token);
        Alert.alert('Account created successfully!');
        navigation.replace('MainTabs');
      }
    } catch (err) {
      Alert.alert('Error', err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <View style={styles.container}>
      {/* <SvgComponent style={StyleSheet.absoluteFill} /> */}
      <View style={styles.header} >
          <Text style={styles.title}>{t('create')}</Text>
          <Text style={styles.title}>{t('account')}</Text>
      </View>
    
      <View style={styles.middle} >
          <View  style={styles.LoginHeader}>
        <Text style={styles.LoginTitle}>{t('signUp')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.switchText}>
          {t('haveAccount')} <Text style={styles.link}>{t('signIn')}</Text>
        </Text>
      </TouchableOpacity>
      </View>
       <TextInput
              placeholder={t('user name')}
              label={undefined}
              mode="outlined"
              left={<TextInput.Icon icon="account" />}
              contentStyle={{ fontSize: 16 }}
              outlineStyle={{ borderRadius: 20 }}
              style={{ marginBottom: 20 }}
              activeOutlineColor="#4daf76ff"
              value={name}
              onChangeText={setName}
        />
          <TextInput
              placeholder={t('email')}
              label={undefined}
              mode="outlined"
              left={<TextInput.Icon icon="email" />}
              contentStyle={{ fontSize: 16 }}
              outlineStyle={{ borderRadius: 20 }}
              style={{ marginBottom: 20 }}
              activeOutlineColor="#4daf76ff"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
        />
          <TextInput
            placeholder={t('password')}
            label={undefined}
            mode="outlined"
            left={<TextInput.Icon icon="key-variant" />}
            contentStyle={{ fontSize: 16 }}
            outlineStyle={{ borderRadius: 20 }}
            activeOutlineColor="#4daf76ff"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>{t('signUp')}</Text>
      </TouchableOpacity>
      </View>
    
       <View style={styles.continueWith}>
          <View style={styles.line} />
          <Text style={styles.switchText}> {t('continueWith')} </Text>
          <View style={styles.line} />
       </View>

      <GoogleLogin />
    
    </View>

    // <View style={styles.container}>
    //   <SvgComponent style={StyleSheet.absoluteFill} />
    //   <Text style={styles.title}>Create Account</Text>

    //   <TextInput
    //     style={styles.input}
    //     placeholder="Username"
    //     value={name}
    //     onChangeText={setName}
    //   />

    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     value={email}
    //     onChangeText={setEmail}
    //     keyboardType="email-address"
    //   />

    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     secureTextEntry
    //     value={password}
    //     onChangeText={setPassword}
    //   />
    //   <TouchableOpacity style={styles.button} onPress={handleSignUp}>
    //     <Text style={styles.buttonText}>Sign Up</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
    //     <Text style={styles.switchText}>
    //       Already have an account? <Text style={styles.link}>Sign In</Text>
    //     </Text>
    //   </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  placeHolder: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  icon:{marginLeft:30},
  header: { marginTop: -10},
  title: { fontSize: 40, fontWeight: 'bold', color: '#222', textAlign: 'left', paddingLeft: 20 },
  LoginHeader: { alignItems: 'center',marginBottom: 20 },
  LoginTitle:{fontSize: 32, marginBottom:5,fontWeight: 'bold', color: '#222',},
  middle: { marginTop: 150 },
  input: {
    borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff' ,borderRadius: 20, padding: 12, marginBottom: 16, fontSize: 16,
  },
   line: {
    flex: 1,
    height: 0.7,
    backgroundColor: '#ccc',
  },
   continueWith: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: { backgroundColor: '#4CAF50', width: '100%' ,borderRadius: 20, padding: 14, marginTop:30 ,alignItems: 'center', alignSelf:'center' },
  buttonText: { color: '#fff', fontSize: 16,  },
  switchText: { textAlign: 'center',color: '#555', fontSize: 12, },
  link: { color: '#4CAF50', fontWeight: 'bold' },
});
