import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import { Text } from 'react-native';

const FocusedStatusBar = ({ props }) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : <Text>Hello</Text>;
};

export default FocusedStatusBar