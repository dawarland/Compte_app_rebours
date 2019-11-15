import React, { Component } from 'react';
import {Text, View, ProgressViewIOS, StyleSheet} from "react-native";
import {Button} from "react-native-web";

export class CARItem extends Component {
    calculateBar(){
        var diffToday = Math.abs(Date.now() - this.props.car.datestart.getTime());
        var diffEnd = Math.abs(this.props.car.dateend.getTime() - this.props.car.datestart.getTime());
        return ( diffToday/diffEnd );
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.car.name} ({this.props.car.dateend.toLocaleDateString('fr-FR', {
                    year: 'numeric', month: 'numeric', day: 'numeric'
                })})
                </Text>
                <ProgressViewIOS styleAttr="Horizontal" progress={this.calculateBar()} />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20,
    },
    buttonContainer: {
        margin:2
    }
});
