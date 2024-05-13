import React, { useState } from 'react';
import { Box, Button, Input, Text } from '../../atoms';
import type { MLTextInputProps } from './interfaces';

export default function MLTextInput({
  label,
  background,
  rounded,
  ...props
}: MLTextInputProps) {
  const [isPassword, setIsPassword] = useState(props.secureTextEntry ?? false);

  return (
    <Box rounded={20} padding={10} width={'100%'}>
      {label && <Text weight={'bold'}>{label}</Text>}

      <Box
        rounded={rounded ?? 'md'}
        padding={'10px 25px 10px 15px'}
        width={'100%'}
        align="center"
        direction="row"
        background={background ?? 'whitesmoke'}
      >
        <Input
          {...props}
          flex={1}
          height={35}
          padding={'10px 10px'}
          background="transparent"
          secureTextEntry={isPassword}
        />
        {props.secureTextEntry && (
          <Button
            onPress={() => {
              setIsPassword(!isPassword);
            }}
          >
            <Text>oláaa</Text>
          </Button>
        )}
      </Box>
    </Box>
  );
}
