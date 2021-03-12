import { Platform, StatusBar } from "react-native";
import { color } from "../data/ui";

export const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
};

export const noBorderBottom = {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
};

export const titleStyle = {
    fontSize: 14,
    color: color.accent,
    marginHorizontal: 24,
    fontFamily: "Spartan-ExtraBold",
    letterSpacing: -0.5,
};
