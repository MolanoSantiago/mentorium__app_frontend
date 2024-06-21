import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../utils/util";

export default function SvgViewer({
  source,
  width = windowWidth,
  height = windowHeight,
  viewBox = "0 0 20 20",
  fill = COLORS.dark,
}) {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox={viewBox}>
        <Path d={source} fill={fill} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
