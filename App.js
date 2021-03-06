import React, { useState, useEffect, useRef } from 'react';
import { AppState,Button, View, Text,TouchableHighlight,StyleSheet,ImageBackground,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Juego from './game.js';
import Puente from './puente.js'
import Bananas from './src/icono';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from './assets/Images';
import LocalizedStrings from 'localized-strings';




//Se usa para iniciar la musica de fondo
var Sound = require('react-native-sound');
var sound = new Sound('menu2', Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
// Poner el valor -1 hace que el loop sea infinito
sound.setNumberOfLoops(-1);

 console.log("si soy sonidero");
 sound.play();
});


var sound2 = new Sound('selecto', Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
});
var sound4 = new Sound('cambio', Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
});



let strings = new LocalizedStrings({
  en:{
     Personajes: "More Characters"

  },
  es: {
    Personajes: "Mas Personajes"
  },
}
);
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const bannerSuperiorID = "ca-app-pub-8454341646863233/5065341800";
const bannerSuperiorID2 = "ca-app-pub-8454341646863233/6989631710";
var pantalla = 1;
var pasoJuego = async (value) => {
 try {
    await AsyncStorage.setItem('@storage_Personaje', value)
    sound2.play();
    console.log(value);
 } catch (e) {
   console.log(e);
 }
}

var pasoPantalla = async (value) => {
 pantalla = 2;
}

var imagenfondo = 'https://i.imgur.com/kM0J2PZ.jpg';
var pantalla = 1;

function HomeScreen({ navigation }) {
  const appState = useRef(AppState.currentState);
  const [cambiopantalla, setcambiopantalla] = React.useState('1');
const [appStateVisible, setAppStateVisible] = useState(appState.current);



  useEffect(() => {
     AppState.addEventListener("change", _handleAppStateChange);

     return () => {
       AppState.removeEventListener("change", _handleAppStateChange);
     };
   }, []);

   const _handleAppStateChange = (nextAppState) => {

       appState.current = nextAppState;
       setAppStateVisible(appState.current);
       console.log("AppState", appState.current);

       if(appState.current == "background")
          sound.stop();
          if(appState.current == "active")

         sound.play();
     };

  const pararSonido =(estado)=>{
        setcambiopantalla(estado);
        console.log(estado);
        sound4.play();
       }

switch(cambiopantalla){
  case '1':
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  imagenfondo}}>

<ScrollView>
<View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
     {pasoJuego("topcomics");navigation.navigate('Juego');}}>
      <Bananas pic={Images['topcomicslogo']} titulo="Top Comics"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
     {pasoJuego("mefe");navigation.navigate('Juego');}}>
       <Bananas pic={Images['cinexceso']} titulo="Cinexceso"/>
  </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("variant");navigation.navigate('Juego');}}>
      <Bananas pic={Images['variantlogo']} titulo="Variant Comics"/>
</TouchableHighlight>

      </View>

      <View style = {styles.barraSuperior2}>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>

         {pasoJuego("sombrai");navigation.navigate('Juego');}}>
          <Bananas pic={Images['sombra']} titulo="La Sombra Del Imperio"/>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
           {pasoJuego("banana");navigation.navigate('Juego');}}>
             <Bananas pic={Images['bananalogo']} titulo="Carlitox Banana"/>
        </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("batsun");navigation.navigate('Juego');}}>
            <Bananas pic={Images['batsunlogo']} titulo="Bat In the Sun"/>

        </TouchableHighlight>

            </View>
      <View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
   {pasoJuego("extra");navigation.navigate('Juego');}}>
    <Bananas pic={Images['extralogo']} titulo="Extraordi nerd"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("batsy");navigation.navigate('Juego');}}>
     <Bananas pic={Images['batsylogo']} titulo="El Batsi"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("zaap");navigation.navigate('Juego');}}>
     <Bananas pic={Images['zaaplogo']} titulo="AlejoZaaap"/>
  </TouchableHighlight>
    </View>

    <View style = {styles.barraSuperior2}>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("3")}}>
    <Bananas pic={Images['izquierda']} titulo={strings.Personajes}/>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("2")}}>
    <Bananas pic={Images['derecha']} titulo={strings.Personajes}/>
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
  break;
  case '2':
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  imagenfondo}}>

<ScrollView>
<View style = {styles.barraSuperior2}>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("pcomic");navigation.navigate('Juego');}}>
<Bananas pic={Images['pcomiclogo']} titulo="Pelicomic"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("amazing");navigation.navigate('Juego');}}>
<Bananas pic={Images['amazinglogo']} titulo="Amazing ComicX"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("charly");navigation.navigate('Juego');}}>
<Bananas pic={Images['charlylogo']} titulo="Charly Mustain"/>
</TouchableHighlight>
</View>


      <View style = {styles.barraSuperior2}>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("navy");navigation.navigate('Juego');}}>
         <Bananas pic={Images['navylogo']} titulo="Andres Navy"/>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("cexplained");navigation.navigate('Juego');}}>
          <Bananas pic={Images['cexplainedlogo']} titulo="Comics Explained"/>

        </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("newsage");navigation.navigate('Juego');}}>
         <Bananas pic={Images['newsagelogo']} titulo="New Sage"/>

        </TouchableHighlight>

            </View>
      <View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("newsage");navigation.navigate('Juego');}}>
   <Bananas pic={Images['yougambitlogo']} titulo="YouGambit"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("chaos");navigation.navigate('Juego');}}>
     <Bananas pic={Images['chaoslogo']} titulo="Proyecto Chaos"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("heyner");navigation.navigate('Juego');}}>
     <Bananas pic={Images['heynerlogo']} titulo="Heyner Studio"/>
  </TouchableHighlight>
    </View>


    <View style = {styles.barraSuperior2}>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("1")}}>
    <Bananas pic={Images['izquierda']} titulo={strings.Personajes}/>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("3")}}>
    <Bananas pic={Images['derecha']} titulo={strings.Personajes}/>
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
  break;

  case '3':
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  imagenfondo}}>

<ScrollView>
<View style = {styles.barraSuperior2}>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("apolo");navigation.navigate('Juego');}}>
<Bananas pic={Images['apolologo']} titulo="Apolo1138"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("tj");navigation.navigate('Juego');}}>
<Bananas pic={Images['tjlogo']} titulo="Comics Tj"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("cuates");navigation.navigate('Juego');}}>
<Bananas pic={Images['cuateslogo']} titulo="Los Super Cuates"/>
</TouchableHighlight>
</View>


      <View style = {styles.barraSuperior2}>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("fuera");navigation.navigate('Juego');}}>
         <Bananas pic={Images['fueralogo']} titulo="Fuera de Foco"/>

        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("shooter");navigation.navigate('Juego');}}>
          <Bananas pic={Images['shooterlogo']} titulo="The Shooterman"/>

        </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("monitor");navigation.navigate('Juego');}}>
          <Bananas pic={Images['monitorlogo']} titulo="Go! El Monitor Geek"/>

        </TouchableHighlight>

            </View>
      <View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("story");navigation.navigate('Juego');}}>
   <Bananas pic={Images['comicstorylogo']} titulo="Comic Story"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("cinemotia");navigation.navigate('Juego');}}>
     <Bananas pic={Images['cinemotialogo']} titulo="Cinetomia"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("apolo");navigation.navigate('Juego');}}>
    <Bananas pic={Images['baticuevalogo']} titulo="La Baticueva"/>

  </TouchableHighlight>
    </View>


    <View style = {styles.barraSuperior2}>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("2")}}>
    <Bananas pic={Images['izquierda']} titulo={strings.Personajes}/>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("1")}}>
    <Bananas pic={Images['derecha']} titulo={strings.Personajes}/>
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
  break;
}

}


function DetailsScreen({ navigation }) {




  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/kM0J2PZ.jpg'}}>

<ScrollView>
<View style = {styles.barraSuperior2}>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("pcomic");navigation.navigate('Juego');}}>
<Bananas pic={Images['pcomiclogo']} titulo="Pelicomic"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{pasoJuego("amazing");navigation.navigate('Juego');}}>
<Bananas pic={Images['amazinglogo']} titulo="Amazing ComicX"/>
</TouchableHighlight>
<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
{navigation.navigate('Details');}}>
<Bananas pic={Images['charlylogo']} titulo="Charly Mustain"/>
</TouchableHighlight>
</View>


      <View style = {styles.barraSuperior2}>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
           {pasoJuego("navy");navigation.navigate('Juego');}}>
          <Bananas pic={Images['navylogo']} titulo="Andres Navy"/>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
           {pasoJuego("banana");navigation.navigate('Juego');}}>
             <Bananas pic={Images['bananalogo']} titulo="Carlitox Banana"/>
        </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {pasoJuego("cexplained");navigation.navigate('Juego');}}>
          <Bananas pic={Images['cexplainedlogo']} titulo="Comics Explained"/>

        </TouchableHighlight>

            </View>
      <View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
   {pasoJuego("extra");navigation.navigate('Juego');}}>
    <Bananas pic={Images['extralogo']} titulo="Extraordinerd"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("batsy");navigation.navigate('Juego');}}>
     <Bananas pic={Images['batsylogo']} titulo="El Batsi"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("zaap");navigation.navigate('Juego');}}>
     <Bananas pic={Images['zaaplogo']} titulo="Amazing ComicX"/>
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
<Stack.Screen name="Details" component={DetailsScreen} />
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
