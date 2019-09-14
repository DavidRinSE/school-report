import React from 'react';
import Admin from './screens/admin/Admin.js';
import StudentLogin from './screens/student/login.js';
import Report from './screens/report/Report'
import End from './screens/student/end.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }

  render() {
    return this.state.isAdmin ? <Admin /> : <StudentLogin />;
  }
}
