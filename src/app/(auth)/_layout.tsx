import { Stack } from 'expo-router';
import React from 'react';
const AuthStack = () => {
  return (
    <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="terms"/>
        <Stack.Screen name="loginotp"/>         
        <Stack.Screen name="verify"/>
    </Stack>
  )
}

export default AuthStack