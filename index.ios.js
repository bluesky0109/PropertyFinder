/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld,
        }}/>
    );
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

React.AppRegistry.registerComponent('PropertyFinder', function(){return PropertyFinderApp});
