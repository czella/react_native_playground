import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Svg, Circle, G} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

const DIAMETER = 50;
const STROKE_WIDTH = 6;
const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = Math.PI * RADIUS * 2;

const SvgPlayground = (props) => {
  const {
    setProgress,
    progress,
    bigProgress,
    setBigProgress
  } = props;
  // const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState(Math.max(1 - progress / 10, 0));
  const [bigPosition, setBigPosition] = useState(Math.max(1 - bigProgress / 10, 0));
  const [isDone, setIsDone] = useState(false);
  const [color, setColor] = useState('tomato');
  const [rotation, setRotation] = useState('rotate(-90.1 30 30)');
  useEffect(() => {
    console.log('in useEffect-----------', progress);
    setPosition(Math.max(1 - progress / 10, 0));
    setBigPosition(Math.max(1 - bigProgress / 10, 0));
    console.log(position, 'pos----');
    if (progress >= 5) {
      setColor('orange');
      // setRotation('rotate(-270.1 30 30)');
      // setProgress(0);
      // setPosition(Math.max(1 - progress / 10, 0));
    }
    if (progress >= 10) {
      setColor('green');
    }
    if (progress === 0) {
      setColor('tomato');
    }
    console.log(progress);

  }, [progress]);

  const handleReset = () => {
    setProgress(0);
    setPosition(Math.max(1 - progress, 0));
    setBigProgress(0);
    setBigPosition(Math.max(1 - bigProgress, 0));
    // setRotation('rotate(-90.1 30 30)');
  };

  const handleProgress = () => {
    setProgress(progress + 1);
    setBigProgress(bigProgress + 1);
  };

  return (
    <Container>
      <SvgContainer>
        <Svg height="350" width="350">
          <G transform={rotation}>
            <Circle
              cx={-160}
              cy={160}
              r={RADIUS}
              stroke={color}
              fill="none"
              strokeWidth={STROKE_WIDTH}
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: CIRCUMFERENCE * position,
              }}
            />
            <Circle
              cx={-160}
              cy={160}
              r={RADIUS - STROKE_WIDTH / 2}
              stroke={color}
              fill="none"
            />
            <Circle
              cx={-160}
              cy={160}
              r={RADIUS + STROKE_WIDTH / 2}
              stroke={color}
              fill="none"
            />
          </G>
          <G>
            <Circle cx="150" cy="150" r="147.5" stroke="black" stroke-width="5" fill="none"/>
            <Circle cx="150" cy="150" r="117.5" stroke="black" stroke-width="5" fill="none"/>
            <Circle cx="150" cy="150" r="132.5" stroke="black" strokeWidth={30} fill="none" style={{
              strokeDasharray: Math.PI * 2 * 134.5,
              strokeDashoffset: Math.PI * 2 * 134.5 * bigPosition,
            }}/>
          </G>
        </Svg>
      </SvgContainer>
      <TouchableOpacity onPress={handleProgress}>
        <Button>Press me</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <Button>Reset</Button>
      </TouchableOpacity>
      {console.log(bigPosition, 'bigpos...................')}
    </Container>
  );
};

const Container = styled.View``;

const SvgContainer = styled.View`
  padding: 20px;
`;

const Text = styled.Text``;

const PathContainer = styled.View`
  position: absolute;
  top: 650px;
  left: 650px;
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

export default SvgPlayground;
