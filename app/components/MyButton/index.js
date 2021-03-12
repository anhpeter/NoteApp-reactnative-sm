import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Color from '../../constants/Color';

export default function MyButton({children, textStyle = {}, color, ...rest}) {
    return (
        <TouchableOpacity {...rest}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}
