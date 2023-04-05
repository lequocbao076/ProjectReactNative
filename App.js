import React from 'react';
import { View, ImageBackground, StyleSheet, BackHandler, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DonghoScreen from './dongho';
import SinhvienSreen from './sinhvien';
import ListProducts from './ListProduct';
import DetailProduct from './DetailProduct';
import MaytinhScreen from './maytinh';

const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }) => {

  return (
    <View style={css.container}>
      <ImageBackground source={{ uri: "https://wallpapershome.com/images/wallpapers/android-2160x3840-4k-5k-wallpaper-hd-samsung-cubes-background-262.jpg" }} style={css.container} resizeMode="cover">
        <View style={css.container}>
          <View style={css.top}></View>
          <View style={css.footer}>
            <TouchableOpacity style={css.icon} onPress={() => { navigation.navigate('Sinhvien') }}><Entypo name='man' size={50} color='white' /></TouchableOpacity>
            <TouchableOpacity style={css.icon} onPress={() => { navigation.navigate('Dongho') }}><Entypo name='clock' size={50} color='white' /></TouchableOpacity>
            <TouchableOpacity style={css.icon} onPress={() => { navigation.navigate('ListProducts') }}><Entypo name='shopping-cart' size={50} color='white' /></TouchableOpacity>
            <TouchableOpacity style={css.icon} onPress={() => { navigation.navigate('Maytinh') }}><Entypo name='calculator' size={50} color='white' /></TouchableOpacity>
            {/* <TouchableOpacity style={css.icon} onPress={() => Alert.alert("thong bao",
              "Ban muon thoat khoi ung dung",
              [
                {
                  text: "Huy",
                  onPress: () => null,
                  style: "cancel"
                },
                { text: "Dong y", onPress: () => BackHandler.exitApp() }
              ])}><Entypo name='shopping-cart' size={50} color='white' /></TouchableOpacity> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListProducts" component={ListProducts} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="Dongho" component={DonghoScreen} />
        <Stack.Screen name="Sinhvien" component={SinhvienSreen} />
        <Stack.Screen name="Maytinh" component={MaytinhScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  top: {
    flex: 1,
    overflow: 'hidden'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    display: 'flex'
  },
  icon: {
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 12,
    padding: 10,
    backgroundColor: 'steelblue'
  }

})