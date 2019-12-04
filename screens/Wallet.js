import React, { Component } from "react";
import {ScrollView, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Block, Icon} from "../components";

export default class Wallet extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeftContainerStyle: {
                paddingLeft: 24
            },
            headerRightContainerStyle: {
                paddingRight: 24
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()} >
                    <Icon menu />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Icon notification/>
                </TouchableOpacity>
            ),
            headerTitle: (
                <Block row middle>
                    <Text h4>
                        Wallet
                    </Text>
                </Block>
            ),
        }
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    Bla Bla Bla User
                </Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})
