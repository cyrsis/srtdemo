import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

export default class MainScreen extends Component {
    static navigationOptions = {
        title: 'Chart 1',
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0)'}}>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 60},
                                {translateY: -210},
                                {rotateZ: '-75deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Fall of Consciousness
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 80},
                                {translateY: -160},
                                {rotateZ: '-65deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Fine Tuning
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 130},
                                {translateY: -170},
                                {rotateZ: '-55deg'},
                            ],
                            position: 'absolute',
                            zIndex: 1,
                        },
                    ]}>
                    Higher Level Blocks
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 175},
                                {translateY: -160},
                                {rotateZ: '-45deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    How to Change Your Life
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 210},
                                {translateY: -120},
                                {rotateZ: '-30deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Refining Consciousness
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 250},
                                {translateY: -90},
                                {rotateZ: '-20deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Final Items this ONE Universe
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 220},
                                {translateY: -30},
                                {rotateZ: '-10deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    New ONE Universe
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 260},
                                {translateY: 10},
                                {rotateZ: '0deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Spiritual Realms Programs
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 250},
                                {translateY: 70},
                                {rotateZ: '15deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Rebirth Conscious Mind
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 200},
                                {translateY: 110},
                                {rotateZ: '30deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Final Assurance
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 175},
                                {translateY: 150},
                                {rotateZ: '45deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    FreedomisFree
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 135},
                                {translateY: 180},
                                {rotateZ: '60deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Learning is Fun
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 90},
                                {translateY: 190},
                                {rotateZ: '70deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Final Blessing
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 60},
                                {translateY: 210},
                                {rotateZ: '80deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Final Forgiveness
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 10},
                                {translateY: 200},
                                {rotateZ: '90deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Final Blessing
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -25},
                                {translateY: 190},
                                {rotateZ: '100deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Final Light
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -70},
                                {translateY: 210},
                                {rotateZ: '110deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Memory Clearing
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -95},
                                {translateY: 175},
                                {rotateZ: '120deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Check List
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -140},
                                {translateY: 170},
                                {rotateZ: '130deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Contact or Help
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -240},
                                {translateY: 200},
                                {rotateZ: '140deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Themes & Challenges, Soul Qualities
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -250},
                                {translateY: 140},
                                {rotateZ: '150deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Levels of Soul Consciousness
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -310},
                                {translateY: 100},
                                {rotateZ: '160deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Programs, When, & Cast of Characters
                </Text>
                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -340},
                                {translateY: 40},
                                {rotateZ: '-10deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Negative Motivations, {"\n"} Blocks & Interference
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -340},
                                {translateY: -20},
                                {rotateZ: '0deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Master Programs, Discordant Energy
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -300},
                                {translateY: -90},
                                {rotateZ: '15deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Blocks to Positive Expression
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -340},
                                {translateY: -180},
                                {rotateZ: '30deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Direct Healing {"\n"} Processes & Colors
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -250},
                                {translateY: -200},
                                {rotateZ: '40deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Inner Archetypes
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -210},
                                {translateY: -240},
                                {rotateZ: '50deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Other Archetypes, {"\n"}
                    Preprogrammed Before Creation
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -170},
                                {translateY: -260},
                                {rotateZ: '60deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Minerals and Vitamins
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -120},
                                {translateY: -260},
                                {rotateZ: '70deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Food or Diet, Health and Well-Being
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -80},
                                {translateY: -240},
                                {rotateZ: '80deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Miscellaneous Blocks
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: -20},
                                {translateY: -260},
                                {rotateZ: '90deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Programs Created by SPIRIT
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 10},
                                {translateY: -260},
                                {rotateZ: '95deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Soul Energy Programming
                </Text>

                <Text
                    onPress={this._handlePress}
                    style={[
                        styles.paragraph,
                        {
                            transform: [
                                {translateX: 30},
                                {translateY: -260},
                                {rotateZ: '105deg'},
                            ],
                            position: 'absolute',
                            zIndex: 2,
                        },
                    ]}>
                    Spirit Energy Programming
                </Text>




                <Image
                    source={{uri: 'https://i.imgur.com/NPyjpQO.png'}}
                    style={{height: 700, width: 700}}
                />

            </View>

        );
    }
    _handlePress = () => {
        // this.props.navigation.navigate('Home');
         this.props.navigation.navigate('ChartTwo')
        // console.warn("Something happen")

    };
}
const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});


