import * as React from 'react';
import { Appbar } from 'react-native-paper';
import SearchBar from "../SearchBar/SearchBar";
import { View, StyleSheet } from "react-native";


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUserSearching: false
        }
    }
    _goBack = () => {
        this.props.changeScreen && this.props.goBackScreen && this.props.changeScreen(this.props.goBackScreen)
    }

    onMenuIconPress = () => {
        this.props.navigation && this.props.navigation.openDrawer();
    }

    onSearchIconPress = () => {
        this.setState({ isUserSearching: true });
    }
    onBackIconPress = () => {
        this.setState({ isUserSearching: false });
    }
    _handleMore = () => console.log('Shown more');

    render() {
        const { isUserSearching } = this.state;
        return (
            isUserSearching ?
                <SearchBar onBackIconPress={this.onBackIconPress} /> :
                (
                    <View>
                        <Appbar.Header style={styles.header}>
                            <Appbar.Action icon="menu" onPress={this.onMenuIconPress} />
                            <Appbar.Content
                                title="Foodie"
                                subtitle="Don't cook Foodie karo"
                            />
                            <Appbar.Action icon="magnify" onPress={this.onSearchIconPress} />
                            <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
                        </Appbar.Header>
                    </View>
                )
        );
    }
}

const styles = StyleSheet.create({
    header: {

    }
});