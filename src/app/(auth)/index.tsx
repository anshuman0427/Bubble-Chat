import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome = () => {
    router.push("/(auth)/terms")
  };

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 2000);
  };

   useEffect(() => {
    const timeout = setTimeout(loadingTimeout, 2000);

    return () => {clearTimeout(timeout) }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
       <View style = {styles.header}></View>
       <View style = {styles.body}>
        <Image source={imagePath.logo}
         style={{width: scale(250), height: verticalScale(250), resizeMode: 'contain'}}
        />
       </View>
        <View style = {styles.footer}>
          {isLoading ? (
            <>
            <ActivityIndicator size='large' color="#E9ACFFFF" />
            </>
          ) : (
            <>
           <Text style={styles.from_text}>From</Text>
           <Text style={styles.company_text}>Bubble Chat</Text>
           </>
          )}
        </View>
    </SafeAreaView>
  )
}

export default Auth;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1, 
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  from_text: {
    fontSize: 16,
    color: 'gray',
  },
  company_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E9ACFFFF',
  }
})