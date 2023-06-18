import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useContext } from 'react';

import ArticleList from '../components/ArticleList';
import Layout from '../components/Layout'
import { UserContext } from '../UserContext';

// When attributes are sent to this screen, they will be found in props.
function ArticlesHome(props) {

  return (
    <Layout>
      <ArticleList />
      <FAB //Floating action button
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{ colors: { accent: "green" } }}
        onPress={() => props.navigation.navigate('ArticlesCreate')}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default ArticlesHome