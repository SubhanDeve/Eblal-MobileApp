import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Optionsec = (props: any) => {
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

export default Optionsec;

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#F8FCFB',
    padding: 12,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: '#68726E',
  },
});
