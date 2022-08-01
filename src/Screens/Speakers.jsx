import { Image, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectSpeakers } from "../Redux/Slices/productSlice";
import BannerTitle from "../Components/BannerTitle";
import CategoryTitle from "../Components/CategoryTitle";
import { colors, spacing } from "../Theme";
import Text from "../Components/Text/Text";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

export default function Speakers({ navigation }) {
  const speakers = useSelector(selectSpeakers);
  const onPressProduct = (id) => {
    navigation.navigate("Details", { id: id });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <BannerTitle />
        <CategoryTitle title={"Speakers"} />
        <View style={{ margin: spacing[5] }}>
          {speakers.map((speaker) => (
            <View key={speaker.name} style={{ marginBottom: 60 }}>
              <View
                style={{
                  backgroundColor: colors.grey,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: spacing[5],
                }}
              >
                <Image source={speaker.featuredImage.source} />
              </View>

              <View style={{ marginTop: spacing[5] }}>
                <Text preset="h4" centered>
                  {speaker.name}
                </Text>
                <Text
                  textColor="#919191"
                  centered
                  style={{
                    marginTop: spacing[5],
                    marginHorizontal: spacing[7],
                  }}
                >
                  {speaker.description}
                </Text>
              </View>

              <Button
                style={{
                  alignSelf: "center",
                  marginTop: spacing[5],
                }}
                title={"SEE PRODUCT"}
                onPress={() => onPressProduct(speaker.id)}
              />
            </View>
          ))}
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
