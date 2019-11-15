import React, { Component } from 'react';
import {Alert, Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import { CARList } from "./Carlist";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            textName : '',
            textStart : '',
            textEnd : '',
            listCAR: [{ key: {
                    name: '1er',
                    datestart: new Date(2019,1,1),
                    dateend: new Date(2019,11,30)
                }
            },
                { key: {
                        name: '2eme',
                        datestart: new Date(2015,1,1),
                        dateend: new Date(2020,5,30)
                    }
                }
            ]
        };

    }
    handleSubmit = () => {
        if(this.state.textName != '' && this.state.textStart != '' && this.state.textEnd != '' ){
            const newList = [...this.state.listCAR];
            const event = {key :
                    {
                        name: this.state.textName.valueOf(),
                        datestart: new Date(this.state.textStart.valueOf()),
                        dateend: new Date(this.state.textEnd.valueOf())
                    }
            };
            newList.push(event);

            this.setState({
                textName : '',
                textStart : '',
                textEnd : '',
                listCAR: newList
            });
            Alert.alert("Information", this.state.listCAR);
        }

    };
    onPressDelete = (event) => {
        const {value} = event.target;
        const newList = [...this.state.listCAR];
        newList[value] = {};
        this.setState({listCAR: newList});
    };
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Compte App Rebours</Text>
                    <CARList list={this.state.listCAR} onPressDelete={this.onPressDelete}/>
                    <View style={styles.buttonContainer}>
                        <Text>Libellé :</Text>
                        <TextInput
                            style={{height: 40}}
                            onChangeText={(textName) => this.setState({textName})}
                            value={this.state.textName}
                        />
                        <Text>Date de debut :</Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="AAAA-MM-DD"
                            onChangeText={(textStart) => this.setState({textStart})}
                            value={this.state.textStart}
                        />
                        <Text>Date de fin :</Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="AAAA-MM-DD"
                            onChangeText={(textEnd) => this.setState({textEnd})}
                            value={this.state.textEnd}
                        />
                        <Button
                            title="Ajouter"
                            onPress={this.handleSubmit}
                        />
                    </View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        margin: 20
    }
});
