import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { theme } from "../constants/theme";
import { getImageSize, wp } from "../helper/common";
import { Image } from "expo-image";

const ImageCard = ({ item, index, columns }) => {
  const isLastInRow = () => {
    return (index + 1) % columns === 0;
  };

  const getImageHeight = () => {
    const { imageHeight: height, imageWidth: width } = item;
    return {
      height: getImageSize(height, width),
    };
  };

  return (
    <Pressable style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}>
      <Image
        style={[styles.image, getImageHeight()]}
        source={{ uri: item?.webformatURL }}
        transition={100}
        contentFit="cover"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: theme.colors.grayBG,
    borderCurve: "continuous",

    marginBottom: wp(2),
    borderRadius: theme.radius.xl,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    borderRadius: theme.radius.xl,
  },
  spacing: {
    marginRight: wp(2),
  },
});

export default ImageCard;
