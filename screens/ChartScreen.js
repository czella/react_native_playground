import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Chart from '../component/Chart';
import {Dimensions} from 'react-native';

const MapScreen = () => {
  // const height = Dimensions.get('window').height - 50;
  const [height, setHeight] = useState(Dimensions.get('window').height - 50);
  Dimensions.addEventListener('change', obj => {
    console.log(obj, 'dimensionObj');
    setHeight(Dimensions.get('window').height - 50);
  });
  return (
    <Container
      style={{
        height: height,
      }}>
      <Chart />
    </Container>
  );
};

const Container = styled.View``;

export default MapScreen;
