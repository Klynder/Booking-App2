import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Usuarios } from '@/constants/Usuario';
import { FlatList } from 'react-native-gesture-handler';



export default function HomeScreen() {
  return (
    
    <View style={{}}>
    <Text style={{}}>Perfis de Clientes</Text>
    <FlatList   
      data={Usuarios()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={{}}>
          <Text>Id: {item.id}</Text>
          <Text>Nome: {item.nome}</Text>
          <Text>Nome do grupo: {item.nome_grupo}</Text>

    />
    </View>
  );
}

const styles = StyleSheet.create({
});
