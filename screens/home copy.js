import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, withBadge } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import butinsky from '../assets/bk_butinsky.jpeg'
import title_image from '../assets/title_image.jpeg'
import old_nerchinsk from '../assets/architectural_monument/old_nerchinsk.jpeg'
import MapView,{ Marker }  from 'react-native-maps';
import {gallery, architectural_monument} from './store.js'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import {Header} from './Home/Header.js'

 

const Home = ({ navigation }) => {
  const image = title_image





  const butinsky_description =
    "Великолепный дворец золотопромышленников Бутиных с огромные венецианские зеркалами";


  return (
   // <SafeAreaView >
     <>
     
     <ScrollView showsVerticalScrollIndicator={false}>
        <View >
          <View style={{   borderBottomLeftRadius: 20, borderBottomRightRadius: 20  }}>
            <ImageBackground source={old_nerchinsk} style={styles.image}>
              <View style={styles.searchContainer}>
                <Text style={styles.userGreet}>Нерчинск</Text>
                <Text style={styles.userText}>Путеводитль по интересным местам города
</Text>
        </View>

              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{
                  position: "absolute",
                  top: hp("5%"),
                  left: "5%",
                }}>
                <Icon
                  name="menu-outline"
                  size={hp("4%")}
                  color="#000"
                  
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                   //let store= gallery.concat(architectural_monument)
                  navigation.navigate('Maps', {item: null, gallery: [...architectural_monument, ...gallery]})}
                }
                style={{
                  position: "absolute",
                  top: hp("5%"),
                  right: "3,5%",
                }}
              >
                <Icon
                  type="ionicon"
                  name="map"
                  size={hp("3,5%")}
                  color="#fff"

                />

              </TouchableOpacity>

            </ImageBackground>

          </View>

          <View style={{ marginBottom: hp("0%"), }}>
            <View
              style={{
                padding: hp("2%"),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
                Рекомендуем
            </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Example', {gallery})}>
                <Text
                  style={{
                    fontSize: hp("2%"),
                    fontWeight: "bold",
                    color: "#ff6200",
                  }}
                >
                 Смотреть все 
            </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Post", { item: "0",  gallery} )}>
            <Image
              source={butinsky}
              style={{
                width: "95%",
                height: hp("30%"),
                borderRadius: 10,
                marginLeft: wp('2%')

              }}
            />

            <View style={{ position: "absolute", bottom: 0, padding: hp("1%"), backgroundColor: "black" }}>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="location-outline"
                  size={20}
                  color="#ff6200"
                  style={{ marginLeft: 10, position: "relative", top: 4 }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: "normal",
                    marginBottom: "2%",
                    marginHorizontal: 10,
                    
                  }}
                >
                  Бутинский дворец
              </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                  opacity: 0.9,
                  marginLeft: 10,
                  padding: 5
                }}
              >
                {butinsky_description}
              </Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
              Лучшие места
          </Text>
          </View>
          <View >
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={gallery}
              horizontal={true}
              renderItem={({ item }) => {
                if (item.key>"0") {
                return (
                  <View
                    style={{
                      paddingVertical: hp("1%"),
                      paddingHorizontal: wp("0.5%"),
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Post", { item: item.key , gallery })}
                      style={{
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 10,
                        }, //тени
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 2,
                      }}
                    >
                     
                      <Image
                        source={item.image}
                        image={item.image}
                        PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}

                        style={{
                          width: responsiveScreenWidth(45),
                          marginRight: wp("2%"),
                          height: responsiveScreenHeight(30),
                          borderRadius: 10,
                          
                        }}
                      />
                      <View tyle={styles.imageText_container}>
                      <Icon
                        name="pin-outline"
                        size={hp("2.5%")}
                        color="#fff"
                        style={styles.imageLocationIcon}
                      />
                      <Text style={styles.imageText}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            }
            />

            <View>

            </View>

          </View>
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
            Памятники архитектуры
          </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Example", {gallery: architectural_monument} )}>
            <Image
              source={old_nerchinsk}
              style={{
                width: "95%",
                height: hp("30%"),
                borderRadius: 10,
                marginLeft: wp('2%')

              }}
            />

            <View style={{ position: "absolute", bottom: 0, padding: hp("1%") }}>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="location-outline"
                  size={20}
                  color="#ff6200"
                  style={{ marginLeft: 10, position: "relative", top: 4 }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: "normal",
                    marginBottom: "2%",
                    marginHorizontal: 10,
                    
                  }}
                >
                  Памятники архитектуры
              </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                  opacity: 0.9,
                  marginLeft: 10,
                  padding: 5
                }}
              >
                {"Часть выбранных для маркировки объектов имеют историю общероссийского и даже международного значения. "}
              </Text>
            </View>
            </TouchableOpacity>
            <View style={{width: "90%", height: hp("30%"), padding: hp("1%")}}>
            <ImageBackground style={styles.image} source={old_nerchinsk}>
              <Text>dss</Text>
            </ImageBackground>
            </View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 51.97879,
              longitude: 116.58470,
              latitudeDelta: 0.0122,
              longitudeDelta: 0.0121,
            }}>
      <Marker
      key={1}
      coordinate={{ latitude : 51.97879 , longitude : 116.58470 }}
      title={"Бутинский дворец"}
      description={"Бутинский дворец"}
    >
    </Marker>
            </MapView>
        </View>
        
      </ScrollView>
      </>
//    </SafeAreaView>
  
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: wp("100%"),
    height: responsiveScreenHeight(35)
  },

  searchContainer: {
    paddingTop: hp("15.4%"),
    paddingLeft: wp("0%"),
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20
  },
  userGreet: {
    paddingTop: wp("23%"),
    textAlign: 'right',
    paddingRight: hp("1%"),
    //paddingLeft: hp("27%"),
    fontSize: responsiveScreenFontSize(5),
    fontWeight: "bold",
    color: "white",
    //padding: hp("2%"),
    //marginBottom: 100
    //backgroundColor: "black",
    //opacity: 0.5,

  },
  userText: {
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "normal",
    color: "white",
    textAlign: 'right',
    paddingRight: hp("1%")
    //paddingTop: wp("25%"),
    //paddingLeft: hp("10%")
  },
  searchBox: {
    marginTop: hp("3%"),
    backgroundColor: "#fff",
    paddingLeft: hp("2%"),
    padding: hp("1%"),
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: wp("75%"),
  },
  imageText_container: {

  },
  imageLocationIcon: {
    position: "absolute",
    left: hp("1%"),
    bottom: hp("1%"),
  },
  imageText: {
    position: "absolute",
    bottom: "3%",
    left: "20%",
    fontSize: hp("2.5%"),
    color: "white"
  },
  map: {
    height: 200,
    width: '100%'
  }
});

export default Home;

