import * as React from 'react';

import { View } from 'react-native';
import { Box } from '../../src/components';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box width="100%" align="center" direction="row"></Box>
    </View>
  );
}
