import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator />
    </ApplicationProvider>
  );
};

export default App;
