import React from 'react';
import styled from 'styled-components';
import MapView from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Map = () => {

  return (
    <Container>
      <Text>This is my map</Text>
      <MapContainer>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </MapContainer>
    </Container>
  );
};

const Container = styled.View``;
const MapContainer = styled.View`
  height: ${height};
  width: 100%;
`;
const Text = styled.Text`
  position: absolute;
  top: 20px;
  left: 10px;
  color: red;
  z-index: 100;
`;

export default Map;
