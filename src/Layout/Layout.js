import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';

const Layout = ({children, style, portraitOrientation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    safeArea: {
      flex: 1,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

Layout.defaultProps = {
  style: {},
};

export default Layout;
