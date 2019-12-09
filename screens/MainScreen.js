import React, {useEffect} from 'react';
import SvgPlayground from '../component/SvgPlayground';
import Geolocation from "@react-native-community/geolocation";
import {connect} from "react-redux";
import {setProgress, setError, setPosition, setBigProgress} from '../store/actions/index'

const mapStateToProps = state => {
  return {
    progress: state.cachedReducer.progress,
    bigProgress: state.nonCachedReducer.bigProgress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosition: (position) => dispatch(setPosition(position)),
    setError: (error) => dispatch(setError(error)),
    setProgress: progress => dispatch(setProgress(progress)),
    setBigProgress: bigProgress => dispatch(setBigProgress(bigProgress))
  }
};

const MainScreen = (props) => {
  const {
    setPosition,
    setError,
    setProgress,
    progress,
    setBigProgress,
    bigProgress
  } = props;
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        console.log(position, 'from get cords-------------------');
        setError(null);
      },
      error => setError(error.message),
      {enableHighAccuracy: true, timeout: 200000},
    );
  }, []);
  return (
    <SvgPlayground progress={progress} setProgress={setProgress} bigProgress={bigProgress} setBigProgress={setBigProgress}/>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
