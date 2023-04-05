import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

class DonghoScreen extends Component{
    constructor(props){
        super(props);
        this.state = { currentTime: null, currentDay: null }
        this.daysArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
        this.state = {
            navigation: this.props.navigation,
            route: (this.props.route == null)? '' : this.props.route,
           
        }
      }
      componentWillUnmount(){
        this.getCurrentTime();
      }
    
      getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = 'pm';
    
        if (minutes < 10){
          minutes = '0' + minutes;
        }
    
        if (seconds < 10){
          seconds = '0' + seconds;
        }
    
        if (hour > 12){
          hour = hour - 12;
        }
    
        if (hour == 0) {
          hour = 12;
        }
    
        if (new Date().getHours() < 12 ){
          am_pm = 'am';
        }
    
        this.setState({currentTime:hour+':'+minutes+':'+seconds+' '+am_pm});
        this.daysArray.map((item,key)=>{
          if(key == new Date().getDay()){
            this.setState({ currentDay: item.toUpperCase()});
          }
        })
      }
    
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      componentDidMount() {
        this.timer = setInterval(() => {
          this.getCurrentTime();
        },1000);
      }
      render(){
        return(
            <View style={style.container}>
                <View>
                    <Text style={style.daysText}>{this.state.currentDay}</Text>
                    <Text style={style.timeText}>{this.state.currentTime}</Text>
                </View>
            </View>
        );
      }
      
}
const style = StyleSheet.create(
    {
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#222222'
      },
      timeText: {
        fontSize:50,
        color: '#FFC125'
      },
      daysText:{
        color:'#B22222',
        fontSize: 25,
        paddingBottom: 0
      }
    }
  );
  export default DonghoScreen;