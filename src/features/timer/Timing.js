import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={StyleSheet.timingButton}>
        <RoundedButton size={75} title='1' onPress={() => onChangeTime(1)} />
      </View>
      <View style={StyleSheet.timingButton}>
        <RoundedButton size={75} title='5' onPress={() => onChangeTime(5)} />
      </View>
      <View style={StyleSheet.timingButton}>
        <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
});
