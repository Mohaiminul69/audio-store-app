import { Text as RNText } from "react-native";
import React from "react";
import { presets } from "./text.preset";

export default function Text(props) {
  const {
    children,
    preset = "default",
    style: styleOverride,
    textColor,
    centered,
    white,
    uppercase,
    ...rest
  } = props;
  const style = presets[preset] || presets.base;
  const styles = [style, styleOverride];

  return (
    <RNText
      {...rest}
      style={[
        styles,
        textColor && { color: textColor },
        centered && { textAlign: "center" },
        white && { color: "#fff" },
        uppercase && { textTransform: "uppercase" },
      ]}
    >
      {children}
    </RNText>
  );
}
