import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.container}>Olá!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textTransform: "Uppercase",
    color: "red",
    backgroundColor: "black",
  },
});
