import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from "react-native";

export default class SearchBar extends React.Component {
    state = {
        firstQuery: '',
    };

    render() {
        const { firstQuery } = this.state;
        return (
            <View style={styles.container}>
                <Searchbar
                    style={{height: 55}}
                    placeholder="Search Your Favourite Restaurant"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
                    clearIcon={true}
                    icon={"arrow-left"}
                    onIconPress={this.props.onBackIconPress}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 33
    }
});
