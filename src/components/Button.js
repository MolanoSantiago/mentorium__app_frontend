import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../utils/util";

export default function Button({ label, theme, fn, icon = false }) {
  if (theme === "primary") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: COLORS.primary }]}
          onPress={() => fn()}
        >
          {icon ? (
            <FontAwesome
              name={icon}
              size={18}
              color={COLORS.light}
              style={styles.buttonIcon}
            />
          ) : null}
          <Text style={[styles.buttonLabel, { color: COLORS.light }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => fn()}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "auto",
    height: 55,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  button: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLORS.light,
    paddingHorizontal: 18,
    paddingVertical: 2,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
