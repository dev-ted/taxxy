import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const Favorites = () => {
  const items = [
    {
      id: "1",
      name: "Home",
      icon: "home",
      location: "Home",
      destination: "34 Gabriel Street , Forest Hill",
    },
    {
      id: "2",
      name: "Work",
      icon: "briefcase",
      location: "Work",
      destination: "34 Gabriel Street , Forest Hill",
    },
  ];
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200` , {height : 0.5} ]}  />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-black p-3`}
            type="ionicon"
            name={icon}
            color="white"
          />

          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default Favorites;
