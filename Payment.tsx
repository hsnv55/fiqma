import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewBase } from "react-native";
const Payment = () => {
    return (<View style={styles.continer}>
        <View >
            <TouchableOpacity style={styles.buton1}>
                <Image source={require('./image/buton1.png')} />
            </TouchableOpacity>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.texttitle}>Credit / Debit Card</Text>
            </View>
        </View>
        <View >

            <Image source={require('./image/Card.png')} /></View>
        <View style={{paddingLeft:33}}>
            <Text>Name on card</Text>
        </View>
        <View style={styles.continr} >

            <Text style={styles.textcontiner}>Leslee Harron</Text>
           
        </View>
        <View style={styles.continrtop}>
        <View style={{paddingLeft:33}}>
            <Text>Card number</Text>
        </View>
        <View style={styles.continr}>
            <Text style={styles.textcontiner}>4242 4242  4242  4242</Text>
        </View>
        </View>
    <View style={styles.continrtopandrow} >
           <View style={{flexDirection:'column'}}>
            <View  style={styles.texttitle}>
                <Text>Expiry date</Text>
            </View>
            <View style={styles.continr}>
                <Text style={styles.textcontiner2}>04/22</Text>
            </View>
            </View> 
            <View  style={{flexDirection:'column'}}>
            <View  style={styles.texttitle}>
                <Text>CVC</Text>
            </View>
            <View style={styles.continr}>
                <Text style={styles.textcontiner2}>474</Text>
            </View>
            </View> 
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity style={styles.endbuton}>
                <Text style={styles.textbuton}>Use this card</Text>
            </TouchableOpacity>
        </View>
    </View>

    )
}
export default Payment;
const styles = StyleSheet.create({

    continer: {
        backgroundColor: '#E5E5E5',
        // alignItems:'center',
        // justifyContent:'center'
    },
    buton1: {
        width: 42,
        height: 42,
        paddingLeft: 23,
        backgroundColor: 'rgba(7, 18, 42, 0.15',
        paddingTop: 30,
    },
    texttitle: {
        color: '#07122A',
        fontWeight: '600',
        fontSize: 22,
        textAlign: "center",
        paddingLeft: 33

    },
 
    continr: {
paddingLeft:33,

    
    },
    continrtop:{
        paddingTop:33,
     
    },
    continrtopandrow:{
        paddingTop:33,
     flexDirection:'row'
    },
    textcontiner: {
            fontSize: 30, 
        color: '#0B152D', 
        height: 40, 
        width: 333, 
        borderRadius: 8, 
        borderWidth :1 
     
    },
    textcontiner2:{
        fontSize: 30, 
        color: '#0B152D', 
        height: 40, 
        width: 150, 
        borderRadius: 8, 
        borderWidth :1 
    },
    endbuton:{
        backgroundColor:'#07122A',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        height: 45,
        width:333
    },
textbuton:{
    
    color:'#FFFFFF',

}
})
