import { Text, View } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <Text>Tela inicial.</Text>
      <Link href="/configuracoes">
        <MaterialIcons name="settings" size={24} color="black" />
      </Link>
    </View>
  );
}
