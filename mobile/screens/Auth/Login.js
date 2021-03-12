import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Input from '../../components/Input';

export default function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    
    return (
        <View style={styles.container}>
            <Input
                placeholder="Email"
                onChange={email => setText({ ...state, email })}
                value={state.email}
                inputType="email-address"
            />
            <Input
                placeholder="Password"
                onChange={password => setText({ ...state, password })}
                value={state.password}
                secureTextEntry={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
