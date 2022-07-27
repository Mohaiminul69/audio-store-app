import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../Redux/Slices/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </Pressable>
    </View>
  );
}
