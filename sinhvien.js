import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image, ImageBackground} from 'react-native'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  render() {
    return (
      <View style={styles.container}>
       <ImageBackground source={{ uri: "https://static.vecteezy.com/system/resources/previews/002/375/040/original/modern-white-background-free-vector.jpg" }} style={styles.container} resizeMode="cover">
      <View style={styles.header}>
        <Text style={styles.text}>THÔNG TIN SINH VIÊN</Text>
        
        </View>
        <View style={styles.view}>
        <Image style={styles.image} source={{uri:"https://www.casino-king.com/images/articles/elon-musk.jpg"}}></Image>
         <Text style={styles.text1} >Họ tên sinh viên: Lê Quốc Bảo</Text>
         <Text style={styles.text1} >MSSV: 514210160</Text>
         <Text style={styles.text1} >Ngày tháng năm sinh: 07/06/1997</Text>
         <Text style={styles.text1} >Giới tính: Nam</Text>
        </View>
        <View style = {{marginTop: StatusBar.currenHeight}} 
  
         >
          
        </View>
        </ImageBackground>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'

  },
  image:{
    marginTop:10,
    width:100,
    height:100,
    marginBottom:10
  },
   button1:{
    padding:10,
    marginTop: 40
  },
  view: {
    padding:10,
    borderColor: 'gray',
    marginTop: 8,
    paddingLeft:10,
    alignItems:'center'
  },
  text1:{
  fontSize:20,
  padding:10,
  color: 'red'
  },
  text:{
  fontSize:35,
  fontWeight:'bold',
  color:'blue',
  
  }
})