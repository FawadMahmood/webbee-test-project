import * as React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import { IconProps as VectorProps } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';



// {...props as IconProps}
const VectorIcon = (props: IconProps = {
    vector: "FontAwesome",
    name: "email",
    color: "blue",
    size: 20,
    onPress: () => { }
}) => {
    let _props = { ...props } as VectorProps;

    // @ts-ignore
    delete _props.vector;


    switch (props.vector) {
        case "FontAwesome": {
            return (<FontAwesome {..._props} onPress={props.onPress} />);
        }
        case "MaterialCommunityIcons":
            return (<MaterialCommunityIcons {..._props} />)
        case "AntDesign":
            return (<AntDesign {..._props} />)
        case "Entypo":
            return (<Entypo {..._props} />)
        case "EvilIcons":
            return (<EvilIcons {..._props} />)
        case "Feather":
            return (<Feather {..._props} />)
        case "FontAwesome5":
            return (<FontAwesome5 {..._props} />)
        case "Fontisto":
            return (<Fontisto {..._props} />)
        case "Foundation":
            return (<Foundation {..._props} />)
        case "Ionicons":
            return (<Ionicons {..._props} />)
        case "MaterialIcons":
            return (<MaterialIcons {..._props} />)
        case "Octicons":
            return (<Octicons {..._props} />)
        case "SimpleLineIcons":
            return (<SimpleLineIcons {..._props} />)
        case "Zocial":
            return (<Zocial {..._props} />)
    }

    return (
        <FontAwesome {..._props} />
    );



};

export default VectorIcon;

const styles = StyleSheet.create({
    container: {}
});