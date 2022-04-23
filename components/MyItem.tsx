import { Text, Image, View } from './Themed';
import { Button, Dimensions, StyleSheet } from 'react-native';
import { TasteTramoreEvent } from '../types';

interface Props {
  item: TasteTramoreEvent
}

export const MyItem: React.FC<Props> = (props) => {
  let { item } = props

  return (
    <View style={styles.item}>
      <Text style={styles.header}>{item.name}</Text>
      <Text><Text style={styles.bold}>Location:</Text> {item.location}</Text>
      <Text><Text style={styles.bold}>Date:</Text> {item.date}</Text>
      <Text><Text style={styles.bold}>Price:</Text> €{item.price}</Text>
      <Image style={styles.images} source={{ uri: item.images[0], height: 100, width: 300 }}></Image>
      <Button
        onPress={() => {}}
        title="Buy Ticket"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}


const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    color: 'gray',
    borderColor: "gray",
    borderBottomWidth: 1,
    padding: 20,
    marginVertical: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4
  },
  header: {
    fontWeight: "700",
    fontSize: 30
  },
  bold: {
    fontWeight: "bold",
  },
  images: {
    marginVertical: 8
  }

});
