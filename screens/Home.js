import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavMenu from "../components/NavMenu";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import Favorites from "../components/Favorites";
import GetLocation from "react-native-get-location";

const Home = () => {
  const dispatch = useDispatch();

 

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/developerted.appspot.com/o/taxxy-removebg-preview%20(1).png?alt=media&token=1baed692-3df4-4663-91e4-2c960996c614",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Pick up location?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              backgroundColor: "#F9F9F9",
              color: "#000",
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavMenu />

        <Favorites />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
});
