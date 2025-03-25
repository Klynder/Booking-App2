import { Image, StyleSheet, Platform } from 'react-native';
import { Usuarios } from '@/constants/Usuario';
import { FlatList } from 'react-native-gesture-handler';



export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
    <Text style={styles.title}>Perfis de Cleintes</Text>
    <FlatList   
      dat={Usuarios()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
