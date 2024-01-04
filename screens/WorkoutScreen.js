import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItem } from "../Context";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
   const {
     completed,
     setcompleted,
   } = useContext(FitnessItem);
  //console.log(route.params);
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ flex: 2, marginTop: 10, backgroundColor: "#fff" }}
      >
        <Image
          source={{ uri: route.params.image }}
          style={{ width: "100%", height: 170 }}
        />
        <Ionicons
          name="arrow-back-sharp"
          size={28}
          color="#fff"
          style={{ position: "absolute", top: 20, left: 20 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{
              marginLeft: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
            key={index}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 90, marginTop: 9 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold",width:170 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                X{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <Ionicons name="checkmark-done-circle" size={24} style={{marginLeft:40}} color="blue" />

            ):(
               null
            )
            }
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginRight: "auto",
          marginLeft: "auto",
          marginVertical: 20,
          borderRadius: 6,
          width: 120,
        }}
        
      onPress={() =>  {
        navigation.navigate("Fit",{
          excersises:route.params.excersises,
      })
      setcompleted([]);
      }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: "#fff",
            textAlign: "center",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
