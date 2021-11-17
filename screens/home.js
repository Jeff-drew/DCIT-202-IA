import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity , FlatList} from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native-web";


export default function Home(params) {
    const mylists = [
        {
            id: 1,
            title: 'World HeavyWeight',
            image: require ('../assets/images/title 1.jpeg'),
            price: 20,
        },
        {
            id: 2,
            title:'U.S Champ...',
            image: require ('../assets/images/title 2.jpeg'),
            price: 20,
        },
        {
            id: 3,
            title: '24/7 championship',
            image: require('../assets/images/title 3.jpeg'),
            price: 20,
        },
        {
            id: 4,
            title: 'T.shirt #1',
            image: require('../assets/images/tshirt1.jpeg'),
            price: 10,
        },
        {
            id: 5,
            title: 'T.shirt #2',
            image: require('../assets/images/tshirt2.jpeg'),
            price: 15,
        },
        {
            id: 6,
            title: 'T.shirt #3',
            image: require('../assets/images/tshirt3.jpeg'),
            price: 15,
        },
    ];

    const rendermylist = ({item}) =>{
        return (
            <TouchableOpacity onPress = {() => {navigation.navigate("Details", item);}}>
            <View style = {styles.productlist} >
            <View style={{alignItems:'flex-end'}}>
              <View 
                style={{
                  width:30, height:30,
                  borderRadius:20,
                  alignItems: 'center',
                  justifyContent:'center', backgroundColor: item.like ? 'rgba(245,42,42,0.2)' : 'rgba(0,0,0,0.2)',}}>
                <MaterialIcons name="favorite" size={18}  color={item.like ? "red" : "black"} />
              </View>
            </View>
            <View style = {{height:100, alignItems: 'center'}}>
              <Image style ={{flex: 1, resizeMode: 'contain'}} source={item.image} />
            </View> 
            <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>{item.title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
              <Text style = {{fontSize: 19, fontWeight: 'bold'}}>${item.price}</Text>
              <View style={{height: 25, width: 25, backgroundColor: 'black', borderRadius: 10,              justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 22, color: "white", fontWeight: 'bold'}}>+</Text>
              </View>
            </View>
          </View> 
          </TouchableOpacity>
        );
    };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
      <View>
            <Text style = {{fontWeight: 'bold', paddingTop: 10, paddingBottom: 10}}>
                LISTINGS
            </Text>
            <View>
                <FlatList 
                data={mylists}
                renderItem={rendermylist}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle ={{
                  marginTop: 10,
                  paddingBottom: 50,
                }}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    productlist:{
        height: 225,
        backgroundColor: '#f6f6f6',
        width: Dimensions.get('window').width/2 - 30,
        marginHorizontal:2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 20,
    }
})
