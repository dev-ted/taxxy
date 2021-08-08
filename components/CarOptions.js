import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { getTravelTimeInfo } from "../slices/navSlice";
import "intl";

import "intl/locale-data/jsonp/en";
const items = [
  {
    id: "1",
    name: "Taxxy Go",
    icon: "https://links.papareact.com/3pn",
    price: 1,
  },
  {
    id: "2",
    name: "Taxxy Vip",
    icon: "https://links.papareact.com/7pf",
    price: 6.5,
  },
  {
    id: "3",
    name: "Taxxy XL",
    icon: "https://links.papareact.com/5w8",
    price: 4.75,
  },
];

const surge_PRICE = 1.5;

const CarOptions = () => {
  const navigation = useNavigation();
  const [selected,setSelected] =   useState(null);
  const travelTimeInfo = useSelector(getTravelTimeInfo);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride - {travelTimeInfo?.distance.text}</Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, icon, price, name },item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-6 ${id === selected?.id &&
             'bg-gray-200'} `}
          >
            <Image
              style={{ width: 95, height: 95, resizeMode: "contain" }}
              source={{ uri: icon }}
            />
            <View style={tw`-ml-6 py-1`}>
              <Text style={tw`text-xl py-2 font-semibold`}>{name}</Text>
              <Text>{travelTimeInfo?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl py-5`}>R

                {new Intl.NumberFormat('en-ZA',{ maximumSignificantDigits: 1 }).format(
                   (travelTimeInfo?.duration.value * surge_PRICE * price) / 100
                       
                    
                ) }

            </Text>
          </TouchableOpacity>
        )}
      />

                <View >
                    <TouchableOpacity
                    disabled = {!selected}
                     style ={tw`bg-black py-3  mb-5 ml-5 mr-5 rounded-full ${!selected && 'bg-gray-200'} `} >
                        <Text style={tw`text-center text-white text-xl`}>Select {selected?.name}</Text>
                    </TouchableOpacity>
                </View>

    </SafeAreaView>
  );
};

export default CarOptions;

const styles = StyleSheet.create({});
