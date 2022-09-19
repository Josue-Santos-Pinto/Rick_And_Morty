import React from "react";
import { StatusBar } from "react-native";
import C from './style'

export default () => {
    return (
        <C.Container>
            <StatusBar />
            <C.Text>Home</C.Text>
        </C.Container>
    )
}