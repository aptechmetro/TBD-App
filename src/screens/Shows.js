import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images';
import Button from '../components/Button';
import Cart from '../components/Cart';
import color from '../theme/color';
import Carousel from 'react-native-reanimated-carousel';

const movie_img = [
    {
      image: images.movie1,
    },
    {
      image: images.movie2,
    },
    {
      image: images.movie3,
    },
  ];
  const scroll = [
    {
      image: images.movie4,
    },
    {
      image: images.movie5,
    },
    {
      image: images.movie6,
    },
    {
      image: images.movie7,
    },
  ];

const Shows = ({navigation}) => {
  const {width} = Dimensions.get('window');
  const chunkedImages = [];
  for (let i = 0; i < movie_img.length; i += 3) {
    chunkedImages.push(movie_img.slice(i, i + 3));
  }
  return (
    <View style={{flex: 1,backgroundColor:color.background}}>
      <View style={{height:"100%",position:"absolute",width:"100%"}}>
        <Image
          source={images.shows}
          style={{height: "100%",width:"100%", position: 'absolute'}}
        />
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            width: '90%',
            fontWeight: '900',
            alignSelf: 'center',
            color:"white",
            textAlign: 'center',
            marginTop: '75%',
          }}>
          Select your three favourite Tv Shows
        </Text>
      </View>
      <View style={{height:"50%",marginTop:"95%",justifyContent:"flex-end", paddingLeft: 10}}>
      <Carousel
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={chunkedImages}
          scrollAnimationDuration={1000}
          renderItem={({item}) => (
            <View style={{flexDirection:"row",}}>
                {item.map((image, index) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems:"center",
                // backgroundColor:"pink",
                height: 130,
              }}>
                <Cart img={image.image} />
                </View>
              ))}
            </View>
          )}
        />
        <ScrollView horizontal={true} contentContainerStyle={{marginTop: 150,height:125}}>
          {scroll.map(img => {
            return <Cart img={img.image} />;
          })}
        </ScrollView>
        <Button text={'Next'} onPress={()=>navigation.navigate("Home")}/>
      </View>
    </View>
  );
};

export default Shows

const styles = StyleSheet.create({})