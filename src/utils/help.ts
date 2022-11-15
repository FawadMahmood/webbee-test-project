import { once } from "lodash";
import moment from "moment";
import { createContext, useContext } from "react";
import uuid from 'react-native-uuid';


// @ts-ignore
export const createStateContext = once(<T,>() => createContext({} as State<T>));
export const useStateContext = <T,>() => useContext(createStateContext<T>());
// export 


export const getRelevantTypeDataEmptyData = (type: FieldType) => {
    switch (type) {
        case "checkbox":
            return false
        case "date":
            return moment().format("DD/MM/YYY");
        case "number":
            return 0;
        case "text":
            return "";
    }
}


export const inputTypes = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Date', value: 'date' }
];

export type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';

export const getKeyboardType = (type: FieldType) => {
    switch (type) {
        case "number":
            return 'numeric';
        case "text":
            return 'default'
        default:
            return 'default'
    }
}

const getRandomGeneratedId = () => {
    return uuid.v4().toString();
}