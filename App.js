import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput , View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import * as Clipboard from 'expo-clipboard';

export default function App() {

  const [text, setText] =useState('')
  const [key, setKey] = useState(1);
  const [result, setResult] = useState('')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const keys = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,]
  let upperCase=false;

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
  const unceasar = () => {
    unceasaredText =''
    for(i = 0; i < text.length; i++){
      if(text[i] === text[i].toUpperCase()){
        upperCase=true;
      }
      letter = text[i].toLowerCase();
      if(letter === ' '){
        unceasaredText = unceasaredText+' ';
      }else{
        for(j = 0; j<alphabet.length; j++){
          if(letter === alphabet[j]){
            if(upperCase){
              if(j >= 0+key){
                unceasaredText = unceasaredText+alphabet[j-key].toUpperCase();
              }
              else if(j < 0+key){
                unceasaredText = unceasaredText+alphabet[(26+j)-key].toUpperCase(); 
              }
            }else{
              if(j >= 0+key){
                unceasaredText = unceasaredText+alphabet[j-key];
              }
              else if(j < 0+key){
                unceasaredText = unceasaredText+alphabet[(26+j)-key];
              }
            }
          }
        }
      }
      upperCase=false;
    }
    setResult(unceasaredText)
  }

  const copy = async () => {
    await Clipboard.setStringAsync(result);
  };
  const paste = async () => {
    const text = await Clipboard.getStringAsync();
    setText(text);
  };

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >Cryptage de César</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder='Texte'
      />
      <Button
        style={styles.button}
        title={'Coller'}
        onPress={paste}
      />
      <SelectDropdown
        defaultValue={key}
        data={keys}
        onSelect={setKey}
      />
      <View
        style={styles.buttonContainer}
      >
        <Button
          style={styles.button}
          title={'Crypter'}
          onPress={ceasar}
        />
        <Button
          style={styles.button}
          title={'Hugo Décrypter'}
          onPress={unceasar}
        />
      </View>
      <Text
        style={styles.input}
      >{result}</Text>
      <Button
        style={styles.button}
        title={'Copier'}
        onPress={copy}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
    width:250,
  },
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
    marginTop:20,
    textAlign:'center',
    textAlignVertical:'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  }
});