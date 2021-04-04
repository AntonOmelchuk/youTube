import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const VideoCard = ({videoId, title, channel}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      margin: 10,
      height: 120,
      width: '90%',
      marginBottom: 0,
    },
    videoImage: {
      width: '45%',
      height: 100,
    },
    infoBlock: {
      paddingTop: 3,
      paddingLeft: 7,
      height: 90,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 17,
      fontWeight: '700',
      width: Dimensions.get('screen').width / 2,
      color: '#fff',
    },
    channel: {
      fontSize: 12,
      color: '#fff',
    },
  });

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('VideoPlayer', {videoId});
      }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles.videoImage}
        />
        <View style={styles.infoBlock}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={3}>
            {title}
          </Text>
          <Text style={styles.channel}>{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
