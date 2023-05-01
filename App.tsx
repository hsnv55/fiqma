import React from "react";
import { SafeAreaView, Text ,StyleSheet} from "react-native";
import Popub from "./Popub";
import Payment from "./Payment";
const App = () => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <Popub/>
     {/* <Payment/> */}
    </SafeAreaView> 
  ); 
}; 
export default App; 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#E5E5E5', 
  }, 
});
