import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput , View} from 'react-native';
import { createNavigationContainer } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'

export default function App() {

  const [text, setText] =useState('')
  const [key, setKey] = useState(1);
  const [result, setResult] = useState('')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const keys = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,]

  const ceasar = () => {
    ceasaredText =''
    for(i = 0; i < text.length; i++){
      if(text[i] === text[i].toUpperCase()){
        upperCase=true;
      }
      letter = text[i].toLowerCase();
      if(letter === ' '){
        ceasaredText = ceasaredText+' ';
      }else{
        for(j = 0; j<alphabet.length; j++){
          if(letter === alphabet[j]){
            if(upperCase){
              if(j <= 25-key){
                ceasaredText = ceasaredText+alphabet[j+key].toUpperCase();
              }
              else if(j > 25-key){
                ceasaredText = ceasaredText+alphabet[key-(26-j)].toUpperCase(); 
              }
            }else{
              if(j <= 25-key){
                ceasaredText = ceasaredText+alphabet[j+key];
              }
              else if(j > 25-key){
                ceasaredText = ceasaredText+alphabet[key-(26-j)]; 
              }
            }
          }
        }
      }
      upperCase=false;
    }
    setResult(ceasaredText)
  }

  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder='Texte'
      />
      <SelectDropdown
        data={keys}
        onSelect={setKey}
      />
      <Button
        title={'Crypter'}
        onPress={ceasar}
      />
      <Text
        style={styles.input}
      >{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    width:300,
    height:50,
    fontSize:20,
    margin:20,
    textAlign:'center',
    textAlignVertical:'center',
  }
});
