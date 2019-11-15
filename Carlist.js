import React, { Component } from 'react';
import {View, StyleSheet, FlatList, Text} from "react-native";
import {CARItem} from "./Caritem";

export class CARList extends Component {

   render() {
       return (
           <View style={styles.container}>
               <FlatList
                   data={this.props.list}
                   renderItem={({item}) => <CARItem car={item.key} onPressDelete={this.props.onPressDelete}/>}
               />
           </View>
       );
   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        margin: 4,
        fontSize: 18,
        height: 44,
    },
});
