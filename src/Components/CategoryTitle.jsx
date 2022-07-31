import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { colors, spacing } from "../Theme";
import Text from "./Text/Text";

export default function CategoryTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text uppercase white preset="h4">
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing[3],
    borderTopWidth: 0.5,
    borderTopColor: "#979797",
  },
});
