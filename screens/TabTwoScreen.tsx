import { FlatList, StyleSheet } from 'react-native';
import { TasteTramoreEvent } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MyItem } from '../components/MyItem';
import jsonData from '../data/events.json';

const loadData = () => JSON.parse(JSON.stringify(jsonData));


export default function TabTwoScreen() {
  const renderEventItem = ({item}: any) => {
    return (
      <MyItem item={item}/>
    )
  }

  let events :TasteTramoreEvent[] = loadData().events 
  console.log("Events:", events)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    <FlatList
      data={events}
      renderItem={renderEventItem}
      keyExtractor={item => item.name}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
