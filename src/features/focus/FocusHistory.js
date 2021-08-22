import React from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacingSizes } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';

const HistoryItem = ({ item }) => {
  // objects are not a valid react child so used stringify JSON.stringify(item)
  // after in the console I see the data & renamed to item.subject | item.status
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5 }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
          </>
        )}
      </SafeAreaView>
      <View style={styles.clearContainer}>
        <RoundedButton size={75} title='Clear' onPress={() => onClear()} />
      </View>
    </>
  );
};

// the function needs to return an object so wrapped in ()
const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? '#d5d94f' : '#4fd998',
    fontSize: fontSizes.md
  }),
  title: {
    padding: spacingSizes.xxl,
    color: '#4f90d9',
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
  clearContainer: {
    padding: spacingSizes.md,
    alignItems: 'center'
  }
});
