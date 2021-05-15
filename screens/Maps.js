import React, { useState, useEffect } from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import Card from '../component/Card'
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import { marker } from '../assets/images/marker.png'

//import * as Location from 'expo-location';
//import Geolocation from 'react-native-geolocation-service';

//<Icon name="arrow-back-outline" size={20} color="white" />

const Maps = ({ navigation, route }) => {
  //const coordinate = route.params.data.coordinate;
  //const title = route.params.data.title;
  const gallery = route.params.gallery
  const item = route.params.item

  //console.log('param! ', gallery);
  //console.log('item ',item);
  //gallery.map((i) => ( console.log(i.key)))

  let [info, setInfo] = useState(0)



  Geolocation.getCurrentPosition(data => { setInfo(data) })

  const goBack = () => {
    navigation.goBack();
  };


  return (
    <View>
      <Text>"    "</Text>
      <Text>"    "</Text>
      <Text>"    "{info.longitude}</Text>
      <Text>"    "{info.latitude}</Text>
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
        {item ?
          <Marker
            key={1}
            coordinate={gallery[item].coordinate}
            title={gallery[item].title}
            description={"Бутинский дворец"}
            image={marker}
          >
            <Icon
              name="location-outline"
              size={50}
              color="#ff6200"
              style={{ marginLeft: 10, position: "relative" }}
            />
          </Marker>
          :
          gallery.map((i) => (
          <Marker
            key={i.key}
            coordinate={i.coordinate}
            title={i.title}
            description={"Бутинский дворец"}
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
              <View>
                <Text>{i.title}</Text>
                <Text>{i.title}</Text>
              </View>
            </Callout>
          </Marker>
          ))}
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