import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';



const Terms = () => {
  const router = useRouter();

const onAgreePress = () => {
  router.push('/(auth)/loginotp');
}

  return (
    <SafeAreaView style={styles.container}>

      {/* Top Image + Text Section */}
      <View style={styles.body}>
        <Image 
          source={imagePath.terms}
          style={styles.image}
        />

        <Text style={styles.heading}>Stay connected with a community</Text>

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
          
          Tap <Text style={{fontWeight: 'bold'}}>"Agree and Continue"</Text> to accept the 

          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://yourwebsite.com/terms')}
          >
            {" "}Terms of Service
          </Text>.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onAgreePress}>
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
    paddingHorizontal: 20,
  },

  image: {
    width: scale(300),
    height: verticalScale(300),
    resizeMode: 'contain',
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },

  text: {
    fontSize: 12,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  legalText: {
    marginBottom: 10,
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },

  link: {
    color: '#A425D3FF',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#E9ACFFFF',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
