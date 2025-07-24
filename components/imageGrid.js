import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./imageCard";
import { getColumnCount, wp } from "../helper/common"; // make sure this component exists and takes `image` prop

const ImageGrid = ({ images }) => {
  const columns = getColumnCount();
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        contentContainerStyle={styles.listContainerStyle}
        initialNumToRender={1000}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ImageCard item={item} columns ={columns} index={index} />
        )}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
  listContainerStyle: {
    paddingHorizontal:wp(4)
  }
});

export default ImageGrid;
