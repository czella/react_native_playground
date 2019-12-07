import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Svg, Circle, G} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

const DIAMETER = 50;
const STROKE_WIDTH = 6;
const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = Math.PI * RADIUS * 2;

const SvgPlayground = () => {
  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState(Math.max(1 - progress / 10, 0));
  const [isDone, setIsDone] = useState(false);
  const [color, setColor] = useState('tomato');
  const [rotation, setRotation] = useState('rotate(-90.1 30 30)');
  useEffect(() => {
    console.log('in useEffect');
    setPosition(Math.max(1 - progress / 10, 0));
    console.log(position);
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
    setRotation('rotate(-90.1 30 30)');
  };
  return (
    <Container>
      <SvgContainer>
        <Svg height="300" width="300">
          <G transform={rotation}>
            <Circle
              cx={30}
              cy={30}
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
              cx={30}
              cy={30}
              r={RADIUS - STROKE_WIDTH / 2}
              stroke={color}
              fill="none"
            />
            <Circle
              cx={30}
              cy={30}
              r={RADIUS + STROKE_WIDTH / 2}
              stroke={color}
              fill="none"
            />
          </G>
        </Svg>
      </SvgContainer>
      <TouchableOpacity onPress={() => setProgress(progress + 1)}>
        <Button>Press me</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <Button>Reset</Button>
      </TouchableOpacity>
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
