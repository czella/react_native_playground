/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './navigator/AppNavigator';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

// const initialState = {
//   action: "",
//   position: {latitude: 0, longitude: 0},
//   error: null,
//   progress: 0
// };
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_POSITION":
//       return {...state, position: action.position};
//     case "SET_ERROR":
//       return {...state, error: action.error};
//     case "SET_PROGRESS":
//       return {...state, progress: action.progress};
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

const App: () => React$Node = () => {
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Map />
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};


export default App;
