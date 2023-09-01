import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <SafeAreaView>
      <View style={styles.containers}>
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containers: {
    padding: 15,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    color: "black",
    borderRadius: 13,
    fontSize: 45,
    fontWeight: "bold",
  },
});
