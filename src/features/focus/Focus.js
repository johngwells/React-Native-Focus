import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacingSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title='+'
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: spacingSizes.sm,
    justifyContent: 'center'
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fontSizes.lg
  },
  inputContainer: {
    paddingTop: spacingSizes.sm,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    flex: 1, 
    marginRight: 10,
  }
});
