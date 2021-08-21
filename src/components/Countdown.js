import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacingSizes } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;

export const Countdown = ({
  minutes = 20,
  isPaused,
}) => {
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if(time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      // report progress
      return timeLeft;
    });
  }

  useEffect(() => {
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current)
  }, [])

  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.text,
    padding: spacingSizes.lg,
    backgroundColor: 'rgba(217, 152, 79, 0.3)'
  }
})