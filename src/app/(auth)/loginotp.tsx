import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const LoginOTP = () => {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState('');

  // ✅ EXACTLY like official reference
  const [countryCode, setCountryCode] =
    useState<CountryCode>('IN');
  const [country, setCountry] = useState<Country | null>(
    null,
  );

  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setVisible(false);
  };

  const onNextBtnPress = () => {
    router.push('/(auth)/verify');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            Login with phone number
          </Text>
          <Text style={styles.description}>
            Enter your phone number to get OTP
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {/* Country dropdown */}
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setVisible(true)}
            activeOpacity={0.7}
          >
            <View />
            <Text style={styles.dropdown_title}>
              {country ? String(country.name) : 'India'}
            </Text>
            <AntDesign
              name="caret-down"
              size={moderateScale(12)}
              color="black"
            />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />

          {/* Phone input */}
          <View style={styles.inputpanel}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>
                +{country ? country.callingCode[0] : '91'}
              </Text>
              <View style={styles.horizontalLine} />
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: scale(10),
                marginTop: verticalScale(20),
              }}
            >
              <TextInput
                style={styles.inputt}
                placeholder="Enter phone number"
                keyboardType="number-pad"
                value={phone}
                onChangeText={setPhone}
              />
              <View style={styles.horizontalLine} />
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={onNextBtnPress}
        >
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>

      {/* Country Picker Modal */}
      {visible && (
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCode
          visible={visible}
          onSelect={onSelect}
          onClose={() => setVisible(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default LoginOTP;

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

  heading: {},

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

  inputContainer: {
    marginTop: verticalScale(10),
    paddingHorizontal: scale(20),
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(150),
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

  horizontalLine: {
    height: 2,
    backgroundColor: '#A425D3FF',
    marginTop: verticalScale(6),
  },

  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
  },

  dropdown_title: {
    fontSize: moderateScale(14),
    fontWeight: '600',
  },

  inputpanel: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: scale(20),
    paddingHorizontal: scale(10),
  },

  country_code: {},

  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },

  inputt: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    paddingVertical: 0,
  },
});
