import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';





const DetailScreen =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Homes')
    }}
    >
    <Text 
    style={{
      padding:30,
      backgroundColor:'red',
      borderRadius:10,
      color:'white',
       
    }}
    
    >Go to Detail Screen</Text>
</TouchableOpacity>
    </View>
  );
}

export default DetailScreen;