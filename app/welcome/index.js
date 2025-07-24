import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { hp, wp } from '../../helper/common';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ currentPage = 2, totalPages = 3 }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleExploreMore = () => {
    // Check if this is the last page
    if (currentPage === totalPages - 1) {
      // Navigate to home if it's the last page
      router.push('/welcome');
    } else {
      // Navigate to next onboarding page
      router.push(`/onboarding/${currentPage + 1}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      

      {/* Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Background Image */}
      <Image
        source={require('../../assets/images/HomeScreen2.jpeg')}
        style={styles.bgImage}
        resizeMode="cover"
      />

      {/* Animated Gradient Overlay */}
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'black', 'black']}
          style={styles.gradient}
          start={{ x: 0.4, y: 0 }}
          end={{ x: 0.5, y: 0.9 }}
        />

        {/* Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.pixelTitle}>Different Ways to Find Free Wallpaper Content</Text>

          <Text style={styles.punchLine}>
           You can Set The App To Surprise You With A New Wallpaper Hourly Or Daily.
          </Text>

          {/* Page Indicators */}
          <View style={styles.pageIndicators}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentPage && styles.activeIndicator,
                ]}
              />
            ))}
          </View>

          {/* Navigation Button */}
       <Pressable onPress={() => router.push('main')} style={styles.startButton}>
            <LinearGradient
              colors={['#10B981', '#059669']}
              style={styles.buttonGradient}
            >
              <Text style={styles.startText}>
                {currentPage === totalPages - 1 ? 'Get Started' : 'Next'}
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    position: 'absolute',
    top: hp(6),
    left: wp(5),
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  bgImage: {
    width: wp(100),
    height: hp(110),
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: hp(8),
    paddingHorizontal: wp(5),
  },
  pixelTitle: {
    fontSize: hp(4),
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: hp(4),
    letterSpacing: 2,
  },
  punchLine: {
    fontSize: hp(2),
    letterSpacing: 0.5,
    marginBottom: hp(4),
    color: '#FFFFFF',
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: hp(2.5),
    maxWidth: wp(85),
  },
  pageIndicators: {
    flexDirection: 'row',
    marginBottom: hp(4),
    gap: 8,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  activeIndicator: {
    backgroundColor: '#FFFFFF',
  },
  startButton: {
    borderRadius: 25,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startText: {
    color: '#FFFFFF',
    fontSize: hp(2.5),
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default WelcomeScreen;