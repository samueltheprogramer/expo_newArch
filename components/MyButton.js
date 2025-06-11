import React from 'react';
import { Button } from 'react-native';

export default function MyButton() {
    return <Button title="Click Me" onPress={() => alert('Hello!')} />;
}
