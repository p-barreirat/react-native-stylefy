import * as React from 'react';

import { View } from 'react-native';
import { Text } from '../../src/components';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text type="title">Olá</Text>
    </View>
  );
}
