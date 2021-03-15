import * as React from 'react';
import { Button, View, Text,TouchableHighlight,StyleSheet,ImageBackground,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Juego from './game.js';
import Puente from './puente.js'
import Bananas from './src/icono';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from './assets/Images';
let image = require('./assets/img/carlitox.png');
console.log(image + "askjdhsajdhsajk");
const images = [


];
var pantalla = 1;
var pasoJuego = async (value) => {
 try {
    await AsyncStorage.setItem('@storage_Personaje', value)
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
  const [cambiopantalla, setcambiopantalla] = React.useState('1');
  const pararSonido =(estado)=>{
        setcambiopantalla(estado);
        console.log(estado);
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
    <Bananas pic={Images['extralogo']} titulo="Extraord inerd"/>
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
    <Bananas pic={Images['izquierda']} titulo="Mas Personajes"/>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("2")}}>
    <Bananas pic={Images['derecha']} titulo="Mas Personajes"/>
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
    <Bananas pic={Images['izquierda']} titulo="Mas Personajes"/>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("3")}}>
    <Bananas pic={Images['derecha']} titulo="Mas Personajes"/>
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
          <Bananas pic={Images['monitorlogo']} titulo="El Monitor Geek"/>

        </TouchableHighlight>

            </View>
      <View style = {styles.barraSuperior2}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("apolo");navigation.navigate('Juego');}}>
   <Bananas pic={Images['comicstorylogo']} titulo="Comic Story"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("chaos");navigation.navigate('Juego');}}>
     <Bananas pic={Images['chaoslogo']} titulo="Proyecto Chaos"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pasoJuego("apolo");navigation.navigate('Juego');}}>
    <Bananas pic={Images['baticuevalogo']} titulo="La Baticueva"/>

  </TouchableHighlight>
    </View>


    <View style = {styles.barraSuperior2}>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("2")}}>
    <Bananas pic={Images['izquierda']} titulo="Mas Personajes"/>
    </TouchableHighlight>
    <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {pararSonido("1")}}>
    <Bananas pic={Images['derecha']} titulo="Mas Personajes"/>
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
