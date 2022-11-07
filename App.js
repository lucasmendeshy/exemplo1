import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import estilos from "./estilos";

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar barStyle="default" />
      <View style={estilos.um}>
        <Text style={estilos.titulo}>React Native</Text>
      </View>

      <View style={estilos.dois}>
        <Text style={estilos.subtitulo}>
          Trabalhando com desenvolvimento de apps
        </Text>
        {/* <Button style={estilos.botao} title="ENVIAR" /> */}
        <TouchableOpacity>
          <Text style={estilos.botao}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
