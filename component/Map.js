import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MapView from 'react-native-maps';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const {height} = Dimensions.get('window');

const Map = () => {
  const [position, setPosition] = useState({latitude: 0, longitude: 0});
  const [error, setError] = useState('');
  const [destination, setDestination] = useState({
    latitude: 47.505864,
    longitude: 19.060651,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        setError(null);
      },
      error => setError(error.message),
      {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000},
    );
  }, []);
  const changeDestination = () => {
    if (destination.longitude === 19.058258) {
      setDestination({latitude: 47.505864, longitude: 19.060651});
    } else {
      setDestination({latitude: 47.508661, longitude: 19.058258});
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
          <MapView.Marker
            coordinate={position}
            title="My position"
            description="This is my position"
          />
          <MapView.Polyline
            coordinates={[position, destination]}
            strokeWidth={4}
          />
        </MapView>
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
