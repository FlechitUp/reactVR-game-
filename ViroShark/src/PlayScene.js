import React from 'react';

import {
    ViroARScene,
    Viro3DObject,
    ViroAmbientLight
} from 'react-viro';

const MarmelabLogo = () => (
    <Viro3DObject
        source={require('./assets/Shark.obj')}
        resources={[require('./assets/Shark.mtl')]}
        highAccuracyEvents={true}
        position={[0, 0, -1]} // we place the object in front of us (z = -1)
        scale={[0.05, 0.05, 0.05]} // we reduce the size of our Marmelab logo object
        type="OBJ"
    />
);

const PlayScene = () => (
    <ViroARScene displayPointCloud>
        <ViroAmbientLight color="#fff" />
        <MarmelabLogo />
    </ViroARScene>
);

export default PlayScene;