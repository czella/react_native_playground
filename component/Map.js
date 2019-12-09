import React, { useState} from 'react';
import styled from 'styled-components';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {height} = Dimensions.get('window');

const Map = (props) => {
  const {
    position,
  } = props;
  const [destination, setDestination] = useState({
    latitude: 47.505864,
    longitude: 19.060651,
  });
  const changeDestination = () => {
    if (destination.longitude === 19.058258) {
      setDestination({latitude: 47.505864, longitude: 19.060651});
    } else {
      setDestination({latitude: 48.508661, longitude: 19.058258});
    }
  };
  return (
    <Container>
      <ButtonContainer>
        <TouchableOpacity onPress={changeDestination}>
          <Button>Press me</Button>
        </TouchableOpacity>
      </ButtonContainer>
      <MapContainer>
        <MapView
          initialRegion={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={StyleSheet.absoluteFillObject}>
          <Marker
            coordinate={position}
            title="My position"
            description="This is my position"
            image={require('../assets/edited.png')}

          />
          <MapView.Polyline
            coordinates={[position, destination]}
            strokeWidth={4}
          />
        </MapView>
        {console.log(position, '------------------pos----------------------')}
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

const ButtonContainer = styled.View`
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 100;
`;

const Button = styled.Text`
  padding-top: 15px;
  margin: 10px;
  height: 50px;
  width: 150px;
  color: white;
  border-radius: 5px;
  background-color: blue;
  text-align: center;
`;


export default Map;
