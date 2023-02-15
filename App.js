import React, { useState } from 'react';
import { StyleSheet, YellowBox, View } from 'react-native';
import { Container, NativeBaseProvider, extendTheme, Box, Text} from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

YellowBox.ignoreWarnings(['Setting a timer',
                          'YellowBox has been replaced']);



export default function App() {
    const [userName, setUserName] = useState(null)

    return (
      <NativeBaseProvider>
        <View style = {styles.container}>
            {!userName ? (
              <Login setUserName = {setUserName}/>
            ) : (
              <Chat userName = {userName}/>
            )}
        </View>
      </NativeBaseProvider>
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    justifyContent: "center",
    alignItems: "center"
  },
  provider:{
    backgroundColor: '#16202b',
    width: "100%"
  }
});