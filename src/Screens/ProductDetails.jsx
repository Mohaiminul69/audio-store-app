import { View } from "react-native";
import React from "react";
import Text from "../Components/Text/Text";
import { useSelector } from "react-redux";
import { selectProductsById } from "../Redux/Slices/productSlice";

export default function ProductDetails({ navigaion, route }) {
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
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
