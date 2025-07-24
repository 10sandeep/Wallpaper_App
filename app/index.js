import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { hp, wp } from "../helper/common";
import { router, useRouter } from "expo-router";

const Index = () => {
    const router=useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Your existing background image */}
      <Image
        source={require("../assets/images/download (2).jpeg")}
        style={styles.bgImage}
        resizeMode="cover"
      />

      {/* Wallpaper Grid Overlay */}
      <View style={styles.wallpaperGrid}>
        {/* Top Row */}
        <View style={[styles.wallpaperItem, styles.topLeft]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
        <View style={[styles.wallpaperItem, styles.topCenter]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
        <View style={[styles.wallpaperItem, styles.topRight]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>

        {/* Middle Row */}
        <View style={[styles.wallpaperItem, styles.middleLeft]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
        <View style={[styles.wallpaperItem, styles.middleCenter]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
        <View style={[styles.wallpaperItem, styles.middleRight]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>

        {/* Bottom Row */}
        <View style={[styles.wallpaperItem, styles.bottomLeft]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
        <View style={[styles.wallpaperItem, styles.bottomCenter]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
        <View style={[styles.wallpaperItem, styles.bottomRight]}>
          <View style={styles.wallpaperPlaceholder} />
        </View>
      </View>

      {/* Animated Gradient Overlay */}
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1.0)", "black", "black"]}
          style={styles.gradient}
          start={{ x: 0.4, y: 0 }}
          end={{ x: 0.5, y: 0.9}}
        />

        {/* Content */}
        <View style={styles.contentContainer}>
          {/* Title instead of Logo */}
          <Text style={styles.pixelTitle}>WallForge</Text>

          {/* <Text style={styles.title}>Enhance Your Device with</Text>
          <Text style={styles.artisticTitle}>Artistic Wallpapers</Text> */}
          <Text style={styles.punchLine}>
            Wallpapers Are Created According To Your Device's Screen Resolution.
          </Text>

          {/* Page Indicators */}
          <View style={styles.pageIndicators}>
            <View style={[styles.indicator, styles.activeIndicator]} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>

          <Pressable onPress={() => router.push('home')} style={styles.startButton}>
            <LinearGradient
              colors={["#10B981", "#059669"]}
              style={styles.buttonGradient}
            >
              <Text style={styles.startText}>Explore More</Text>
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
    backgroundColor: "#000000",
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
    top: 0,
    bottom: 0,
  },
  wallpaperGrid: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: hp(110),
    opacity: 0.4,
  },


  // Grid positions matching the image layout
  topLeft: {
    top: hp(8),
    left: wp(5),
    width: wp(25),
    height: wp(25),
    transform: [{ rotate: "-5deg" }],
  },
  topCenter: {
    top: hp(6),
    left: wp(37.5),
    width: wp(25),
    height: wp(25),
    transform: [{ rotate: "3deg" }],
  },
  topRight: {
    top: hp(10),
    right: wp(5),
    width: wp(25),
    height: wp(25),
    transform: [{ rotate: "-8deg" }],
  },
  middleLeft: {
    top: hp(25),
    left: wp(2),
    width: wp(28),
    height: wp(28),
    transform: [{ rotate: "7deg" }],
  },
  middleCenter: {
    top: hp(28),
    left: wp(36),
    width: wp(28),
    height: wp(28),
    transform: [{ rotate: "-3deg" }],
  },
  middleRight: {
    top: hp(22),
    right: wp(2),
    width: wp(28),
    height: wp(28),
    transform: [{ rotate: "5deg" }],
  },
  bottomLeft: {
    bottom: hp(25),
    left: wp(8),
    width: wp(22),
    height: wp(22),
    transform: [{ rotate: "-6deg" }],
  },
  bottomCenter: {
    bottom: hp(28),
    left: wp(39),
    width: wp(22),
    height: wp(22),
    transform: [{ rotate: "8deg" }],
  },
  bottomRight: {
    bottom: hp(22),
    right: wp(8),
    width: wp(22),
    height: wp(22),
    transform: [{ rotate: "-4deg" }],
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    position: "absolute",
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: hp(8),
    paddingHorizontal: wp(5),
  },
  logoContainer: {
    marginBottom: hp(4),
  },

  logoCore: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  pixelTitle: {
    fontSize: hp(7),
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: hp(4),
    letterSpacing: 2,
  },
  title: {
    fontSize: hp(4),
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: hp(1),
    lineHeight: hp(4.5),
  },
  artisticTitle: {
    fontSize: hp(4),
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: hp(2),
    lineHeight: hp(4.5),
  },
  punchLine: {
    fontSize: hp(2),
    letterSpacing: 0.5,
    marginBottom: hp(4),
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
    opacity: 0.9,
    lineHeight: hp(2.5),
    maxWidth: wp(85),
  },
  pageIndicators: {
    flexDirection: "row",
    marginBottom: hp(4),
    gap: 8,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  activeIndicator: {
    backgroundColor: "#FFFFFF",
  },
  startButton: {
    borderRadius: 25,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  startText: {
    color: "#FFFFFF",
    fontSize: hp(2.5),
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default Index;
