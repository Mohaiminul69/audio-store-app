import { Pressable, SafeAreaView, ScrollView, View, Image } from "react-native";
import React, { useState } from "react";
import Text from "../Components/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsById } from "../Redux/Slices/productSlice";
import BannerTitle from "../Components/BannerTitle";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../Theme";
import Button from "../Components/Button";
import CounterButton from "../Components/CounterButton";
import { showMessage } from "react-native-flash-message";
import { addToCart } from "../Redux/Slices/cartSlice";

export default function ProductDetails({ navigation, route }) {
  const id = route.params.id;
  const product = useSelector((state) => selectProductsById(state, id));
  const {
    featuredImage,
    name,
    price,
    description,
    category,
    features,
    included,
    images,
  } = product;
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const add = () => {
    if (amount === 0) {
      return showMessage({
        message: "You cannot add 0 items",
        type: "danger",
      });
    }

    const cartProduct = {
      id,
      name,
      featuredImage,
      price,
      quantityPrice: price * amount,
      amount,
    };

    dispatch(addToCart({ cartProduct }));

    showMessage({
      message: "Product added to cart",
      type: "success",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BannerTitle />
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            style={{ margin: spacing[5] }}
          />
        </Pressable>
        <View style={{ margin: spacing[5] }}>
          <View
            style={{
              backgroundColor: colors.grey,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: spacing[8],
            }}
          >
            <Image source={featuredImage.source} />
          </View>
          <View style={{ marginVertical: spacing[5] }}>
            <Text preset="h4">{name}</Text>
            <Text uppercase preset="h4">
              {category}
            </Text>
            <Text textColor="#7d7d7d" style={{ marginTop: spacing[5] }}>
              {description}
            </Text>
            <Text preset="h6" style={{ marginTop: spacing[4] }}>
              {`$ ${price}`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: spacing[6],
            }}
          >
            <CounterButton amount={amount} setAmount={setAmount} />
            <Button
              title={"Add to Cart"}
              style={{ marginLeft: spacing[4] }}
              onPress={add}
            />
          </View>

          <View
            style={{
              marginVertical: spacing[5],
            }}
          >
            <Text preset="h4">FEATURES</Text>
            <Text
              textColor="#7d7d7d"
              style={{
                paddingTop: spacing[3],
                lineHeight: 25,
              }}
            >
              {features}
            </Text>
          </View>

          {included && (
            <View style={{ marginVertical: spacing[5] }}>
              <Text preset="h4">IN THE BOX</Text>
              {included?.map((item) => (
                <View
                  key={item.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: spacing[3],
                  }}
                >
                  <Text preset="h6" textColor={colors.primary}>
                    {item.amount}x
                  </Text>
                  <Text textColor="#7d7d7d" style={{ marginLeft: spacing[3] }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <View style={{ marginVertical: spacing[8] }}>
            {images.map((image, index) => {
              return (
                <View
                  key={index.toString()}
                  style={{
                    marginVertical: spacing[3],
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={image.source}
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      borderRadius: 12,
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
