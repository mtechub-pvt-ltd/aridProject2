import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';





const ProfileScreen =({route,navigation})=> {
  const x =route.params.data1
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Detail')
    }}
    >
    <Text 
    style={{
      padding:30,
      backgroundColor:'red',
      borderRadius:10,
      color:'white',
       
    }}
    
    >Go to Detail Screen  {
      route.params.data1
    }</Text>
</TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;