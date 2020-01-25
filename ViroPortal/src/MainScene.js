import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image, Text } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
/*import { VIROAPIKEY } from 'react-native-dotenv';*/

import PlayScene from './PlayScene';


var sharedProps = {
    apiKey:"A210D682-8A4F-4919-99D8-C70369200CA4",
  }

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    overlay: {
        flex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const states = {
    MENU: 'MENU',
    PLAY: 'PLAY',
};

class MainScene extends Component {
    state = {
        sharedProps : sharedProps,
        appState: states.MENU,
    };

    handleSetAppState = appState => () => this.setState({ appState });

    renderARPortal = scene => <ViroARSceneNavigator {...this.state.sharedProps} initialScene={{ scene }} />;

    renderMenu = () => (
        <View style={styles.overlay}>
            <TouchableHighlight onPress={this.handleSetAppState(states.PLAY)}>
                <View style={styles.playButton}>
                    <Image
                        source={require('./assets/target.jpg')}
                        style={{ width: 300, height: 300 }}
                    />
                    <Text style={{ fontSize: 30 }}>PLAY</Text>
                </View>
            </TouchableHighlight>
        </View>
    );

    renderPlay = () => this.renderARPortal(PlayScene);

    renderAppState = () => {
        const { appState } = this.state;

        switch (appState) {
            case states.MENU:
                return this.renderMenu();
            case states.PLAY:
                return this.renderPlay();
            default:
                return null;
        }
    };

    render() {
        return <View style={styles.root}>{this.renderAppState()}</View>;
    }
}

export default MainScene;


///////////////////////////////////////////////////////////////////////////////


import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
//import { VIROAPIKEY } from 'react-native-dotenv';

import PlayScene from './src/PlayScene';


var sharedProps = {
    apiKey:"A210D682-8A4F-4919-99D8-C70369200CA4",
  }

state = {
    sharedProps : sharedProps,
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const App = () => (
    <View style={styles.root}>
        <ViroARSceneNavigator
            apiKey= {...this.state.sharedProps} //{VIROAPIKEY}
            initialScene={{ scene: PlayScene }}
        />
    </View>
);

export default App;