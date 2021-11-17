import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          
          borderRadius: 10,
          marginBottom: 60,
          width: 220,
          height: 220,
        }}
        source={{
          uri: "data:image/png;base64,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",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" ,padding: 1}}>Welcome To</Text>
      <Text style={{ fontSize: 35, fontWeight: "bold" ,padding:10}}>The World of WWE</Text>
       <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter Username"
        />
      </View> 
      <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            
          }}
          placeholder="Enter Password"
        />
      </View> 
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
      
          <Text style ={{margin: 10,fontWeight: '500', color: 'grey'}}>
              Don't have an account? 
          </Text>
          <TouchableOpacity>
          <Text style ={{ color: 'black', fontWeight: 'bold'}}>
              Sign up!
          </Text>
      </TouchableOpacity>
    </View>

  );
}
