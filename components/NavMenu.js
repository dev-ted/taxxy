import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { getOrigin } from "../slices/navSlice";

const items = [
  {
    id: "1",
    name: "Request Ride",
    icon: "https://firebasestorage.googleapis.com/v0/b/developerted.appspot.com/o/car.png?alt=media&token=66918a44-720b-493c-a70f-8b2ad6864a5b",
    screen: "MapScreen",
  },
  {
    id: "2",
    name: "Get Food",
    icon: "https://links.papareact.com/28w",
    screen: "FoodScreen",
  },
];

const NavMenu = () => {
const navigation = useNavigation();
const origin = useSelector(getOrigin);


  return (
    <FlatList
      data={items}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
        disabled = {!origin}
        onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-900  m-2 w-40 rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-sm`}
        >
          <View style={tw`flex items-center ${!origin && ' opacity-20'}`}>
            <Image
              style={{ width: 140, height: 120, resizeMode: "contain" }}
              source={{ uri: item.icon }}
            />
            <Text style={tw`mt-2 text-white text-lg font-semibold`}>
              {item.name}
            </Text>
            <Icon
              style={tw`p-2 rounded-full bg-gray-200 w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color="black"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavMenu;
