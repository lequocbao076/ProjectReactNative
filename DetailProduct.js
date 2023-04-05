import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Image, ActivityIndicator, ScrollView } from 'react-native';


const ListProduct = ({ navigation, route }) => {
    const [dataDetal, setdataDetail] = useState('');
    const [loading, setloaing] = useState('');

    useEffect(() => {
        getDetail();
        return () => {

        }
    }, []);

    getDetail = async () => {
        try {
            const res = await fetch('http://192.168.1.14:3000/detail-product/' + route.params.id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data1 = await res.json();
            setdataDetail(data1);
        } catch (error) {
            console.log(error)
        }
        setloaing(false);
    };

    return (
        <View style={style.container}>
            {(loading) ? <ActivityIndicator /> : (<ScrollView style={{ marginBottom: 20 }}>
                <Text style={style.textSP}>{dataDetal.tenSP}</Text>
                <Image style={style.image} source={{ uri: dataDetal.image }} />
                <Text style={style.textGia}>Giá: {dataDetal.gia}</Text>
                <View style={style.ct}>
                    <Text style={style.textCT2}>{dataDetal.detail}</Text>
                </View>
            </ScrollView>)}

        </View>
    );
}

export default ListProduct;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#99FFFF",
        justifyContent: "flex-start",
        marginTop: StatusBar.height || 30,
    },

    title: {
        color: "red",
        textAlign: "center",
        marginTop: 10,
        fontSize: 32,
        fontWeight: 'bold'
    },

    image: {
        marginLeft: 130,
        marginTop: 10,
        width: 150,
        height: 150
    },

    textSP: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 30,
        color: "gold"
    },

    textGia: {
        marginTop: 20,
        fontSize: 20,
        textAlign: "center"
    },
    textCT1: {
        fontWeight: "bold",
        marginTop: 15,
        paddingLeft: 20,
        textAlign: "left",
        fontSize: 20,
        color: "#FF4500"
    },
    textCT2: {
        padding: 10,
        fontSize: 17
    },
    ct: {
        margin: 20,
        borderRadius: 10,
        borderColor: "blue"

    }

});









