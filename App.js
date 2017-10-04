import React from 'react';
import { StyleSheet, Text, View, Image , Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from  './Screen/MainScreen'
import ChartTwo from './Screen/ChartTwo'
import ChartSixB from './Screen/ChartSixB'




const SimpleApp = StackNavigator({
    Home: {screen: MainScreen},
    ChartTwo: {screen: ChartTwo},
    ChartSixB: {screen: ChartSixB}
});
export default class App extends React.Component {
    render() {
        return (
            <SimpleApp/>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
