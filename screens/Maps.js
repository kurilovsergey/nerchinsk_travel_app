import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import Card from '../component/Card'
import MapView, { Marker, Callout } from 'react-native-maps';
import { marker } from '../assets/images/marker.png'
import { architectural_monument} from './store.js'
import Geolocation from 'react-native-geolocation-service';

//import * as Location from 'expo-location';
//import Geolocation from 'react-native-geolocation-service';

//<Icon name="arrow-back-outline" size={20} color="white" />

const Maps = ({ navigation, route }) => {
  //const coordinate = route.params.data.coordinate;
  //const title = route.params.data.title;
  const gallery = route.params.gallery
  const item = route.params.item




 

  const goBack = () => {
    navigation.goBack();
  };
   //console.log('chto prihodit v map', gallery);
   //console.log('chto prihodit v map', gallery[0].key);
   console.log('item do', item);
  
  

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.97879,
          longitude: 116.58470,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            position: "absolute",
            left: "5%",
            top: 50,
            backgroundColor: "#ff6200",
            borderRadius: 40,
            padding: 10,
          }}
        >
          <Icon name="arrow-back-outline" size={20} color="white" />

        </TouchableOpacity>
        
        {
        item===null || (!item && gallery[item].place=="butinsky") ?
          gallery.filter((i)=>i.place!='butinsky').map((i) => (
          <Marker
            key={i.key}
            coordinate={i.coordinate}
            title={i.title}
            description={"Бутинский дворец"}
            //style={{ height: 300, width: 300 }}
          //image={require('../assets/images/marker.png')}
          //style={{ width: 100, height: 100 }}
          >
            
            <Icon
              name="location-outline"
              size={50}
              color="#ff6200"
              style={{ marginLeft: 10, position: "relative" }}
            /> 
            <Callout>
              <View style={{ width: 150, height: 150 }}>
                <Text>{i.title}</Text>
                <Text>{i.title}</Text>  
                <Image style={{ width: 120, height: 150 }} source={i.image}/>
              </View>
              
            </Callout>
          </Marker>
          )) 
          :

          <Marker 
          
          key={1}
          coordinate={gallery[item].coordinate}
          title={gallery[item].title}
          description={"Бутинский дворец"}
          image={marker}
          
        >
          <Icon
            name="location-outline"//{gallery[item].icon}
            size={50}
            color="#ff6200"
            style={{ marginLeft: 10, position: "relative" }}
          />
          <Callout >
              <View style={{ width: 150, height: 170  }}>
                <Text>{gallery[item].title}</Text> 
                <Image style={{ width: 150, height: 100 }} source={gallery[item].long_image}/>
                
                <TouchableOpacity
                      onPress={() => navigation.navigate("Post", { item: gallery[item].key , gallery })}>
                     <View style={{ height: 50, width: 100 }}>
                      <Text style={{ backgroundColor: "#ff6200", height: 50, width: 100 }}>Больше информации</Text>
                      </View>
                </TouchableOpacity>
                
                
              </View>
              
            </Callout>
        </Marker>
        
          }
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  },
});

export default Maps