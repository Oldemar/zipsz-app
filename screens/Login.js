import React, { Component } from "react";
import {
    Text,
    KeyboardAvoidingView,
    Image,
    Dimensions,
} from "react-native";
import { inject, observer } from "mobx-react";
import { Block } from '../components'
import store from "../stores/Store";
import Input from "../components/Input";
import Button from "../components/Button";

class Login extends Component {
    render() {
        const checkCredentials = () => {
            store.UserStore.checkCredentials();
            return store.UserStore.loggedIn ? (
                () => this.props.navigation.navigate('Overview')
            ) : (
                null
            )
        };
        const height = Dimensions.get('window').height;
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView
                enabled
                behavior="padding"
                style={{flex: 1}}
                keyboardVerticalOffset={height * 0.2}
            >
                <Block center middle>
                    <Block middle>
                        <Image
                            source={require('../assets/images/Base/Logo.png')}
                            style={{height: 28, width: 102}}
                        />
                    </Block>
                    <Block flex={2.5} center>
                        <Text h3 style={{marginBottom: 6}}>
                            Sign in to Zipsz
                        </Text>
                        <Text paragraph color="black3">
                            Please enter your credentials to proceed.
                        </Text>
                        <Block center style={{marginTop: 44}}>
                            <Input
                                full
                                email
                                label="Email address"
                                style={{marginBottom: 25}}
                                onChangeText={text => store.UserStore.credentials.username = text }
                                value={store.UserStore.credentials.username}
                            />
                            <Input
                                full
                                password
                                label="Password"
                                style={{marginBottom: 25}}
                                rightLabel={
                                    <Text
                                        paragraph
                                        color="gray"
                                        onPress={ () => { navigate('Forgot') } }
                                    >
                                        Forgot password?
                                    </Text>
                                }
                                onChangeText={text => store.UserStore.credentials.password = text }
                                value={store.UserStore.credentials.password}
                            />

                            <Button
                                full
                                style={{marginBottom: 12}}
                                onPress={checkCredentials()}
                            >
                                <Text button>Sign in</Text>
                            </Button>
                            <Text paragraph color="gray">
                                Don't have an account? <Text
                                height={18}
                                color="blue"
                                onPress={() => navigate('SignUp')}>
                                Sign up
                            </Text>
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

export default inject('store')(observer(Login));
