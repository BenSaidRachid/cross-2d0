import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Input from '../../components/Input';

export default function Register() {
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthdate: '',
        gender: '',
    });
    return (
        <View style={styles.container}>
            <Input
                placeholder="First name"
                onChange={firstname => setText({ ...state, firstname })}
                value={state.firstname}
            />
            <Input
                placeholder="Last name"
                onChange={lastname => setText({ ...state, lastname })}
                value={state.lastname}
            />
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
            <DatePicker
                date={state.birthdate}
                mode="date"
                placeholder="Birthdate"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        padding: 10,
                        borderColor: '#000000',
                        borderWidth: 1,
                        borderRadius: 10,
                    },
                }}
                cancelBtnText="Cancel"
                onDateChange={date => {
                    setState({ ...state, birthdate: date });
                }}
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
