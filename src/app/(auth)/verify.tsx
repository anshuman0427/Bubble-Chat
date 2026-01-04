import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


const Verify = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bodyarea}>
          <Text style={styles.headingText}>Verify Phone Number</Text>
          <Text style={styles.description}>Enter OTP you receive on message</Text>
        </View>
        <View >
          <OtpInput
  numberOfDigits={4}
  focusColor='#A425D3FF'
  autoFocus={false}
  hideStick={true}
  blurOnFilled={true}
  disabled={false}
  type="numeric"
  secureTextEntry={false}
  focusStickBlinkingDuration={500} 
  theme={{
    pinCodeContainerStyle: styles.pinCodeContainer,
  }}
  />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Verify;

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: scale(20),
  paddingTop: verticalScale(80),
},

header: {
  gap: verticalScale(20),
},

bodyarea: {},

footer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: verticalScale(200),
  paddingHorizontal: scale(20),
},

button: {
  backgroundColor: '#E9ACFFFF',
  paddingVertical: verticalScale(14),
  paddingHorizontal: scale(50),
  borderRadius: moderateScale(30),
},

buttonText: {
  color: 'white',
  fontSize: moderateScale(14),
  fontWeight: 'bold',
  },

headingText: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    color: 'gray',
    marginBottom: verticalScale(8),
    textAlign: 'center',
},
  
description: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: 'gray',
    marginBottom: verticalScale(20),
},



pinCodeContainer: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: moderateScale(10),
},
})