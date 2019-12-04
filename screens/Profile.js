import {ScrollView, Text, StyleSheet} from "react-native";
import React from "react";

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <Text>
                Bla Bla Bla Profile
            </Text>
        </ScrollView>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
});
