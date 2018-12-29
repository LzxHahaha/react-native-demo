import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  value = '';
  state = {
    display: ''
  };

  onChangeText = value => this.value = value;
  onSubmit = () => {
    this.setState({ display: this.value });
    this.input.clear();
    this.value = '';
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={ref => this.input = ref}
          autoFocus
          blurOnSubmit={false}
          underlineColorAndroid="#AAA"
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
