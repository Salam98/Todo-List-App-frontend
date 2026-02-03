import React, { useState , useEffect} from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import api from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleLogin from "../utils/GoogleAuth.js";
import { useTodos } from "../context/TodoContext";
import SvgComponent from "../assets/BackgroundSvg.js";
import { useTranslation } from 'react-i18next';



export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername, setToken } = useTodos();
  const [enabled, setEnabled] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { t } = useTranslation();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      const res = await api.post(`/api/login`, {
        email,
        password,
      });  
      if (res.status === 200) {
         await AsyncStorage.setItem('authToken', res.data.token);
         await AsyncStorage.setItem("username", res.data.user.name);
         api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

        if (enabled) {
            await AsyncStorage.setItem('rememberedEmail', email);
      } else {
            await AsyncStorage.removeItem('rememberedEmail');
      }
         setUsername(res.data.user.name);
         setToken(res.data.token);
         navigation.replace('MainTabs');
      }
    } catch (err) {
      Alert.alert('Error', err.response?.data?.message || 'Invalid credentials');
    }
  };
  const onToggleRememberMe = async (value) => {
  setEnabled(value);
  try {
    await AsyncStorage.setItem('rememberMe', JSON.stringify(value));
  } catch (e) {
    console.log('Failed to save rememberMe', e);
  }
};
useEffect(() => {
  const checkAuth = async () => {
      try {
          const token = await AsyncStorage.getItem('authToken');
          if (!token) return;
          const res = await api.get('/user');
          setToken(token);
          setUsername(res.data.name);
          navigation.replace('MainTabs');
    } catch (err) {
          await AsyncStorage.multiRemove(['authToken', 'username']);
    }finally {
      setCheckingAuth(false);
    }
  };

  checkAuth();
}, []);


 useEffect(() => {
  const loadRememberMe = async () => {
    try {
      const savedRemember = await AsyncStorage.getItem('rememberMe');
      const savedEmail = await AsyncStorage.getItem('rememberedEmail');

      if (savedRemember !== null) {
        const remember = JSON.parse(savedRemember);
        setEnabled(remember);

        if (remember && savedEmail) {
          setEmail(savedEmail);
        }
      }
    } catch (e) {
      console.log('Failed to load remember me', e);
    }
  };

  loadRememberMe();
}, []);


  return (
    <View style={styles.container}>
      {/* <SvgComponent style={StyleSheet.absoluteFill} /> */}
      <View style={styles.header} >
          <Text style={styles.title}>{t('welcome')}</Text>
          <Text style={styles.title}>{t('back')}</Text>
      </View>
    
      <View style={styles.middle} >
          <View  style={styles.LoginHeader}>
        <Text style={styles.LoginTitle}>{t('signIn')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.switchText}>
         {t('haveNoAccount')} <Text style={styles.link}>{t('createOne')}</Text>
        </Text>
      </TouchableOpacity>
      </View>
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
        <View style={styles.rememberMeContainer}>
          <Switch
            value={enabled}
            onValueChange={onToggleRememberMe}
            trackColor={{ false: '#d1d5db', true: '#86efac' }}
            thumbColor={enabled ? '#22c55e' : '#f4f4f5'}
          />
          <Text style={styles.switchText}>{t('rememberMe')}</Text>
        </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>{t('signIn')}</Text>
      </TouchableOpacity>
      </View>
    
       <View style={styles.continueWith}>
          <View style={styles.line} />
          <Text style={styles.switchText}> {t('continueWith')} </Text>
          <View style={styles.line} />
       </View>

      <GoogleLogin />
    
    </View>
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
   rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  switchText: { textAlign: 'center',color: '#555', fontSize: 12,paddingLeft:5 },
  link: { color: '#4CAF50', fontWeight: 'bold' },
});
