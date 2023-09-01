import { View, Text, StyleSheet, Image } from "react-native";
const food = [
  {
    id: 1,
    foods: "Pizza:",
    description: "A good pizza whith some cheese and jam.",
    Image: "C:Users/Javier/Myapp/assets/carne.png",
  },

  {
    id: 2,
    foods: "Eggs",
    description: "Evoil eggs to a magnific breakfast.",
    Image: "C:Users/Javier/Myapp/assets/carne.png",
  },

  {
    id: 3,
    foods: "Mett",
    description: "mett for a good dinner whith some wine.",
    Image: "C:Users/Javier/Myapp/assets/carne.png",
  },
];

export default function Food_description({ currentTime }) {
  return (
    <>
      {food.map((element) => (
        <View key={element.id} style={styles.container}>
          <Text style={styles.food}> {element.foods}</Text>
          <Text> {element.description}</Text>
          <Image
            source={{ uri: "C:Users/Javier/Myapp/assets/carne.png" }}
            style={{ height: 34, width: 20 }}
          />
          <Text> {currentTime}</Text>
        </View>
      ))}
      <Image source={{ uri: "C:Users/Javier/Myapp/assets/carne.png" }}></Image>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text_description: {
    color: "red",
  },
  food: {
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
