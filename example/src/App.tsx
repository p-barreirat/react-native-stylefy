import * as React from 'react';

import { Box, Safe, TextInput } from '../../src/components';

export default function App() {
  return (
    <Safe flex={1}>
      <Box justify="center" align="center" flex={1}>
        <Box padding="md" width="100%" align="center">
          <TextInput
            label="Informe seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="seuemail@provedor.com"
          />

          <Box padding={'sm'} />

          <TextInput
            label="Senha"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Informe sua senha"
            // error="Informe um e-mail válido"
          />

          <Box padding={'sm'} />
        </Box>
      </Box>
    </Safe>
  );
}
