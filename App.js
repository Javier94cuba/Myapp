import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Header from "./source/components/Header";
import { useState } from "react";
import Timer from "./source/components/Timer";

const colors = ["white", "green", "red"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState("Twenty" || "Then" || " Five");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.app_name}> Timer App</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />
        <Text style={{ color: "black", fontWeight: "bold" }}>{time}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Start</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  app_name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 100,
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#333333",
    padding: 12,
    marginTop: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    marginLeft: 135,
  },
});
