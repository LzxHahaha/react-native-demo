import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  state = {
    value: '',
    display: ''
  };

  onChangeText = value => this.setState({ value });
  onSubmit = () => this.setState({ display: this.state.value, value: '' });

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.value}
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
