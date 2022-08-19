import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'





const HomeScreen =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Profile',{
        data1:'I am Coming From Home Screen'
      })
    }}
    >
    <Text 
    style={{
      padding:30,
      backgroundColor:'red',
      borderRadius:10,
      color:'white',
       
    }}
    
    >Go to Profile Screen <Icon name="person" size={30} color="#900" /></Text>
</TouchableOpacity>
    </View>
  );
}

export default HomeScreen;