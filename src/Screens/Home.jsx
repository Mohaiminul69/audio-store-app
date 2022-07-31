import {
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Text from "../Components/Text/Text";
import {
  fetchProducts,
  selectFeaturedProducts,
  selectStatus,
} from "../Redux/Slices/productSlice";
import { useEffect } from "react";
import BannerTitle from "../Components/BannerTitle";
import { colors, spacing } from "../Theme";
import { AntDesign } from "@expo/vector-icons";

const CategoryBox = ({ title, image, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginVertical: spacing[8],
        marginHorizontal: spacing[5],
        borderRadius: spacing[4],
        backgroundColor: colors.grey,
        alignItems: "center",
        padding: spacing[5],
      }}
    >
      <Image source={image} style={{ top: -60 }} />
      <View
        style={{ alignItems: "center", justifyContent: "center", top: -20 }}
      >
        <Text preset="h6" style={{ textTransform: "uppercase" }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: spacing[4],
        }}
      >
        <Text
          preset="subtitle"
          textColor="#7c7c7c"
          centered
          style={{ marginRight: spacing[2] }}
        >
          SHOP
        </Text>
        <AntDesign name="right" color={colors.primary} size={14} />
      </View>
    </Pressable>
  );
};

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const featuredProducts = useSelector(selectFeaturedProducts);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <BannerTitle />
        <View style={{ backgroundColor: colors.black }}>
          <Image
            style={{ alignSelf: "center", width: "100%" }}
            resizeMode="cover"
            source={require("../../assets/images/home-banner.png")}
          />
          <View style={{ position: "absolute", width: "100%", top: 200 }}>
            <Text
              preset="h2"
              white
              centered
              style={{ textTransform: "uppercase" }}
            >
              Welcome
            </Text>
            <Text
              textColor={colors.grey}
              centered
              style={{
                width: width - 20,
                alignSelf: "center",
                marginTop: spacing[4],
              }}
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>
          </View>
        </View>

        <View style={{ paddingVertical: spacing[8] }}>
          <CategoryBox
            title="Headphones"
            image={require("../../assets/images/home-headphone.png")}
          />
          <CategoryBox
            title="Speakers"
            image={require("../../assets/images/home-speaker.png")}
          />
          <CategoryBox
            title="Earphones"
            image={require("../../assets/images/home-earphone.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
