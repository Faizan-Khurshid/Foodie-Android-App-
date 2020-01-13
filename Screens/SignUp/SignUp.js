import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from "../../Components/Header/Header";
import { TextInput, Headline, FAB, HelperText } from 'react-native-paper';
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
            submitClicked: false
        }
    }
    handleChange = (text, field) => {
        this.setState({
            [field]: text
        })
    }
    signUpUser = () => {
        const { firstName, lastName, email, password, contactNo, submitClicked } = this.state;
        if (!submitClicked) {
            this.setState({
                submitClicked: true
            })
        }
        if (firstName && lastName && email && password && contactNo) {
            this.props.navigation.navigate('Dashboard')
            axios({
                method: "post",
                url: "http://localhost:3030/signup/",
                headers: {
                    // "api-token": ApiInfo.APITOKEN,
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Accept': 'application/json'
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
                    console.log("Sign Up Response", response);
                    if(response.data._id){
                        console.log("user signed in")
                        this.props.navigation.navigate('Dashboard')
                    }
                })
                .catch(error => {
                    console.log("Sign Up error", error);
                });
        }
    }
    render() {
        const { submitClicked } = this.state;
        return (
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
                    </View>
                    <HelperText
                            type="error"
                            visible={true}
                        >
                            Already a memeber? Log In
                    </HelperText>
                    <View style={styles.signUpButtonContainer}>
                        <FlottingButton changeScreen={this.signUpUser} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
