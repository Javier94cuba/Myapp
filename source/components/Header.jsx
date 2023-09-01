import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const options = ["Pizza", "Eggs", "Mett"];

export default function Header({ currentTime, setCurrentTime, setTime }) {
  function handlepress(index) {
    const newTime = index === 0 ? 15 : index === 1 ? 10 : 5;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <>
      <View style={styles.view_principal}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlepress(index)}
            style={[
              styles.itemStyle,
              currentTime !== index && { borderColor: "transparent" },
            ]}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view_principal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  itemStyle: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    padding: 7,
    borderRadius: 20,
  },
});
