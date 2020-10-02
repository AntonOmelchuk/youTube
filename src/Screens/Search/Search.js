import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import VideoCard from '../../components/VideoCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#000',
  },
  inputWrapper: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
    backgroundColor: '#333',
  },
  input: {
    height: 36,
    width: '70%',
    backgroundColor: '#000',
    paddingHorizontal: 9,
    borderRadius: 3,
    color: '#ccc',
  },
  button: {
    fontSize: 21,
    color: '#ccc',
  },
  loading: {
    marginTop: '72%',
  },
});

const Search = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [videos, setData] = useState([]);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${100}&q=${value}&type=video&key=AIzaSyBI0uC8EI1qZHxWINny5R3Wv-qrbRiZTsM`,
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.items);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Text style={styles.button} onPress={() => fetchData()}>
          search
        </Text>
      </View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="red" />
      ) : null}
      <FlatList
        data={videos}
        renderItem={({item}) => {
          return (
            <VideoCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default Search;
