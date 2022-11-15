import { combineReducers } from 'redux';


import categories from './categories/reducers';
import fields from './fields/reducers';
import items from './items/reducers';
import attributes from './attributes/reducers';




const rootReducer = combineReducers({
    categories,
    fields,
    items,
    attributes
});

export default rootReducer;
