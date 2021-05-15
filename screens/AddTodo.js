import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export const AddTodo = (props) => {

    const [value, setValue] = useState("")

    const PressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value);
             setValue('')
        } else {
            Alert.alert("text is n/a")
        }
    }

    return (
        <View style={styles.block}>
          <TextInput style={styles.input} 
          onChangeText={setValue}
          value={value}
          placeholder="pleace type text"
          autoCorrect={false}/>
          <Button title='Добавить' onPress={PressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    },
    input: {
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10
    }
})

