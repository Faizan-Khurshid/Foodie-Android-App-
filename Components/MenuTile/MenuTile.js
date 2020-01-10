import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class MenuTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { menuName, menuDesc, menuCatogery, menuMainPic, onMenuPress } = this.props;
        return (
            <View style={styles.container}>
                <Card style={styles.card} onPress={onMenuPress}>
                    <Card.Cover source={menuMainPic} />
                    <Card.Title title={menuName} subtitle={menuCatogery} />
                    <Card.Content>
                        <Paragraph>{menuCatogery}</Paragraph>
                        <Paragraph>{menuDesc}</Paragraph>
                    </Card.Content>
                    {/* <Card.Actions style={{ justifyContent: 'flex-end' }}>
                        <Button onPress={onRestaurantPress}>View</Button>
                    </Card.Actions> */}
                </Card>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 30,
    },
    card: {
        zIndex: 100
    }
});
