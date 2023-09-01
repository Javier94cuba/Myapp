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
import Food_description from "./source/components/Food_descrition";

const colors = ["#f2e8cf", "#fcbf49", "#bb4430"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(0 * 60);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.app_name}> Timer App for Cook</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <StatusBar style="auto" />
      </View>
      <Food_description currentTime={currentTime} />
      <Timer time={time} />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  app_name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 40,
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
