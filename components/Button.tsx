import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = (props: any) => {
  const {text, bgcolor, color, onPress} = props;
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: bgcolor}]}
        onPress={onPress}>
        <Text style={[styles.btntext, {color: color}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
});
