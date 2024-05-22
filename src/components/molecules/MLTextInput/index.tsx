import React, { useState } from 'react';
import { Button } from '..';
import { Eye, EyeClosed } from '../../../assets/svg';
import { Box, Input, Text } from '../../atoms';
import type { MLTextInputProps } from './interfaces';

export default function MLTextInput({
  label,
  background,
  rounded,
  error,
  ...props
}: MLTextInputProps) {
  const [isPassword, setIsPassword] = useState(props.secureTextEntry ?? false);

  return (
    <Box rounded={20} width={'100%'}>
      {label && <Text weight={'bold'}>{label}</Text>}
      <Box padding={'xs'} />
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
            height={'auto'}
            onPress={() => {
              setIsPassword(!isPassword);
            }}
          >
            <Box width={25} height={25} justify="center" align="center">
              {isPassword ? (
                <EyeClosed width={25} height={25} />
              ) : (
                <Eye width={25} height={25} />
              )}
            </Box>
          </Button>
        )}
      </Box>
      <Box padding={'xs'} />
      {error && (
        <Text color="red" size={'xs'}>
          {error}
        </Text>
      )}
    </Box>
  );
}
