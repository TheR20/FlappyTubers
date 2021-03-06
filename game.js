import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity,Text,Image } from 'react-native';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import Bird from './src/components/Bird';
import Wall from './src/components/Wall';
import Constants from './src/Constants';
import Physics from './src/Physics';
import Floor from './src/components/Floor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import LocalizedStrings from 'localized-strings';


var Sound = require('react-native-sound');
var sound3 = new Sound('muriendo', Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
});


let strings = new LocalizedStrings({
  en:{
     Score: "Your Score",
     mScore:"High Score",
     intena: "Try Again",
     newScore: "New Record!",
  },
  es: {
    Score: "Tu Puntaje",
    mScore:"Puntaje Maxico",
    newScore: "Nuevo Record",
    intena: "Reiniciar"
  },
}
);
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}





export const generatePipes = () => {
    let topPipeHeight = randomBetween(100, (Constants.MAX_HEIGHT / 2) - 100);
    let bottomPipeHeight = Constants.MAX_HEIGHT - topPipeHeight - Constants.GAP_SIZE;

    let sizes = [topPipeHeight, bottomPipeHeight]

    if (Math.random() < 0.5) {
        sizes = sizes.reverse();
    }


    return sizes;
}

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
      running: true,
      score: 0,
      MaxScore: "0",
      scoreText:"Your Score:"
  };
        this.gameEngine = null;

        this.entities = this.setupWorld();
    }


//AsyncStorage el guardar y leer
 storeData = async (value) => {
  try {
      if(this.state.score > value){
          await AsyncStorage.setItem('@storage_Key', String(this.state.score))
          this.setState({scoreText: strings.newScore})
          sound.play();
      }
      else{
          this.setState({scoreText: strings.Score})
        sound3.play();
      }



  } catch (e) {
    // saving error
  }
}

 getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {

      this.setState({MaxScore: value})


    }
  } catch(e) {
    // error reading value
  }
}




    setupWorld = () => {
          let engine = Matter.Engine.create({ enableSleeping: false });
          let world = engine.world;
          world.gravity.y = 0.0;




          let bird = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT / 2, Constants.BIRD_WIDTH, Constants.BIRD_HEIGHT);
          //bird.restitution = 20;

          let floor1 = Matter.Bodies.rectangle(
              Constants.MAX_WIDTH / 2,
              Constants.MAX_HEIGHT - 80,
              Constants.MAX_WIDTH + 4,
              50, { isStatic: true }
          );
          let floor2 = Matter.Bodies.rectangle(
              Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2),
              Constants.MAX_HEIGHT - 80,
              Constants.MAX_WIDTH + 4,
              50, { isStatic: true }
          );

          Matter.World.add(world, [bird, floor1]);
          Matter.Events.on(engine, 'collisionStart', (event) => {
              var pairs = event.pairs;

              this.gameEngine.dispatch({ type: "game-over"});

          });

          return {
              physics: { engine: engine, world: world },
              floor1: { body: floor1, renderer: Floor },
              floor2: { body: floor2, renderer: Floor },
              bird: { body: bird, pose: 1, renderer: Bird},
          }
      }

      onEvent = (e) => {
           if (e.type === "game-over"){
               //Alert.alert("Game Over");
               this.setState({
                   running: false
               });
               this.getData()
               this.storeData(this.state.MaxScore)

           } else if (e.type === "score") {
               this.setState({
                   score: this.state.score + 1
               })
           }
       }

       reset = () => {

           this.gameEngine.swap(this.setupWorld());
           this.setState({
               running: true,
               score: 0
           });
       }

    render() {
        return (
            <View style={styles.container}>
            <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
                <GameEngine
                    ref={(ref) => { this.gameEngine = ref; }}
                    style={styles.gameContainer}
                    systems={[Physics]}
                    running={this.state.running}
                    onEvent={this.onEvent}
                    entities={this.entities}>

                </GameEngine>
                <Text style={styles.score}>{this.state.score}</Text>
                 {!this.state.running && <TouchableOpacity style={styles.fullScreenButton} onPress={this.reset}>
                      <View style={styles.fullScreen}>
                     <Text style={styles.YourScoreText}>{this.state.scoreText}</Text>
                     <Text style={styles.scoreGameOver}>{this.state.score}</Text>
                     <Text style={styles.ScoreText}>{strings.mScore}</Text>
                     <Text style={styles.gameOverText}>{this.state.MaxScore}</Text>
                         <Text style={styles.gameOverText}>Game Over</Text>
                         <Text style={styles.gameOverSubText}>{strings.intena}</Text>


                     </View>
                 </TouchableOpacity>
               }

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  banner:{
    marginTop: 60
  },
  banner2:{
    marginTop: 10
  },
  backgroundImage: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: Constants.MAX_WIDTH,
      height: Constants.MAX_HEIGHT
  },
  gameContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
  },
  gameOverText: {
      color: 'white',
      fontSize: 48,
      fontFamily: '04b_19'
  },
  ScoreText
  : {
      color: 'yellow',
      fontSize: 48,
      fontFamily: '04b_19',
      marginTop: 80,
      textShadowColor: '#F42532',
      textShadowOffset: { width: 2, height: 2},
      textShadowRadius: 2,

  },
  YourScoreText: {
    position: 'absolute',
    color: 'yellow',
    fontSize: 48,
    top: 48,
marginBottom: 20,
    textShadowColor: '#F42532',
    textShadowOffset: { width: 2, height: 2},
    textShadowRadius: 2,
    fontFamily: '04b_19'
  },
  gameOverSubText: {
      color: 'white',
      fontSize: 24,
      fontFamily: '04b_19',
      textShadowColor: 'green',
      textShadowOffset: { width: 2, height: 2},
      textShadowRadius: 2,
  },
  fullScreen: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black',
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center'
  },
  score: {
      position: 'absolute',
      color: 'white',
      fontSize: 72,
      top: 50,
      left: Constants.MAX_WIDTH / 2 - 20,
      textShadowColor: '#F42532',
      textShadowOffset: { width: 2, height: 2},
      textShadowRadius: 2,
      fontFamily: '04b_19'
  },

  scoreGameOver: {
      position: 'absolute',
      color: 'white',
      fontSize: 72,
      top: 100,
      left: Constants.MAX_WIDTH / 2 - 20,
      textShadowColor: '#444444',
      textShadowOffset: { width: 2, height: 2},
      textShadowRadius: 2,
      fontFamily: '04b_19'
  },
  fullScreenButton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1
  }
});
