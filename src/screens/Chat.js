import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Input from '../components/Input';
import {HStack, Body, Box, Title} from 'native-base';
import logoApp from "../assets/chatLogo.png";
import firebase, { db } from "../utils/firebase";
import {onValue, ref, set, update} from "firebase/database"; 
import moment from 'moment';
import {map} from "lodash";
import Message from '../components/Message';
/*import {getDatabase} from 'firebase/database'; 
import {initializeApp} from "firebase/app";*/


export default function Chat(props) {
// render
    const { userName } = props;
    const [messages, setMessages] = useState([]);
    const chatScrollRef = useRef();
    const sendMessage = (message) =>{
      const date = moment().format("hh:mm a");
      const dateNewMessage = moment();
      update(ref(db, 'general/' + dateNewMessage), {
        userName,
        text: message,
        date
      })
    }

    useEffect(() => {
      const chat = ref(db, 'general/');
      onValue(chat, (snapshot) => {
        const data = snapshot.val();
        setMessages(data);
      })
    }, []);

    useEffect(() => {
      chatScrollRef.current.scrollTo({y: 100000000});
    }, [messages])

    return (
       <>
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

                  <HStack style = {styles.header}>
                      <Text style = {{color: "#FFF", fontSize: 20, marginTop: -30}}>Chat App</Text>
                  </HStack>
                <View style={styles.content}>
                  <ScrollView style={styles.chatView} ref={chatScrollRef}>
                    {map(messages, (message, index) =>(
                      <Message key = {index} message = {message} name= {userName} />
                    ))}
                  </ScrollView>
                  <Input sendMessage={sendMessage}/>
                </View>
              </Box>
       </>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#16202b',
      width: "100%",
      alignSelf: "center",
      flexDirection: "row"
    },
    content: {
      height: "100%",
      flex: 1,
      justifyContent: 'space-between',
    },
    chatView: {
      backgroundColor: '#1b2734',
    },
  });
