import {Image, StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import Heading from '../components/Heading';
import DescriptionText from '../components/DescriptionText';
import Button from '../components/Button';

export default function Ratings() {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 129}}>
        <Image
          source={require('../assets/rating.png')}
          width={388}
          height={258}
        />
      </View>
      <View style={styles.txtbox}>
        <View>
          <Heading text="Your Opinion Matter to us!" textAlign={'center'} />
          <DescriptionText
            text="We work super hard to serve you best and would love to know how
            would you rate our app?"
            textAlign={'center'}
          />
        </View>
        <Rating
          type="custom"
          startingValue={3.5} // Set initial rating
          imageSize={36} // Adjust star size
          readonly={false} // Set to true if you don't want it to be interactive
          ratingColor="#07193D"
          ratingBackgroundColor="#07193D66"
          tintColor="#EDEDED"
        />
        <Button text="Submit" bgcolor="#07193D" color={'#ffffff'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 120,
    backgroundColor: '#EDEDED',
  },
  txtbox: {
    flex: 1,
    gap: 34,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});
