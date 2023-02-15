import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Text  } from 'react-native';
import { Item, Input as InputNB, Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons';

export default function Input(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemInput}>
        <InputNB
          placeholder="Mensaje..."
          style={styles.input}
          placeholderTextColor="grey"
          value={message}
          onChange={(e) => setMessage(e.nativeEvent.text)}
        />
      </View>
      <View>
          <Button style={styles.button} onPress={onSubmit}>Send</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
    width: 400,
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical:  0
  },
  itemInput: {
    borderColor: '#16202b',
    width: 300,

  },
  input: {
    color: '#fff',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  iconSend: {
    color: '#fff',
  },
  button:{
    color:"#FFF",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: 46
  }

});