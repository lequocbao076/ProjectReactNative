import React, { Component } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, Button,TouchableHighlight} from 'react-native';

export default class MaytinhScreen extends Component {
  constructor() {
    super();
    this.operations = ['DEL', '+', '-', '*', '/'];
    this.state = {
      resultText: "",//bien chua ket qua nhap vao
      calculationText: "",//bien chua ket qua tinh toan
    };
  }
  _onPressButton(text) {
    if (text == "=")//khi dau bang thi tra lai ket qua
    {
      return this.calculationResult(this.state.resultText);
    }
    //cap nhat lai ket qua
    this.setState({
      resultText: this.state.resultText + text
    })
  }
  calculationResult() {
    const text = this.state.resultText;//ket qua nhap chuyen vao text
    this.setState({//cap nhat bien trang thai
      calculationText: eval(text),//ham eval la ham tinh toan gia  tri bieu thuc
    });
  }
  //xu ly chuc nang
  operate(operation)//ham dieu khien tinh toan
  {
    switch (operation) {
      case 'DEL'://khi click vao phim xoa
        let text = this.state.resultText.split('');//tach roi cac thanh phan text
        text.pop();//bo ra 1 thanh phan tu phai sang trai
        //cap nhat bien trang thai
        this.setState({
          resultText: text.join('')//join lai thanh 1 chuoi de tinh toan
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          resultText: this.state.resultText + operation //them phep tinh vao ket qua
        })
    }
  }
  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        //dua con so vao dong
        row.push(
          <TouchableHighlight
            key={nums[i][j]}
            style={style.btn}
            // dua text button vao resultext
            underlayColor="#888888"
            onPress={() => this._onPressButton(nums[i][j])}
          >
            <Text style={style.btnText}>{nums[i][j]}</Text>
          </TouchableHighlight>
        )
      }
      //dua row vao rows
      rows.push(<View key={i} style={style.row}>{row}</View>)
    }
    ////ops
    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableHighlight
          style={style.pheptinh}
          key={this.operations[i]}
          // dua phep tinh len resultext
          underlayColor="#888888"
          onPress={() => this.operate(this.operations[i])}
        >
          <Text style={style.btnText}>
            {this.operations[i]}
          </Text>
        </TouchableHighlight>
      )
    }
    return (
      <View style={style.container}>
        <View style={style.result}>
          <Text style={style.resultText}>
            {/* hien thi ket qua nhap du lieu */}
            {this.state.resultText}
          </Text>
        </View>
        <View style={style.calculation}>
          <Text style={style.calculationText}>
            {/* hien thi ket qua tinh toan*/}
            {this.state.calculationText}
          </Text>
        </View>
        <View style={{backgroundColor:'#555555',height:1,marginBottom:4}}></View>
        <View style={style.buttons}>
        <View style={style.numbers}>
            {/* hien thi con so */}
            {rows}
          </View>
          <View style={style.operations}>
            {/* hien thi phep tinh */}
            {ops}
          </View>
          
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    result: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
      marginTop: 40
    },
    calculation: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
    },
    buttons: {
      flex: 3,
      flexDirection: "row",
      marginBottom: 40
    },
    numbers: {
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
    },
    operations: {
      flex: 1,
      
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 5,
      marginRight: 5,
    },
    resultText: {
      fontSize: 30,
      paddingRight: 10,
      color: "#CCCCCC",
    },
    calculationText: {
      fontSize: 80,
      paddingRight: 10,
      color: "white",

    },
    btnText: {
      fontSize: 30,
      paddingRight: 10,
      color: "white",
    },
    btn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#333333",
      borderRadius: 150,
      height: 90,
      width: 80,
      marginRight: 2,
      marginLeft: 2,
      marginTop: 5,
    },
    pheptinh: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      borderWidth: 1,
      borderRadius:7,
      backgroundColor: "#CC6600",
    },
    row: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-around",
      alignItems: "stretch",
    },
  }
);