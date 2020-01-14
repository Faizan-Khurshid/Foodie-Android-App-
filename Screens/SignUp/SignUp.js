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


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            submitClicked: false,
            // signingin: true
        }
    }
    handleChange = (text, field) => {
        if (field === "email") {
            this.setState({
                emailAlreadyExist: false
            })
        }
        this.setState({
            [field]: text
        })
    }
    signUpUser = () => {
        const { firstName, lastName, email, password, contactNo, submitClicked, emailAlreadyExist } = this.state;
        if (!submitClicked) {
            this.setState({
                submitClicked: true
            })
        }
        if (firstName && lastName && email && password && contactNo && !emailAlreadyExist) {
            this.setState({
                signingin: true
            })
            axios({
                method: "POST",
                url: "http://192.168.8.105:3030/signup",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber: contactNo
                }
            })
                .then(response => {
                    this.setState({
                        signingin: false
                    })
                    console.log("Sign Up Response", response.data);
                    if (response.data._id) {
                        this.props.navigation.navigate('Login')
                    } else if (response.data === "User Already Exist") {
                        this.setState({
                            signingin: false,
                            emailAlreadyExist: true
                        })
                    }
                })
                .catch(error => {
                    this.setState({
                        signingin: false
                    })
                    console.log("Sign Up error", error);
                });
        }
    }
    render() {
        const { submitClicked, signingin } = this.state;
        return (
            signingin ?
                <View>
                    <Header navigation={this.props.navigation} />
                    <View style={styles.activityContainer}>
                        <ActivityIndicator animating={signingin} size={80} hidesWhenStopped color={"#d70f64"}/>
                    </View>
                </View>
                :
                <ScrollView>
                    <Header navigation={this.props.navigation} />
                    <View>
                        <View style={styles.formContainer}>
                            <Headline>Create An Account</Headline>
                            <TextInput
                                label='First Name'
                                value={this.state.firstName}
                                onChangeText={text => this.handleChange(text, "firstName")}
                                mode="outlined"
                                blurOnSubmit={true}
                                keyboardType="default"
                            />
                            {submitClicked && !this.state.firstName && <HelperText
                                type="error"
                                visible={submitClicked && !this.state.firstName}
                            >
                                Please Enter Your First Name
                    </HelperText>}
                            <TextInput
                                label='Last Name'
                                value={this.state.lastName}
                                onChangeText={text => this.handleChange(text, "lastName")}
                                mode="outlined"
                                blurOnSubmit={true}
                                keyboardType="default"
                            />
                            {submitClicked && !this.state.lastName && <HelperText
                                type="error"
                                visible={submitClicked && !this.state.lastName}
                            >
                                Please Enter Your Last Name
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
                            {submitClicked && this.state.emailAlreadyExist &&
                                <HelperText
                                    type="error"
                                    visible={submitClicked && this.state.emailAlreadyExist}
                                    style={{ fontSize: 14 }}
                                >
                                    A user is already registered with this email
                            </HelperText>}
                            <TextInput
                                label='Contact No'
                                value={this.state.contactNo}
                                onChangeText={text => this.handleChange(text, "contactNo")}
                                mode="outlined"
                                blurOnSubmit={true}
                                keyboardType="number-pad"
                            />
                            {submitClicked && !this.state.contactNo && <HelperText
                                type="error"
                                visible={submitClicked && !this.state.contactNo}
                            >
                                Please Enter Your Contact No
                    </HelperText>}
                            <TextInput
                                label='Password'
                                value={this.state.password}
                                onChangeText={text => this.handleChange(text, "password")}
                                mode="outlined"
                                blurOnSubmit={true}
                                // keyboardType="visible-password"
                                secureTextEntry={true}
                            />
                            {submitClicked && !this.state.password && <HelperText
                                type="error"
                                visible={submitClicked && !this.state.password}
                            >
                                Please Enter Your Password
                    </HelperText>}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ color: '#d70f64', marginTop: 10 }}>
                                    Already A Member? Log In
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signUpButtonContainer}>
                            <FlottingButton changeScreen={this.signUpUser} />
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
