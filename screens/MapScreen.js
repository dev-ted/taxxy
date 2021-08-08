import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View ,TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import CarOptions from "../components/CarOptions";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";



const MapScreen = () => {
  const Stack =  createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
      onPress = {() => navigation.navigate("Home")}
       style = {tw`absolute top-16 left-8 z-50 p-3 rounded-full bg-gray-100 
      shadow-lg`} >
        <Icon name="menu" />

      </TouchableOpacity>
     

      <View style={tw`h-1/2`}>
          <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
          name = "NavigateCard"
          component = {NavigateCard}
          options = {{
            headerShown : false,
          }}
          />
          <Stack.Screen
          name = "CarOptions"
          component = {CarOptions}
          options = {{
            headerShown : false,
          }}
          />

        </Stack.Navigator>

      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
