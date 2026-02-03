import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();

import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect } from "react";
import {  View,Image} from "react-native";
import { Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';



export default function GoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "193029563649-efkoqvi5vjau8sskmhri64a7c77svko0.apps.googleusercontent.com", 
    iosClientId: '193029563649-rf6u2fbkspnth9l25lisj3tsdu7jaf3l.apps.googleusercontent.com',
    androidClientId: '193029563649-v1866nc6q3pfovgtvrlr86tt6obmaaa3.apps.googleusercontent.com',
  });


  const { t } = useTranslation();
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("✅ Google Access Token:", authentication?.accessToken);
        if (authentication?.accessToken) {
        // Call your API with the access token
        console.log("Token received:", authentication.accessToken);
      }
    }else if (response?.type === "error") {
      console.log("❌ Google Auth Error:", response.error);
    }
  }, [response]);

  return (
   <Button
      mode="outlined"
      onPress={() => promptAsync()}
      disabled={!request}
      icon={() => (
        <Image
          source={require('../assets/google.png')}
          style={{ width: 40, height: 40 }}
        />
      )}
    style={{fontSize:16, backgroundColor:'#e9eaecff', borderColor: '#c6c7caff', borderRadius:20, paddingVertical:5,  width: '100%', justifyContent:'center', alignSelf:'center'}}>
      Google
</Button>
   
  );
}