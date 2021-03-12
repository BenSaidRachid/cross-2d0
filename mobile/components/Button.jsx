import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Button() {
    return (
        <TouchableOpacity  onPress={onPress}>
            <Text>Press Here</Text>
        </TouchableOpacity>
    );
}

export default Button;
