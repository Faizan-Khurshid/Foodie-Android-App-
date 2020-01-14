import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Header from "../../Components/Header/Header";
import { TextInput, Headline, FAB, HelperText, ActivityIndicator } from 'react-native-paper';
import axios from "axios";

const FlottingButton = props => (
    <FAB
        style={styles.fab}
        // small
        icon="arrow-right"
        onPress={() => props.changeScreen()}
    />
);

export default class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            submitClicked: false
        }
    }
    handleChange = (text, field) => {
        this.setState({
            [field]: text
        })
    }
    LoginUser = () => {
        const { email, password, submitClicked } = this.state;
        if (!submitClicked) {
            this.setState({
                submitClicked: true
            })
        }
        if (email && password) {
            this.setState({
                logginIn: true
            })
            axios({
                method: "POST",
                url: "http://192.168.8.105:3030/login",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    email,
                    password
                }
            })
                .then(response => {
                    console.log("Login Up Response", response.data);
                    this.setState({
                        logginIn: false
                    })
                    if (response.data._id) {
                        this.props.navigation.navigate('Home')
                    }else{
                        this.setState({
                            logInFailed: true
                        })
                    }
                })
                .catch(error => {
                    this.setState({
                        logginIn: false
                    })
                    console.log("Login Up error", error);
                });
        }
    }
    render() {
        const { submitClicked, logginIn, logInFailed } = this.state;
        return (
            logginIn ?
                <View>
                    <Header navigation={this.props.navigation} />
                    <View style={styles.activityContainer}>
                        <ActivityIndicator animating={logginIn} size={80} hidesWhenStopped color={"#d70f64"} />
                    </View>
                </View>
                :
                <ScrollView>
                    <Header navigation={this.props.navigation} />
                    <View>
                        <View style={styles.formContainer}>
                            <Headline>Log In</Headline>
                            {logInFailed && submitClicked && <HelperText
                                    type="error"
                                    visible={submitClicked && logInFailed}
                                    style={{ fontSize: 14 }}
                                >
                                    Email/Password is Incorrect
                            </HelperText>}
                            <TextInput
                                label='Email'
                                value={this.state.email}
                                onChangeText={text => this.handleChange(text, "email")}
                                mode="outlined"
                                blurOnSubmit={true}
                                keyboardType="email-address"
                            />
                            {submitClicked && !this.state.email && <HelperText
                                type="error"
                                visible={submitClicked && !this.state.email}
                            >
                                Please Enter Your Email
                            </HelperText>}
                            <TextInput
                                label='Password'
                                value={this.state.password}
                                onChangeText={text => this.handleChange(text, "password")}
                                mode="outlined"
                                blurOnSubmit={true}
                                secureTextEntry={true}
                            />
                            {submitClicked && !this.state.password && <HelperText
                                type="error"
                                visible={submitClicked && !this.state.password}
                            >
                                Please Enter Your Password
                            </HelperText>}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Create An Account')}>
                                <Text style={{ color: '#d70f64', marginTop: 10 }}>
                                    New User? Create An Account
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signUpButtonContainer}>
                            <FlottingButton changeScreen={this.LoginUser} />
                        </View>
                    </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    activityContainer: {
        marginTop: "50%"
    },
    formContainer: {
        marginTop: 30,
        padding: 20,
    },
    signUpButtonContainer: {
        marginTop: 80,
        display: 'flex',
        alignItems: 'flex-end',
    },
    fab: {
        backgroundColor: "#d70f64",
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
