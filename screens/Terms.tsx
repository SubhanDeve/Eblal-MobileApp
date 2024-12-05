import {View, StyleSheet} from 'react-native';
import Heading from '../components/Heading';
import DescriptionText from '../components/DescriptionText';

export default function Terms() {
  return (
    <View style={styles.container}>
      <Heading text="Terms & Conditions" />
      <DescriptionText
        text="Lorem ipsum dolor sit amet consectetur. Porttitor adipiscing morbi nibh
        libero diam vulputate. Libero tempor ultrices eget mattis est sit
        semper. Sed libero dignissim vestibulum eget volutpat hendrerit est eu
        ut. Vel turpis odio non sollicitudin nec ultrices. Accumsan nulla leo
        nunc ornare. Tortor vestibulum rhoncus et augue. Viverra pellentesque
        diam mi elit condimentum. Odio sit volutpat ipsum magna. Vitae egestas
        nisi nullam a. Egestas habitasse eu id felis massa id sit sed viverra.
        Ac nunc et orci risus. Pellentesque convallis commodo at ultrices augue
        feugiat. Laoreet iaculis rutrum et ut sit pharetra massa mauris in.
        Elementum pellentesque adipiscing id quis placerat. A cursus nulla
        mollis nulla varius dictum gravida ultrices. Aliquet fusce neque
        adipiscing porttitor id montes donec eget. Tortor tincidunt sapien
        maecenas at etiam vel. Leo nec sollicitudin eu at. Facilisis scelerisque
        et et duis est pretium odio. Blandit ipsum faucibus donec massa vitae
        malesuada egestas. Auctor magna egestas amet lorem. Porttitor ut
        imperdiet at quisque. Feugiat consequat sed sagittis tellus et. Nam arcu
        erat nibh pellentesque egestas integer gravida scelerisque. Integer
        dolor maecenas viverra amet tempus viverra cursus. Tristique amet vitae
        vel scelerisque augue. Congue cursus ac lorem tristique molestie purus.
        Eu iaculis dui pharetra a. Sollicitudin odio odio tristique enim diam
        tincidunt urna aliquam. Tincidunt tortor ac viverra condimentum.
        Bibendum diam enim malesuada in scelerisque nulla auctor fringilla. Nam
        eu elit sagittis egestas sed aliquam at."
        textAlign={'justify'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 3,
    paddingHorizontal: 20,
  },
});
