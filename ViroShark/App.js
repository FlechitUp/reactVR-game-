/// Shark obj
///Only files: App.js and PlayScene.js

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
            {...this.state.sharedProps} //{VIROAPIKEY}
            initialScene={{ scene: PlayScene }}
        />
    </View>
);

export default App;