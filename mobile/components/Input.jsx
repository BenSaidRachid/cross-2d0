import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function Input({
    value = '',
    placeholder = '',
    style = {},
    onChange = () => {},
    inputType = 'default',
    ...rest
}) {
    return (
        <View style={{ marginBottom: 16 }}>
            <TextInput
                style={[styles.defaultStyle, style]}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                keyboardType={inputType}
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    defaultStyle: {
        padding: 10,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
    },
});

export default Input;
