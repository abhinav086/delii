import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Hotels from "../components/Hotels";
import hotels from "../data/hotels";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";

const restaurent = hotels[0];

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>Food Venture</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <EvilIcons
              style={{ marginRight: 10 }}
              name="search"
              size={28}
              color="#cb202d"
            />
            <TextInput
              style={{ fontSize: 18 }}
              placeholder="Restaurant name, cuisine, or a dish"
            />
          </View>

          <Categories />

          <Pressable style={styles.pressableContainer}>
  <View style={styles.imageRow}>
    <Image
      style={styles.image}
      source={{
        uri: "https://i.pinimg.com/736x/fb/79/34/fb79342d9b131f145f11071201da0f3d.jpg",
      }}
    />
    <Image
      style={styles.image}
      source={{
        uri: "https://i.pinimg.com/736x/c0/a9/72/c0a972f7494a8550ccb69a5663fb80b6.jpg",
      }}
    />
  </View>
</Pressable>


          <Text style={styles.sectionTitle}>Eat what makes you happy</Text>

          <Pressable>
      <View style={styles.middleImagesContainer}>
        <View style={styles.middleImageWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
            }}
          />
          <Text style={styles.middleImageText}>Thalis</Text>
        </View>

        <View style={styles.middleImageWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
            }}
          />
          <Text style={styles.middleImageText}>Pizzas</Text>
        </View>

        <View style={styles.middleImageWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/82e46eb9feeba22bdc6e2641f77cab3b",
            }}
          />
          <Text style={styles.middleImageText}>Burger</Text>
        </View>

        <View style={styles.middleImageWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
            }}
          />
          <Text style={styles.middleImageText}>Dosas</Text>
        </View>
      </View>
    </Pressable>

          <FlatList
            data={hotels}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Hotels restaurent={item} />}
            scrollEnabled={false} // Disable FlatList scrolling, handled by parent ScrollView
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appBar: {
    height: 60,
    backgroundColor: "#cb202d",
    justifyContent: "center",
    alignItems: "center",
  },
  appBarTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 9,
    marginTop: 10,
    marginRight: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#A0A0A0",
    justifyContent: "center",
  },
  scrollViewContent: {
    paddingBottom: 60, // Added padding to prevent content from cutting off
  },
  pressableContainer: {
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, // for Android
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    resizeMode: "cover",
  },
  sectionTitle: {
    margin: 10,
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 6,
  },
  middleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  middleImageWrapper: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4, // for Android
  },
  middleImage: {
    width: 60,
    height: 60,
    borderRadius: 50, // Ensure images are circular
  },
  middleImageText: {
    marginTop: 8,
  },
});
