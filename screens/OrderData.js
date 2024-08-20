import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import moment from "moment";
import { CartItems } from '../Context.js';

const OrderData = () => {
    const { cart, setCart } = useContext(CartItems);
    const [modal, setModal] = useState(false);
    const total = cart
        .map((item) => Number(item.price.replace("₹", "")))
        .reduce((prev, curr) => prev + curr, 0);
    const route = useRoute();
    const navigation = useNavigation();  // Initialize navigation
    const restaurentName = route.params.restaurentName;
    const [tip, setTip] = useState(0);
    const date = moment().format("MMM Do YY");
    const time = moment().format("LT");
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds("BOOOOM!");
        }
    }, [seconds]);

    return (
        <ScrollView
            showVerticalScrollbar={false}
            style={{ backgroundColor: "white", flex: 1, marginTop: 36 }}
        >
            <Pressable
                style={{
                    paddingHorizontal: 10,
                    width: 36,
                    height: 36,
                    marginLeft: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 18,
                    backgroundColor: "#141E30",
                    paddingLeft: 5,
                }}
            >
                <Ionicons
                    onPress={() => navigation.navigate("Home")}  // Navigate to HomeScreen
                    name="chevron-back-outline"
                    style={{
                        textAlign: "center",
                        color: "white",
                    }}
                    size={26}
                />
            </Pressable>
            <Text
                style={{
                    color: "black",
                    fontSize: 19,
                    fontWeight: "bold",
                    padding: 15,
                    backgroundColor: "#FDEDEC",
                    color: "#283747",
                }}
            >
                {restaurentName} has accepted your order at {time}
            </Text>
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 1,
                }}
            />
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 3,
                }}
            />
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                        backgroundColor: "#ff0090",
                        padding: 5,
                        borderRadius: 7,
                    }}
                >
                    <MaterialIcons name="timer" size={26} color="#f0fff0" />
                    <Text
                        style={{
                            fontSize: 19,
                            fontWeight: "700",
                            paddingLeft: 7,
                            color: "white",
                        }}
                    >
                        Delivery in 30 mins
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            paddingTop: 8,
                            color: "#ff8080",
                        }}
                    >
                        Food preparation will begin shortly
                    </Text>
                    <MaterialCommunityIcons
                        style={{ marginLeft: 10 }}
                        name="food-variant"
                        size={28}
                        color="#ff4d4d"
                    />
                </View>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "white",
                        marginVertical: 16,
                    }}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
                    }}
                />
            </View>
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 3,
                }}
            />
            <View style={{ padding: 20, flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        borderColor: "#fff0f5",
                        borderWidth: 1,
                    }}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
                    }}
                />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
                        4 valets near the restaurent
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
                        Anyone will pick your order
                    </Text>
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 3,
                }}
            />
            <View style={{ padding: 20, flexDirection: "row" }}>
                <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
                <View style={{ marginLeft: 10 }}>
                    <Text
                        style={{ fontSize: 19, fontWeight: "bold", paddingHorizontal: 2 }}
                    >
                        Tip your hunger Saviour
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#696969",
                            marginRight: 10,
                            paddingHorizontal: 2,
                        }}
                    >
                        Thank your delivery partner for helping you stay safe
                        indoors.Support them through these tough times with a tip
                    </Text>
                    <Pressable
                        style={{
                            paddingTop: 20,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => setTip(30)}
                            style={{
                                backgroundColor: "#F5F5F5",
                                marginHorizontal: 10,
                                paddingHorizontal: 10,
                                borderRadius: 7,
                            }}
                        >
                            <Text
                                style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                            >
                                ₹30
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => setTip(50)}
                            style={{
                                alignItems: "center",
                                backgroundColor: "#F5F5F5",
                                marginHorizontal: 10,
                                borderRadius: 7,
                            }}
                        >
                            <Text
                                style={{ padding: 4, color: "#002D62", fontWeight: "bold" }}
                            >
                                ₹50
                            </Text>
                            <Text
                                style={{
                                    backgroundColor: "orange",
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Most Tipped
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => setTip(70)}
                            style={{
                                backgroundColor: "#F5F5F5",
                                marginHorizontal: 10,
                                paddingHorizontal: 10,
                                borderRadius: 7,
                            }}
                        >
                            <Text
                                style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                            >
                                ₹70
                            </Text>
                        </TouchableOpacity>
                    </Pressable>
                </View>
            </View>
            {tip ? (
                <View>
                    <Text
                        style={{
                            color: "#034694",
                            padding: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        You have tipped ₹{tip}
                    </Text>
                </View>
            ) : null}
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 1,
                }}
            />
            <View
                style={{
                    padding: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "700",
                        color: "#003D79",
                    }}
                >
                    Order Summary
                </Text>
                <MaterialCommunityIcons
                    name="food-fork-drink"
                    size={28}
                    color="#00BFFF"
                />
            </View>
            <View style={{ borderBottomColor: "#D0D0D0", borderBottomWidth: 1 }} />
            <View>
                <Text style={{ padding: 20, fontSize: 16, fontWeight: "bold" }}>
                    Order placed at {date}
                </Text>
                <View
                    style={{
                        backgroundColor: "#F5F5F5",
                        marginVertical: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                    }}
                >
                    {cart.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingVertical: 10,
                                borderBottomColor: "#D0D0D0",
                                borderBottomWidth: 1,
                            }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 8,
                                    }}
                                    source={{ uri: item.image }}
                                />
                                <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "600" }}>
                                    {item.name}
                                </Text>
                            </View>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.price}</Text>
                        </View>
                    ))}
                    <View style={{ marginVertical: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Total: ₹{total}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ padding: 15 }}>
                <TouchableOpacity
                    onPress={() => {
                        setCart([]);
                        navigation.navigate("Home");  // Navigate to HomeScreen
                    }}
                    style={{
                        backgroundColor: "#00BFFF",
                        paddingVertical: 15,
                        borderRadius: 7,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                        Continue Shopping
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default OrderData;
