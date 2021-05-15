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
import MapView,{ Marker }  from 'react-native-maps';
import {gallery, architectural_monument} from './store.js'
//import {architectural_monument} from './stote.js'

const Home = ({ navigation }) => {
  const image = title_image

  //  uri:
   //   "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

 // };

  const recentImage = {
    // uri:
    //"https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //source = {require('./assets/bk_butinsky.jpeg')}
    //uri: {require('./assets/bk_butinsky.jpeg')}
  };
  const butinsky_description =
    "Великолепный дворец золотопромышленников Бутиных с огромные венецианские зеркалами";

  //const [gallery, setgallery] = useState([

    //,
  //]);
  const [counter, setCounter] = useState(1);

  //const BadgedIcon = withBadge(counter)(Icon)

  return (
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexGrow: 1 }}>
          <View>
            <ImageBackground source={image} style={styles.image}>
              <View style={styles.searchContainer}>
                <Text style={styles.userGreet}>Нерчинск</Text>
                <Text style={styles.userText}>
                 Что мы посетим сегодня?
            </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{
                  position: "absolute",
                  top: hp("1.5%"),
                  left: "5%",
                }}>
                <Icon
                  name="menu-outline"
                  size={hp("4%")}
                  color="#000"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Maps', {item: null, gallery})}
                style={{
                  position: "absolute",
                  top: hp("2%"),
                  right: "5%",
                }}
              >
                <Icon
                  type="ionicon"
                  name="map"
                  size={hp("3%")}
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
                          width: responsiveScreenWidth(50),
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
              Об истории
          </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Example", {gallery: architectural_monument} )}>
            <Image
              source={butinsky}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: wp("100%"),
    height: responsiveScreenHeight(25),
    
  },

  searchContainer: {
    paddingTop: hp("15.4%"),
    paddingLeft: wp("0%")
  },
  userGreet: {
    paddingLeft: wp("3%"),
    fontSize: responsiveScreenFontSize(4),
    fontWeight: "bold",
    color: "white",
    //marginBottom: 100
    //backgroundColor: "black",
    //opacity: 0.5,
    width: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  userText: {
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "normal",
    color: "white",
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
