import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ThemeProvider } from "@/context/ThemeContext";
import HomeScreen from "@/screens/HomeScreen";

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <HomeScreen />
            </ThemeProvider>
        </Provider>
    );
}
