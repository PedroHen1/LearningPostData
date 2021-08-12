import React, { useState } from 'react';

import {
    Button,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

import axios from 'axios';

const PostData = () => {

    const [user, setUser] = useState({
        name: '',
        email: ''
    }); 

    const handleSubmit = () => {
        axios.post('https://webhook.site/8d851937-6b5f-427c-bebe-a5f5222a6585', user)
            .then(response => {
            console.log(response);
        });
    }

    return (
        <View>
            <TextInput style={styles.input} defaultValue={user.name} onChangeText={text => setUser({ ...user, name: text })}  />
            <TextInput style={styles.input} defaultValue={user.email} onChangeText={text => setUser({ ...user, email: text })} />
            <Button title="Click" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
        color: 'black',
    }
});


export default PostData;