import React from "react";
import {
    StyleSheet,
    View
} from "react-native";
import Text from "react-native-web/dist/exports/Text";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function SignUp() {
    return (
        <View style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <Text>
                S I G N U P
            </Text>
        </View>
    );
}
