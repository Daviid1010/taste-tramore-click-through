import React, { useMemo } from "react";
import { MasonryImage } from "../types";
import { Text, Image, View } from './Themed';


const MasonsryImageCard: React.FC<{item: MasonryImage}> = ({item}) => {
    const randomBool = useMemo(() => Math.random() < 0.5, []);
  
    return (
      <View key={item.id} style={{marginTop: 0, flex: 1}}>
        <Image
          source={{uri: item.imgURL}}
          style={{
            height: randomBool ? 100 : 250,
            alignSelf: 'stretch',
            margin:5
          }}
          resizeMode="cover"
        />
        
      </View>
    );
  };

  export default MasonsryImageCard;