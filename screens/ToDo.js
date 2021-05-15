import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export const ToDo = ({todo}) => {
   




    return (
        <View style={styles.todo}>
          <Text >{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
    }
  })