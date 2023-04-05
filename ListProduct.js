import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';


const ListProduct = ({ navigation }) => {
    const [dataPro, setdataPro] = useState([]);
    const numColumns = 2;
    useEffect(() => {
        getListPro();
        return () => {

        }
    }, []);

    getListPro = async () => {
        try {
            const res = await fetch('http://192.168.1.14:3000/products', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data1 = await res.json();
            setdataPro(data1);
        } catch (error) {
            console.log(error)
        }
    };



    const renderItem = ({ item }) => {
        return (
            <View style={style.item}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', { id: item._id })}>
                    <Image style={style.image} source={{ uri: item.image }} resizeMode='contain' />
                    <Text style={style.textSP}>{item.tenSP}</Text>
                    <Text style={style.textGia}>Giá: {item.gia}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style={style.container}>
            <Text style={style.tenDS}>LIST SẢN PHẨM</Text>
            <FlatList
                numColumns={numColumns}
                style={style.list}
                data={dataPro}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>
    );
}

export default ListProduct;
const width1 = Dimensions.get('window').width;
const style = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    list: {
        padding: 10
    },
    item: {
        borderColor: "purple",
        borderWidth: 5,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        padding: 5,
        marginTop: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        height: 230,
        flex: 0.5
    },

    title: {
        fontSize: 32,
    },

    image: {
        margin: 10,
        marginLeft: 30,
        width: 100,
        height: 100
    },

    tensp: {
        flex: 1,
        justifyContent: "center"

    },

    textSP: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        color: "#DD0000"
    },

    textGia: {
        marginTop: 5,
        fontSize: 20,
        textAlign: "center",
        color: "#1E90FF"
    },

    tenDS: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'yellow',
        fontSize: 40
    },

});









