import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Header() {
  const navigation = useNavigation();

  const handleOnpress = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnpress}>
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>EP Delivery</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15 
  }
});

export default Header