import { Pressable, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Text from "./Text/Text";
import { colors } from "../Theme";

export default function CounterButton({
  style,
  setAmount,
  amount,
  initialVal,
}) {
  //   const [count, setCount] = useState(initialVal || 0);
  const onIncrement = () => {
    // setCount((prev) => prev + 1);
    setAmount(amount + 1);
  };
  const onDecrement = () => {
    if (amount > 0) {
      //   setCount((prev) => prev - 1);
      setAmount(amount - 1);
    }
  };
  return (
    <View style={[styles.wrapper, style]}>
      <Pressable onPress={onDecrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#c4c4c4">
          -
        </Text>
      </Pressable>
      <Text>{amount}</Text>
      <Pressable onPress={onIncrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#c4c4c4">
          +
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: 120,
    height: 48,
    flexDirection: "row",
    backgroundColor: colors.grey,
    borderRadius: 4,
  },
  counterBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "bold",
  },
});
