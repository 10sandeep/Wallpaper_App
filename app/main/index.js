import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, {useCallback, useEffect, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// ✅ FIXED: Changed to default import
import Categories from "../../components/categories";
import { apicall } from "../../api";
import ImageGrid from "../../components/imageGrid";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helper/common";
import {debounce} from 'lodash'

var page = 1;
const Index = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;

  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (params = { page: 1 }, append = false) => {
    let res = await apicall(params);
    if (res.success && res?.data?.hits) {
      if (append) setImages([...images, ...res.data.hits]);
      else setImages([...res.data.hits]);
    }
  };

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  };

  const handleSearch = (text) =>{
    setSearch(text);
    if(text.length>2){
      page =1;
 setImages([])
 fetchImages({page,q:text})
    }
    if(text ==""){
 page =1;
 searchInputRef?.current?.clear();
 setImages([])
 fetchImages({page})
    }
  }

  const clearSearch = () =>{
    setSearch("");
    searchInputRef?.current?.clear();
  }

  const handleTextDebounce = useCallback(debounce(handleSearch,400),[])

  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>WallForge</Text>
        </Pressable>

        <Pressable>
          <FontAwesome6
            name="bars-staggered"
            size={22}
            color={theme.colors.neutral(0.5)}
          />
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <Feather
              name="search"
              size={24}
              color={theme.colors.neutral(0.4)}
            />
          </View>

          <TextInput
            placeholder="Search for Photos..."
            // value={search}
            ref={searchInputRef}
            onChangeText={handleTextDebounce}
            style={styles.searchInput}
            placeholderTextColor={theme.colors.neutral(0.4)}
          />

          {search !== "" && (
            <Pressable onPress={()=>{handleSearch("")}} style={styles.closeIcon}>
              <Ionicons
                name="close"
                size={24}
                color={theme.colors.neutral(0.6)}
              />
            </Pressable>
          )}
        </View>

        {/* Categories List */}
        <View style={styles.categories}>
          <Categories
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>
        {/* images mansory grid*/}
        <View>
        {images.length > 0 && <ImageGrid images={images} />
        }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),
  },
  searchBar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    backgroundColor: theme.colors.white,
    padding: 6,
    paddingLeft: 10,
    borderRadius: theme.radius.lg,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.radius.sm,
    paddingVertical: 10,
    fontSize: hp(1.8),
    color: theme.colors.neutral(0.9),
  },
  closeIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: 8,
    borderRadius: theme.radius.sm,
    marginLeft: 6,
  },
  categories: {
    marginHorizontal: wp(4),
  },
});

export default Index;
