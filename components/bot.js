import React, { Component } from 'react';
import ChatBot from 'react-native-chatbot';
import { Container, 
Header,
 Left, 
 Right, 
 Body, 
 Title,
 Footer, 
 FooterTab, 
 Button,
 Icon, 
 Text, 
 Badge } from 'native-base';

const steps = [
{
id: '1',
message: 'What is your name?',
trigger: '2',
},
{
id: '2',
user: true,
trigger: '3',
},
{
id: '3',
message: 'Hi {previousValue}, nice to meet you!',
end: true,
},
];

export default class GeneralExample extends Component {
render() {
return (
<ChatBot
steps={[
{
id: '1',
message: 'What is your name?',
trigger: '2',
},
{
id: '2',
user: true,
trigger: '3',
},
{
id: '3',
message: 'Hi {previousValue}, nic to meet you!',
end: true,
},
]}
/>

);
}
}