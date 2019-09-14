import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

var ACTION_TIMER = 800;

export default class EmergencyButton extends React.Component {
  state = {
    pressAction: new Animated.Value(0),
    textComplete: '',
    buttonWidth: 50,
    buttonHeight: 50,
    borderRadius: 50,
  };

  componentWillMount() {
    this._value = 0;
    this.state.pressAction.addListener(v => (this._value = v.value));
  }
  handlePressIn = () => {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(this.animationActionComplete);
  };
  handlePressOut = () => {
    Animated.timing(this.state.pressAction, {
      duration: this._value * ACTION_TIMER,
      toValue: 0,
    }).start();
  };
  animationActionComplete = () => {
    if (this._value === 1) {
      Alert.alert('Are you sure you want to make an emergency call?');
    }
  };
  getButtonWidthLayout = e => {
    this.setState({
      buttonWidth: e.nativeEvent.layout.width - 6,
      buttonHeight: e.nativeEvent.layout.height - 6,
    });
  };
  getProgressStyles = () => {
    var width = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonWidth * 6],
    });
    var height = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonHeight * 6],
    });
    var radius = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.borderRadius * 6],
    });
    return {
      width: width,
      height: height,
      borderRadius: radius,
    };
  };
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
          <View style={styles.button} onLayout={this.getButtonWidthLayout}>
            <Animated.View style={[styles.bgFill, this.getProgressStyles()]} />
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text>{this.state.textComplete}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDB4BD',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111',
  },
  bgFill: {
    backgroundColor: '#EDB4BD',
    borderRadius: 50,
    position: 'absolute',
  },
});

// import React from 'react';
// import { TouchableOpacity, StyleSheet } from 'react-native';
// export default class EmergencyButton extends React.Component {
//   render() {
//     return (
//       <>
//         <TouchableOpacity style={[styles.emergencyButtonWrapper, this.props.style]} />
//       </>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   emergencyButtonWrapper: {
//     height: 75,
//     width: 75,
//     borderRadius: 50,
//     backgroundColor: '#EDB4BD',
//   },
// });
