import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BackgroudView, IconButton} from './components';
import {fontName} from './components/IconButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ListProductScreen extends Component {
  state = {
    listCategory: [],
    listProduct: [],
  };

  componentDidMount() {
    // axios({
    //   url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //   method: 'GET',
    // })
    //   .then(result => {
    //     this.setState({listCategory: result.data.content});
    //   })
    //   .catch(error => console.log(error));

    // axios({
    //   url: 'http://svcy3.myclass.vn/api/Product',
    //   method: 'GET',
    // })
    //   .then(result => {
    //     console.log('Product', result);
    //   })
    //   .catch(error => console.log(error));

    const getAllCategory = axios({
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
      method: 'GET',
    });
    const getAllProduct = axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    });
    Promise.all([getAllCategory, getAllProduct])
      .then(([resultCategory, resultProduct]) => {
        const listCategory = resultCategory.data.content;
        const listProduct = resultProduct.data.content;
        this.setState({listCategory, listProduct});
      })
      .catch(error => console.log(error));
  }

  renderListProduct = ({item, index}) => {
    const isRightItem = index % 2 !== 0;
    return (
      <View
        style={[
          styles.cardProduct,
          // isRightItem && {height: 280},
          // !isRightItem && index && {marginBottom: 0},
        ]}>
        <View style={styles.hearto}>
          <AntDesign name="hearto" color="#ccc" size={24} />
        </View>
        <View style={styles.viewImg}>
          <Image style={styles.image} source={{uri: item.image}} />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textName}> {item.name}</Text>
          <Text style={styles.textPrice}> ${item.price}</Text>
        </View>
      </View>
    );
  };
  render() {
    const {listCategory, listProduct} = this.state;

    return (
      <BackgroudView>
        <View style={styles.container}>
          <View style={styles.header}>
            <IconButton name="close" size={30} color="#fff" />
            <IconButton
              name="sliders"
              size={30}
              color="#fff"
              font={fontName.FontAwesome}
            />
          </View>
          <FlatList
            style={styles.category}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listCategory}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryTitle}>{item.category} Shoes</Text>
              </TouchableOpacity>
            )}
          />
          <FlatList
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            data={listProduct}
            renderItem={this.renderListProduct}
          />
        </View>
      </BackgroudView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {flexGrow: 0},
  categoryButton: {
    paddingVertical: 10,
    marginRight: 20,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardProduct: {
    width: '48%',
    height: 250,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,

    padding: 10,
  },
  hearto: {
    alignItems: 'flex-end',
  },
  viewImg: {
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 170,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  textPrice: {
    fontSize: 16,
    color: '#000',
  },
});
