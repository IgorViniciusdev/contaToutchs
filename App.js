import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function countToutch() {
  const [count, setCount] = useState(0); 
  console.log("Clicou " + count + " vezes")
  
  return (
    <View style = {styles.container}>
      <View>
        <Text>Você cliclou no botão: {count} vezes</Text>
      </View>
      <View>
        <Button title="Toque aqui" onPress = {() => setCount(count + 1)}/>
      </View>
    </View>
  );
}

function App(){
<countToutch/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#611d91',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
