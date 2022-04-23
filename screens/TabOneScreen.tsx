import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { MasonryImage, RootTabScreenProps } from '../types';
import MasonryList from '@react-native-seoul/masonry-list';
import { ReactElement } from 'react';
import MasonsryImageCard from '../components/MasonryImage';



const data: MasonryImage[] = [
  {
    id: 'id123',
    imgURL:
      'https://www.waterfordvisitorcentre.com/sites/waterfordvisitorcentre.com/files/HoW_Blog_Images/vitamin_sea_festival_image_2021.jpg',
    text: 'Pioneer LHS Chaise Lounger in Grey Colour',
  },
  {
    id: 'id124',
    imgURL:
      'https://1.bp.blogspot.com/-cQam9sHJPPs/XzVikVeXOUI/AAAAAAAChek/Zakg_S16BMUQQRja8jxmB2PfwuB0NMxdgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Harvest%2B17.JPG',
    text: 'Precedant Furniture',
  },
  {
    id: 'id125',
    imgURL:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/41/55/60/newtown-cove-caravan.jpg?w=500&h=300&s=1',
    text: 'Leverette Upholstered Platform Bed',
  },
  {
    id: 'id126',
    imgURL:
      'https://thesandshotel.ie/images/Attractions/maxresdefault.jpg',
    text: 'Briget Accent Table',
  },
  {
    id: 'id127',
    imgURL:
      'https://www.independent.ie/life/home-garden/39796/40681644.ece/AUTOCROP/w1240h700/IP%20Tramr%201561.jpg',
    text: 'Rivet Emerly Media Console',
  },
  {
    id: 'id128',
    imgURL:
      'https://tidesandtales.ie/wp-content/uploads/2019/08/20190124_124733-2000x1200.jpg',
    text: 'Drew Barrymore Flower Home Accent Chair',
  },
  {
    id: 'id129',
    imgURL:
      'https://socialbridge.files.wordpress.com/2014/05/gs6.jpg',
    text: 'Ecobirdy Charlie Chair',
  },
  {
    id: 'id130',
    imgURL:
      'https://waterford.fyi/wp-content/uploads/2019/09/place-brooklyn-tramore-1024x768.jpg',
    text: 'Hailey Sofa',
  },
  {
    id: 'id131',
    imgURL:
      'https://live.staticflickr.com/5739/21852324629_87e10d1bde_b.jpg',
    text: 'Farmhouse Dining Table',
  },
  {
    id: 'id132',
    imgURL:
      'https://wiyp2020.s3.eu-west-1.amazonaws.com/app/uploads/2016/04/Bathers-on-Tramore-beach-scaled.jpg',
    text: 'Evelyn Coffee Table',
  },
  {
    id: 'id133',
    imgURL:
      'https://pbs.twimg.com/media/EQqHmidWoAAm6zp.jpg',
    text: 'Slope Nomad Leather Sofa',
  },
 
];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const renderItem = ({
    item,
  }: {
    item: MasonryImage;
    index?: number;
  }): ReactElement => {
    return <MasonsryImageCard item={item} />;
  };


  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MasonryList
        keyExtractor={(item: MasonryImage): string => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          paddingHorizontal: 0,
          alignSelf: 'stretch',
        }}
        numColumns={2}
        data={data}
        renderItem={renderItem}
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
