import * as React from 'react';

import { View } from 'react-native';
import { Box, TextInput } from '../../src/components';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box padding="xs" width="100%" align="center" direction="row">
        <TextInput label="Olá mundo" placeholder="Olá mundo" secureTextEntry />
      </Box>
    </View>
  );
}
