import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Text from "../Components/Text/Text";
import {
  addToCart,
  deleteFromCart,
  reset,
  selectCart,
  selectTotalAmount,
} from "../Redux/Slices/cartSlice";
import { colors, spacing } from "../Theme";
import CounterButton from "../Components/CounterButton";
import Button from "../Components/Button";

export default function Cart() {
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const onAmountChange = (value, item) => {
    if (value === 0) {
      return Alert.alert(
        "Remove Item?",
        "Do you want to remove this item from cart?",
        [
          { text: "Cancel", style: "cancel", onPress: () => {} },
          {
            text: "Remove",
            onPress: () => {
              dispatch(deleteFromCart({ id: item.id }));
            },
          },
        ]
      );
    }

    const cartProduct = {
      ...item,
      quantityPrice: value * item.price,
      amount: value,
    };

    dispatch(addToCart({ cartProduct }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, margin: spacing[5] }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text preset="h6">{`Cart (${cart.length})`}</Text>
            <Pressable onPress={() => dispatch(reset())}>
              <Text
                textColor="#757575"
                centered
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                Remove All
              </Text>
            </Pressable>
          </View>

          <View style={{ marginVertical: spacing[5] }}>
            {cart.map((item) => {
              const { featuredImage, name, quantityPrice, amount } = item;
              return (
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: spacing[2],
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.grey,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: spacing[5],
                    }}
                  >
                    <Image
                      source={featuredImage.source}
                      style={{ height: 36, width: 36 }}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: spacing[5],
                    }}
                  >
                    <Text preset="h6">{name}</Text>
                    <Text>{`$ ${quantityPrice}`}</Text>
                  </View>
                  <CounterButton
                    initialVal={amount}
                    setAmount={(value) => {
                      onAmountChange(value, item);
                    }}
                  />
                </View>
              );
            })}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: spacing[5],
              }}
            >
              <Text preset="h6">Total</Text>
              <Text preset="h5">{`$${totalAmount}`}</Text>
            </View>
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", margin: spacing[5] }}
        >
          <Button
            title={"CHECKOUT"}
            style={{ width: "100%" }}
            onPress={() => {
              NavigationPreloadManager.navigate("Checkout");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
