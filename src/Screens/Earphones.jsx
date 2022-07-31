import { Image, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectEarphones } from "../Redux/Slices/productSlice";
import BannerTitle from "../Components/BannerTitle";
import CategoryTitle from "../Components/CategoryTitle";
import { colors, spacing } from "../Theme";
import Text from "../Components/Text/Text";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

export default function Earphones() {
  const earphones = useSelector(selectEarphones);
  const onPressProduct = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <BannerTitle />
        <CategoryTitle title={"Earphones"} />
        <View style={{ margin: spacing[5] }}>
          {earphones.map((earphone) => (
            <View key={earphone.name} style={{ marginBottom: 60 }}>
              <View
                style={{
                  backgroundColor: colors.grey,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: spacing[5],
                }}
              >
                <Image source={earphone.featuredImage.source} />
              </View>

              <View style={{ marginTop: spacing[5] }}>
                <Text preset="h4" centered>
                  {earphone.name}
                </Text>
                <Text
                  textColor="#919191"
                  centered
                  style={{
                    marginTop: spacing[5],
                    marginHorizontal: spacing[7],
                  }}
                >
                  {earphone.description}
                </Text>
              </View>

              <Button
                style={{
                  alignSelf: "center",
                  marginTop: spacing[5],
                }}
                title={"SEE PRODUCT"}
                onPress={() => onPressProduct(earphone.id)}
              />
            </View>
          ))}
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
