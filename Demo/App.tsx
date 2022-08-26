import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, View, } from 'react-native';
import AppRoutes from './src/routes';
import GlobalStyles from './src/theme/GlobalStyles';

const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <AppRoutes />
    </View>
  );
};
export default App;
