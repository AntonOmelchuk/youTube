/*eslint-disable */
import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';

const VideoPlayer = ({route}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    player: {
      width: '100%',
    },
  });

  const {params} = route;
  const {videoId} = params;

  const [isPortrait, setOrientation] = useState(
    Dimensions.get('window').height >= Dimensions.get('window').width,
  );
  const [playing, setPlaying] = useState(false);

  const updateOrientation = () => {
    const orientation =
      Dimensions.get('window').height >= Dimensions.get('window').width;
    setOrientation(orientation);
  };
  useEffect(() => {
    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, [Dimensions.get('window').height]);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  });

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <YouTube
        play={playing}
        fullscreen
        onError={(err) => console.log('err', err)}
        videoId={videoId}
        onChangeState={onStateChange}
        style={[styles.player, {height: isPortrait ? 300 : '100%'}]}
      />
    </View>
  );
};

export default VideoPlayer;
