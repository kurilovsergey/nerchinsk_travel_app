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
  Dimensions,
  StatusBar
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
import butinsky from '../assets/title_image.jpeg'
import title_image from '../assets/butinsky_flower2.jpeg'
import old_nerchinsk from '../assets/architectural_monument/old_nerchinsk.jpeg'
import MapView, { Marker } from 'react-native-maps';
import { gallery, architectural_monument } from './store.js'
import ReactNativeParallaxHeader from 'react-native-parallax-header';
//import {architectural_monument} from './stote.js'

const Home = ({ navigation }) => {
  const image = title_image

  return (
    // <SafeAreaView >
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ flexGrow: 1 }}>
      <Header navigation={navigation} />

    </View>

    //  </ScrollView>
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
    height: responsiveScreenHeight(35),

  },

  searchContainer: {
    paddingTop: hp("15.4%"),
    paddingLeft: wp("0%")
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  imageText_container: {

  },
  imageLocationIcon: {
    position: "absolute",
    left: hp("1%"),
    bottom: hp("1%"),
    backgroundColor: "#ff6200",
    borderRadius: 40,
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
  },
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  body: {
    
  }
});

export default Home;


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 80) : 64; // const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64; 
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

console.log('HEADER_HEIGHT', HEADER_HEIGHT);

const RenderNavBar = ({ navigation }) => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          position: "absolute",
          top: hp("5%"),
          left: "5%"
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
          navigation.navigate('Maps', { item: null, gallery: [...architectural_monument, ...gallery] })
        }
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
          color="#000"
        />
      </TouchableOpacity>
    </View>
    </View>
);

const RenderContent = ({ navigation}) => {

  const butinsky_description =
    "Великолепный дворец золотопромышленников Бутиных с огромные венецианские зеркалами";

  return (
    <View style={styles.body}>


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
          <TouchableOpacity onPress={() => navigation.navigate('Example', { gallery })}>
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
        <TouchableOpacity onPress={() => navigation.navigate("Post", { item: "0", gallery })}>
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
            if (item.key > "0") {
              return (
                <View
                  style={{
                    paddingVertical: hp("1%"),
                    paddingHorizontal: wp("0.5%"),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Post", { item: item.key, gallery })}
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
            }
          }
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
      <TouchableOpacity onPress={() => navigation.navigate("Example", { gallery: architectural_monument })}>
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
          coordinate={{ latitude: 51.97879, longitude: 116.58470 }}
          title={"Бутинский дворец"}
          description={"Бутинский дворец"}
        >
        </Marker>
      </MapView>
    </View>
  );
};

const title = () => {
  return (
    <View style={styles.body}>
      <Text style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>Нерчинск</Text>
      <Text style={{ color: 'white', fontSize: 15, textAlign: 'center'}}>Куда сходим сегодня?</Text>
    </View>
  );
};

const Header = ({ navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={300}
        extraScrollHeight={20}
        navbarColor="#fff"
        titleStyle={styles.titleStyle}
        title={title()}
        alwaysShowTitle={false}
        alwaysShowNavBar={true}
        backgroundImage={title_image}
        backgroundImageScale={1.2}
        renderNavBar={() => <RenderNavBar navigation={navigation} />}
        renderContent={() => <RenderContent navigation={navigation} />}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      />
    </>
  );
};



//export default App;