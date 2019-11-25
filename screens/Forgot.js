import {StyleSheet, View, Text} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function Forgot() {
    return (
        <View style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <Text>
                F O R G O T
            </Text>
        </View>
    );
}
