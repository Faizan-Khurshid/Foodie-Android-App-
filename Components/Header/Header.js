import * as React from 'react';
import { Appbar } from 'react-native-paper';
import SearchBar from "../SearchBar/SearchBar";
import { StyleSheet } from "react-native";

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUserSearching: false
        }
    }
    _goBack = () => console.log('Went back');

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
                (<Appbar.Header style={styles.header}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Foodie"
                        subtitle="Don't cook Foodie karo"
                    />
                    <Appbar.Action icon="magnify" onPress={this.onSearchIconPress} />
                    <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
                </Appbar.Header>)
        );
    }
}

const styles = StyleSheet.create({
    header: {
      
    }
  });