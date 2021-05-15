import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
const IMAGENAME = require('../assets/bk_butinsky.jpeg'); 

export const Navbar = (props) => {
    return (     
    <ImageBackground source={IMAGENAME} style={styles.navbar}>
        <View>
          <Text style={styles.text}>Гид по Нерчинску</Text>
        </View>
        <View>
                <TextInput
                  style={styles.searchBox}
                  placeholder="search destination"
                  placeholderTextColor="#666"
                ></TextInput>
                <Icon
                  name="search-outline"
                  size={hp("3%")}
                  color="#666"
                  style={{
                    position: "absolute",
                    top: hp("4.5%"),
                    right: wp("30%"),
                    opacity: 0.6,
                  }}
                />
              </View>
    </ImageBackground>
          
         
    )
}

const styles = StyleSheet.create({
    navbar: {
    height: 250,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    
    },
    text: {
    color: '#fff',
    fontSize: 20
    }
})

