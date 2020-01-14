import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class MenuTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { menuName, menuDesc, menuCatogery, menuMainPic, onMenuPress, menuPrice } = this.props;
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Card style={styles.card} onPress={onMenuPress}>
                        <Card.Cover source={menuMainPic} />
                        <Card.Title title={menuName} />
                        <View style={{ paddingLeft: 18 }}>
                            <Title>Rs. {menuPrice}</Title>
                            <Paragraph>{menuCatogery}</Paragraph>
                        </View>
                        <Card.Content>
                            {/* <Paragraph>{menuCatogery}</Paragraph> */}
                            <Paragraph>{menuDesc}</Paragraph>
                        </Card.Content>
                        {<Card.Actions style={{ justifyContent: 'flex-end' }}>
                            <TouchableOpacity><Button onPress={onMenuPress}>Add To Cart</Button></TouchableOpacity>
                        </Card.Actions>}
                    </Card>
                </View>
            </TouchableOpacity>
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
