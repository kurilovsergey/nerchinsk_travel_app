import React, { useState } from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import {gallery} from '../screens/store'

const CardComponent = (props) => {

    var day = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();


   
    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={gallery}
        renderItem={({item}) =>{
            return(
            <View style={styles.container}>
                <ScrollView>
                <TouchableOpacity
                   onPress={() => props.navigation.navigate('Post', { item: item.key , gallery }) }
                  >
                <View style={{elevation:10}}>
                <ImageBackground 
                    source={item.long_image}
                    style={styles.contain}
                    imageStyle={{borderRadius:25}}
                >
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:15, alignItems:'center'}}>
                    <Icon name='menu-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>{item.title}</Text>
                    </View>
    
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Icon name='eye-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>1509</Text>
                    </View>
    
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Text style={{marginHorizontal:5}}>{day +"-"+ month+ "-" + year}</Text>
                    </View>
    
                </ImageBackground>
                </View>
                </TouchableOpacity>
               </ScrollView>
               </View>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginBottom:10
    },
    contain: {
        marginTop:10, 
        marginHorizontal:10,
        height:200, 
        flexDirection:'row', 
        justifyContent:'space-between',
        elevation:10
    }

  });

export default CardComponent;
