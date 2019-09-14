import React from 'react';
import {Admin} from "./screens/admin";
import {Student} from "./screens/student";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }

  // async componentDidMount() {
    
  // }

  render() {
    // if (!this.state.isReady) {
    //   return <AppLoading />;
    // }

    return ((this.state.isAdmin) ? <Admin /> : <Student />);
  }
}