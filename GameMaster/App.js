/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Elias from './assets/Elias.jpg'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
     
        <Text style={styles.title}>Heroes vs Humans</Text>


        <View style={{flexDirection:"row"}}>
        <Image
          style={[styles.images,  styles.image1]}
          source={{uri:  'https://pbs.twimg.com/profile_images/661418493552660481/5Vqxjfbn_400x400.jpg'}}
        />
      
        <Text>VS</Text>
 
        <Image
          style={[styles.images, styles.image2]}
          source={Elias}
        />
        </View>


       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    marginBottom:50
  },
  images: {
  borderWidth:2,
  borderRadius:50,
  width: 150, 
  height: 150,
  justifyContent: 'space-around',

  },
  image1: {
      borderColor:'green',
 justifyContent: 'flex-start',
 
  },
    image2: {
      borderColor:'#00f',
      justifyContent: 'flex-end'
  }
});
