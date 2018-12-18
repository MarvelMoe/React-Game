/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Elias from './assets/Elias.jpg';
import styles from "./css/Styles";




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
      
        <Text style={{padding:20, fontSize: 20}} >vs</Text>
 
        <Image
          style={[styles.images, styles.image2]}
          source={Elias}
        />
        </View>


       </View>
    );
  }
}
