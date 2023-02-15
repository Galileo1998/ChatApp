import React, {useState, useEffect} from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import {Box, Input, Text, Button} from "native-base";
import logoApp from "../assets/chatLogo.png";

export default function Login(props) {
// render
    const {setUserName} = props;
    const [name, setName] = useState('')

    const onSubmit = (name) =>{
        setUserName(name);
    }
    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <Image source = {logoApp} resizeMode="contain" style={styles.logo}/>
            </View>

            <Box 
                bg={{
                    linearGradient: {
                    colors: ['lightBlue.300', 'violet.800'],
                    start: [0, 0],
                    end: [1, 0],
                    },
                }}
                p="12"
                rounded="lg"
                _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}>
                <Input
                    placeholder="Nombre de usuario"
                    placeholderTextColor="grey"
                    style={{ color: '#fff', borderColor: "#16202b"}}
                    value = {name}
                    onChange = {(e)=> setName(e.nativeEvent.text)}
                />
                <Button style={styles.btnLogin} onPress = {() => onSubmit(name)}>
                    <Text>Entrar</Text>
                </Button>
            </Box>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 50,
      marginVertical: 100,
    },
    logo: {
      width: 400,
      height: 200,
      marginBottom: 30,
    },
    btnLogin: {
      marginTop: 40,
      justifyContent: 'center',
      backgroundColor: '#0098d3',
    },
  });