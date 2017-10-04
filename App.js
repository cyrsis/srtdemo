import React from 'react';
import { StyleSheet, Text, View, Image , Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from  './Screen/MainScreen'



class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: MainScreen},
    Chat: {screen: ChatScreen},
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
