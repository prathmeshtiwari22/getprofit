import { Image, SafeAreaView, StyleSheet, Text, View ,ScrollView} from "react-native";
import React, { useContext, useState } from "react";
import FitnessCard from "../components/FitnessCard";
import { FitnessItem } from "../Context";

const HomeScreen = () => {
  const {
    workout,
    setworkout,
    completed,
    setcompleted,
    min,
    setmin,
    calories,
    setcalories,
  } = useContext(FitnessItem);
  return (
    <SafeAreaView style={{marginTop:50}}>
      <View
        style={{
          backgroundColor: "#0000FF",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold" }}>
          WORKOUT ETHICS
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 5,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#D0D0D0",
                marginTop: 6,
                fontSize: 17,
              }}
            >
              Workouts
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#D0D0D0",
                marginTop: 6,
                fontSize: 17,
              }}
            >
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {min}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#D0D0D0",
                marginTop: 6,
                fontSize: 17,
              }}
            >
              MINS
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 125,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://media.vogue.in/wp-content/uploads/2019/05/Shraddha-Kapoor-featured.jpg",
            }}
          />
        </View>
        <FitnessCard/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
