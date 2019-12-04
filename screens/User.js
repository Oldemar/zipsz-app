import {ScrollView, Text, StyleSheet } from "react-native";
import React from "react";

export default function User() {
    return (
        <ScrollView style={styles.container}>
            <Text>
                Bla Bla Bla User
            </Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
})
