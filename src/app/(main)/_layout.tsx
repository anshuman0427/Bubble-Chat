import { Stack } from 'expo-router';
import React from 'react';

const MainStack = () => {
  return (
    <Stack>
        <Stack.Screen name="index" />
    </Stack>
  )
}

export default MainStack