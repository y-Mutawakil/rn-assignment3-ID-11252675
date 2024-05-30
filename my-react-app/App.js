import { View, Text, StyleSheet } from "react-native";
import Frame1 from "./components/Frame1";

export default function App() {
  return (
    <View style={styles.container}>
       <Frame1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    paddingTop: 52, 
    paddingLeft: 20, 
    backgroundColor:"#F7F0E8"
  }
});