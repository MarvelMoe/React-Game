
import { StyleSheet } from "react-native"


export default StyleSheet.create({
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
      borderColor:'#2F4F4F',
      justifyContent: 'flex-end'
  }
});