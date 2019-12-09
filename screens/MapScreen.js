import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Map from '../component/Map';
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {position: state.nonCachedReducer.position}
};

const MapScreen = (props) => {
  const {
    position
  } = props;
  return (
    <Container>
      <Map position={position}/>
    </Container>
  );
};

const Container = styled.View``;

export default connect(mapStateToProps, null)(MapScreen);
