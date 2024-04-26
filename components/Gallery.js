import React, { useState} from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

const images = [
  {
    id: 1,
    description: "Spaghetti Carbonara",
    url: "https://i.imgur.com/CoxeB73.jpeg",
  },
  {
    id: 2,
    description: "Beef Stew",
    url: "https://i.imgur.com/Xjryzf8.jpeg",
  },
  {
    id: 3,
    description: "Stir Fry",
    url: "https://i.imgur.com/oRNqz9M.jpeg",
  },
  {
    id: 4,
    description: "Cheeseburger",
    url: "https://i.imgur.com/H4q9dfb.jpeg",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Gallery</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: images[currentIndex].url }}
          style={styles.image}
        />
        <Text style={styles.description}>{images[currentIndex].description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Prev"
          onPress={prevImage}
        />
        <Button
          style={styles.button}
          title="Next"
          onPress={nextImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 300, // Adjust as needed
    height: 200, // Adjust as needed
    resizeMode: "cover", // Adjust the resizeMode as needed
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    margin: 10,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: '',
  },
  button: {
    margin: 10,
  }
});

export default Gallery;
