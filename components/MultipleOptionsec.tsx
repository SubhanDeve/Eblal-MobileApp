import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const MultipleOptionsec = (props: any) => {
  const {text, isSelected, onPress} = props;
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Image
        source={
          isSelected
            ? require('../assets/Vectorselected.png')
            : require('../assets/Vector.png')
        }
        width={18}
        height={16}
      />
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MultipleOptionsec;

const styles = StyleSheet.create({
  option: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    width: '50%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
    color: '#68726E',
  },
});
