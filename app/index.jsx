import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-500">
      <Text className="text-3xl" >ADB</Text>
      <Link href={'/home'}>click me!!</Link>
      <StatusBar style="auto" />
    </View>
  );
}