import { ThemeProvider } from "@/context/ThemeContext";
import store from "@/redux/store";
import HomeScreen from "@/screens/HomeScreen";

import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";


export default function IndexPage() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <HomeScreen />
            </ThemeProvider>
        </Provider>
    );
}
