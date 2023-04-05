import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, StatusBar, TouchableOpacity, Alert } from 'react-native';

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tenSP: "",
            gia: "",
            image: "",
            detail: "",
            navigation: this.props.navigation,
        }
    }
    async submitAdd() {
        try {
            const res = await fetch('http://192.168.1.14:3000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tenSP: this.state.tenSP,
                    gia: this.state.gia,
                    image: this.state.image,
                    detail: this.state.detail
                })
            })
            const dataAdd = await res.json();
            if (dataAdd.addproduct) {
                this.state.navigation.navigate('ListProducts')

            } else {
                Alert("Không được để trống!")
            }

        } catch (error) {
            Alert("Lỗi kết nối!")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: "bold", color: "red", fontSize: 30, padding: 30 }}>Thêm Sản Phẩm</Text>
                <View style={styles.cover}>
                    <Text style={styles.text}>Tên SP: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Tên sản phẩm'
                        onChangeText={(tenSP) => this.setState({ tenSP: tenSP })}
                    />
                </View>

                <View style={styles.cover}>
                    <Text style={styles.text}>Giá SP: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Giá sản phẩm'
                        onChangeText={(gia) => this.setState({ gia: gia })}
                    />
                </View>

                <View style={styles.cover}>
                    <Text style={styles.text}>Ảnh SP: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Link ảnh sản phẩm'
                        onChangeText={(image) => this.setState({ image: image })}
                    />
                </View>

                <View style={styles.cover}>
                    <Text style={styles.text1}> Giới thiệu: </Text>
                    <TextInput
                        style={styles.textInput1}
                        placeholder='Giới thiệu sản phẩm'
                        onChangeText={(detail) => this.setState({ detail: detail })}
                    />
                </View>

                <TouchableOpacity style={styles.add} onPress={() => { this.submitAdd()}}>
                    <Text style={styles.textAdd} >Thêm</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Add;





const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: "#B0C4DE",
        marginTop: StatusBar.currentHeight || 0,
    },
    cover: {
        flexDirection: "row"
    },
    text: {
        marginTop: 12,
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20
    },

    textInput: {
        marginLeft: 15,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        width: "68%",
        backgroundColor: '#FFF8DC'
    },
    text1: {
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 20
    },

    textInput1: {
        marginTop: 15,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        width: "68%",
        height: "100%",
        backgroundColor: '#FFF8DC'
    },
    add: {
        marginTop: 50,
        width: 100,
        padding: 2,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#006400F",
        backgroundColor: "pink",

    },
    textAdd: {
        paddingLeft: 13,
        padding: 5,
        fontSize: 25,
        fontWeight: "bold",
        color: "#191970"
    }

});