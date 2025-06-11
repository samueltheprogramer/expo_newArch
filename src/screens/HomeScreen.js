import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "@/context/ThemeContext";

export default function HomeScreen() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: darkMode ? "#000" : "#fff" }}>
            <Text style={{ fontSize: 24, color: darkMode ? "#fff" : "#000" }}>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch({ type: "INCREMENT" })} />
            <Button title="Decrement" onPress={() => dispatch({ type: "DECREMENT" })} />
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
}
