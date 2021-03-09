import * as React from 'react';
import { Button, View, Text,TouchableHighlight,StyleSheet,ImageBackground,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Juego from './game.js';
import Puente from './puente.js'
import Bananas from './src/icono';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from './assets/Images';

const images = [
  'https://yt3.ggpht.com/ytc/AAUvwnhshBh9HtnR4MwcK8fFrHspcfXmeNbz5gphS0i3=s900-c-k-c0x00ffffff-no-rj',
'https://yt3.ggpht.com/ytc/AAUvwnijYqaKG3ayOAcLBpADpH1ngIbU-kPCnD9_43-R4A=s900-c-k-c0x00ffffff-no-rj',
'https://static.wikia.nocookie.net/electroboom/images/e/eb/Maxresdefault_%282%29.jpg/revision/latest/top-crop/width/360/height/450?cb=20181002182409',
'https://yt3.ggpht.com/ytc/AAUvwnhLK37_1ETrwiTrl5PD99XOF8bYgxZQWiniFw1bBg=s900-c-k-c0x00ffffff-no-rj',
'https://i.imgur.com/85HzmYQ.jpg',
'https://yt3.ggpht.com/ytc/AAUvwnjEscV-JIIZQR2RZbnJKd2tablwRlpoJjfxlFOlkQ=s900-c-k-c0x00ffffff-no-rj',
'https://i.imgur.com/MRzjjX8.jpg',
'https://yt3.ggpht.com/ytc/AAUvwniQtAeUpj_i_7daSQ1gOIYvElgJ-Rztgvydjuxl=s900-c-k-c0x00ffffff-no-rj',
'https://i.ytimg.com/vi/RieOvBrChvY/maxresdefault.jpg',

];

var pasoJuego = async (value) => {
 try {
    await AsyncStorage.setItem('@storage_Personaje', value)
    console.log(value);
 } catch (e) {
   console.log(e);
 }
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/kM0J2PZ.jpg'}}>

<ScrollView>
<View style = {styles.barraSuperior}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
     {pasoJuego("carlitox");navigation.navigate('Juego');}}>
      <Bananas pic={images[8]} titulo="Top Comics"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
     {pasoJuego("batsy");navigation.navigate('Juego');}}>
       <Bananas pic={images[6]} titulo="Cinexceso"/>
  </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("amazing");navigation.navigate('Juego');}}>
      <Bananas pic={images[1]} titulo="Variant Comics"/>
</TouchableHighlight>

      </View>

      <View style = {styles.barraSuperior2}>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
           {pasoJuego("carlitox");navigation.navigate('Juego');}}>
          <Bananas pic={images[9]} titulo="Andres Navy"/>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
           {pasoJuego("batsy");navigation.navigate('Juego');}}>
             <Bananas pic={images[3]} titulo="Carlitox Banana"/>
        </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("amazing");navigation.navigate('Juego');}}>
          <Bananas pic={images[0]} titulo="Comics Explained"/>

        </TouchableHighlight>

            </View>
      <View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
   {pasoJuego("mefe");navigation.navigate('Juego');}}>
    <Bananas pic={images[11]} titulo="Extraordinerd"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('BackTrack', {genero:'Punk' , numArreglo:4});}}>
    <Bananas pic={images[4]} titulo="El Batsy"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('BackTrack', {genero:'Metal' , numArreglo:5});}}>
      <Bananas pic={images[2]} titulo="ElectroBOOM"/>
  </TouchableHighlight>
    </View>

    <View style = {styles.barraSuperior2}>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
  {navigation.navigate('BackTrack', {genero:'Reggae' , numArreglo:3});}}>
  <Bananas pic={images[1]} titulo="Peliscomic"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
  {navigation.navigate('BackTrack', {genero:'Punk' , numArreglo:4});}}>
  <Bananas pic={images[5]} titulo="Amazing Comics"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
  {navigation.navigate('BackTrack', {genero:'Metal' , numArreglo:5});}}>
<Bananas pic={images[7]} titulo="Charly Mustain"/>
</TouchableHighlight>
  </View>

  <View style = {styles.barraSuperior2}>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('BackTrack', {genero:'Reggae' , numArreglo:3});}}>
  <Bananas pic={images[1]} titulo="YouGambit"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('BackTrack', {genero:'Punk' , numArreglo:4});}}>
<Bananas pic={images[4]} titulo="AlejoZaap"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('BackTrack', {genero:'Metal' , numArreglo:5});}}>
<Bananas pic={images[5]} titulo="New Sage "/>
</TouchableHighlight>
</View>

<View style = {styles.barraSuperior2}>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('BackTrack', {genero:'Reggae' , numArreglo:3});}}>
<Bananas pic={images[1]} titulo="La Sombra del Imperio"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('BackTrack', {genero:'Punk' , numArreglo:4});}}>
<Bananas pic={images[4]} titulo="Proyecto Chaos"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('BackTrack', {genero:'Metal' , numArreglo:5});}}>
<Bananas pic={images[5]} titulo="EstoEs COMBO"/>
</TouchableHighlight>
</View>

<Text>
</Text>
<Text>
</Text>
<Text>
</Text>
</ScrollView>


    </ImageBackground>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
  <Stack.Screen name="Puente" component={Puente} options={{headerShown: false}}/>
          <Stack.Screen name="Juego" component={Juego} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },
  itemBarraSuperior:{
    width: 120,
    height: 120,

    position: 'absolute',
    bottom: -30,
    right: 10,

  },


  itemBarraSuperior2:{
    width: 120,
    height: 120,

    position: 'absolute',
    bottom: -30,
    left: 10,

  },



  barraSuperior:{

  flexDirection: 'row',
  marginTop:100,
},

barraSuperior2:{

flexDirection: 'row',
marginTop:60,
},

barraSuperior3:{

flexDirection: 'row',
marginTop:60,
  paddingBottom: 200,
},

barraInferior:{
    position:'absolute',
    bottom:0,
    flex:1,
    flexDirection: 'row',
  },

  itemBarraSuperior:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:50,
    marginLeft:5,
    marginRight:5,

  },

});
export default App;
