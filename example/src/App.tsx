import * as React from 'react';

import { Box, TextInput } from '../../src/components';

export default function App() {
  return (
    <Box justify="center" align="center" flex={1}>
      <Box padding="md" width="100%" align="center" direction="row">
        <TextInput
          label="Olá mundo"
          // error="Informe um e-mail válido"
          placeholder="Olá mundo"
          // secureTextEntry
          autoCapitalize="none"
        />
      </Box>
    </Box>
  );
}
