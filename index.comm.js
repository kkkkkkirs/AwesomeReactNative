/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Animated
} from 'react-native';

export class HelloApp extends Component {
    constructor(props){
        super(props);
        this.state={
            opacity:new Animated.Value(0)
        };

    }
    
    render() {
        return (
            <Animated.View style={{ flex: 1,
                                    marginTop: 50,opacity:this.state.opacity}}>
                <View style={styles.topContent}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.mytextstyle}>HelloReactNative</Text>
                    </TouchableOpacity>
                    <TouchableHighlight onPress={() => console.log('pressed')}>
                        <Text>Proper Touch Handling</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.content}>
                    <View style={{flexDirection:'row',height:200,backgroundColor:'#FF0000'}}>
                        <View style={{flex:1,backgroundColor:'#890'}}></View>
                        <View style={{flex:1,backgroundColor:'#00F'}}></View>
                    </View>
                </View>

            </Animated.View>
        );
    }

    componentDidMount(){

        Animated.timing(this.state.opacity,{
            toValue:1,
            duration:2000
        }

        ).start(()=>{
            console.log('动画执行结束!')
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        opacity:0
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    mytextstyle: {

        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#b3b3b3'
    },

    topContent: {
        alignItems: "center",
        justifyContent: 'center',
    },
    content: {
        flex: 1
    }
});

module.exports = HelloApp;

