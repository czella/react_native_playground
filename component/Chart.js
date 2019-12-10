import React, {useState} from 'react';
import styled from 'styled-components';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import {
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width - 20;

const Chart = () => {

  const [line, setLine] = useState({
    id: 1,
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 100, 43],
        strokeWidth: 2, // optional
      },
    ],
  });

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const pieData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const changeLine = () => {
    if (line.id === 1) {
      setLine({
        id: 2,
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [30, 15, 42, 74, 108, 49],
            strokeWidth: 2, // optional
          },
        ],
      });
    } else {
      setLine({
        id: 1,
        labels: ['December', 'January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            data: [20, 45, 28, 80, 100, 43],
            strokeWidth: 2, // optional
          },
        ],
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        padding: 10,
        height: '100%',
      }}>
      <ScrollView style={{height: '100%'}}>
        <Text>Bezier Line Chart</Text>
        <TouchableOpacity onPress={changeLine}>
          <Button>Change Line</Button>
        </TouchableOpacity>
        <LineChart
          data={line}
          width={width} // from react-native
          height={250}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text>Bar Chart d</Text>
        <BarChart
          // style={graphStyle}
          data={barData}
          width={width}
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <PieChart
          data={pieData}
          width={width}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="0"
          absolute
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Container = styled.View`
  padding: 10px;
`;

const Text = styled.Text``;

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

export default Chart;
