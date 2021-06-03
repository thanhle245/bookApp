import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image} from 'react-native'

const DATA = [
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    proName: 'Phone1',
    image: 'https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620',
    price: 150
    },
    {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    proName: 'Phone1',
    image: 'https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620',
    price: 150
    },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    proName: 'Phone1',
    image: 'https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620',
    price: 150
    },
];

const Item = ({ proName,image,price }) => (
    <View style={styles.item}>
        <Image source={{uri: image}} style={{width: 50, height: 50}}/>
      <Text style={styles.proName}>{proName}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
  
  const Products = () => {
    const renderItem = ({ item }) => (
        <Item proName={item.proName} price={item.price} image={item.image} />
    );

    return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
    );
}


export default Products
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    title: {
    fontSize: 32,
    },
    image:{
        width: 50,
        height: 50
    }
});