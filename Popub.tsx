import React, { startTransition } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Popub=()=>{
    return(
<View >

    <View style={styles.buststyle}>
    <Image source={require('./image/bust.png')}/>
    </View>
    <View style={styles.textstyle1}>

<Text style={styles.text1styles}>Hey Leslee,</Text>
<Text style={styles.text1styles}> there’s a new course about</Text>
<Text style={styles.text1styles}>Figma</Text>


    </View>
    <View style={styles.textstyle2}>

<Text style={styles.text2styles}>Find out how our new matching tool</Text>
<Text style={styles.text2styles}> can help you learn another way</Text>

<View style={styles.butonplace}>
    <TouchableOpacity style={styles.butonstyle}>
        <Text style={styles.butontext}>Discover the course</Text>
    </TouchableOpacity>
</View>
<View style={styles.endtextplace}>
    <Text style={styles.endtext}>Not now</Text>
</View>

    </View>
        </View>

    )}
    export default Popub;


const styles=StyleSheet.create({
textstyle1:{
alignItems:'center',

},
textstyle2:{
    alignItems:'center',
    paddingVertical:30
    
    },
text1styles:{
fontWeight:'600',
fontSize:22,
color:'#07122A',
},
text2styles:{
    fontWeight:'300',
    fontSize:16,
    color:'#4F4F4F',
    },
buststyle:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  butonplace:{
    alignItems:'center',
    paddingVertical:66
  },
  butonstyle:{
    width:284,
    height:58,
    backgroundColor:'#07122A',
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'
    
  },
  butontext:{
color:'#FFFFFF',
fontSize:17
  },
  endtext:{
color:'#BDBDBD',
width:61,
height:18,

  },
  endtextplace:{
  }

})