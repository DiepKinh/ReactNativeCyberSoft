import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import axios from 'axios';

export default class DemoAxios extends Component {
  state = {
    product: {
      image: '',
      price: 0,
      name: '',
      description: '',
    },
  };
  componentDidMount() {
    axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    })
      .then(({data}) => {
        const image = data.content[0].image;
        const price = data.content[0].price;
        const name = data.content[0].name;
        const description = data.content[0].description;

        const product = {image, price, name, description};
        this.setState({product});
      })
      .catch(error => console.log(error));
  }
  render() {
    const {product} = this.state;
    return (
      <View style={styles.container}>
        <Text> {product.name}</Text>
        <Text> {product.price}</Text>
        <Text> {product.description}</Text>
        {product.image.length > 0 && (
          <Image style={styles.image} source={{uri: product.image}} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});
