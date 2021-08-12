import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import axios from 'axios';

import PostData from './PostData';

const App = () => {
  // const result = {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // }
  // axios({
  //   method: 'post',
  //   url: 'https://webhook.site/4f334f37-0aa8-47e3-b1ff-8743d81fd7e1',
  //   data: result
  // });


  //ANOTHER WAY TO DO.

  // axios.post('https://webhook.site/4f334f37-0aa8-47e3-b1ff-8743d81fd7e1', {
  //   teste: '1234'
  // }).then(response => {
  //   console.log(response);
  // });


  // ANOTHER WAY TO DO, IF USING CLASS COMPONENT 

  //   async componentDidMount() {
  //     try {
  //       await fetch('https://webhook.site/4f334f37-0aa8-47e3-b1ff-8743d81fd7e1', {
  //         method: 'post',
  //         mode: 'no-cors',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           username: 'Pedro Henrique',
  //           password: '123abcs',
  //         })
  //       });
  //     } catch(e) {
  //       console.log(e);
  //     }
  //   }

  return (
    <View>
      <Text>Learning...</Text>
      <PostData />
    </View>
  )
}

export default App;