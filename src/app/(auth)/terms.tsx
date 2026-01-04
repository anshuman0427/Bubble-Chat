import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';

const Terms = () => {
  const router = useRouter();

  const onAgreePress = () => {
    router.push('/(auth)/loginotp');
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Top Image + Text Section */}
      <View style={styles.body}>
        <Image 
          source={imagePath.terms}
          style={styles.image}
        />

        <Text style={styles.heading}>
          Stay connected with a community
        </Text>

        <Text style={styles.text}>
          Communities bring members together in topic-based groups and make it easy 
          to get admin announcements. Any community you are added to will appear here.
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.footer}>

        <Text style={styles.legalText}>
          Read our
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://yourwebsite.com/privacy')}
          >
            {" "}Privacy Policy
          </Text>. 
          
          Tap <Text style={styles.boldText}>&quot;Agree and Continue&quot;</Text> to accept the

          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://yourwebsite.com/terms')}
          >
            {" "}Terms of Service
          </Text>.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={onAgreePress}
        >
          <Text style={styles.buttonText}>AGREE AND CONTINUE</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },

  image: {
    width: scale(280),
    height: verticalScale(260),
    resizeMode: 'contain',
    marginBottom: verticalScale(10),
  },

  heading: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: 'gray',
    marginBottom: verticalScale(8),
    textAlign: 'center',
  },

  text: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: 'gray',
    marginBottom: verticalScale(20),
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },

  legalText: {
    marginBottom: verticalScale(10),
    fontSize: moderateScale(12),
    color: 'gray',
    textAlign: 'center',
    lineHeight: moderateScale(16),
  },

  link: {
    color: '#A425D3FF',
    fontWeight: 'bold',
  },

  boldText: {
    fontWeight: 'bold',
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
});
