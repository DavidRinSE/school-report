import React from 'react';
import Admin from './screens/admin/Admin.js';
import StudentLogin from './screens/student/login.js';
import Report from './screens/report/Report'
import End from './screens/student/end.js';
import Login from './screens/student/login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/student/login';
import FormScreen from './screens/student/form';
import EndScreen from './screens/student/end';

const MainNavigator = createStackNavigator({
  Home: { screen: LoginScreen },
  Form: { screen: FormScreen },
  End: { screen: EndScreen },
});
const App = createAppContainer(MainNavigator);
export default App;
