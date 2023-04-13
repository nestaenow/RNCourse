import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey Nesta!</Text>
      <View style={styles.body}>
        <Text>Welcome to the React Native World!</Text>
        <Text>Enjoy and Let Your Creativity Speak</Text>
      </View>
      <Button title="Let's Go" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#f00",
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 40,
  },
  body: { marginBottom: 40 },
});
