interface IService {
    init: () => PVoid;
}
type Services = Record<string, IService>;

interface IStore {
    hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;

type DesignSystemColors = Record<string, string>;
type AppearanceMode = 'light' | 'dark';
type StatusBarStyle = 'light-content' | 'dark-content' | undefined;
type ThemeColors = {
    textColor: string;
    bgColor: string;
    bg2Color: string;
};
type CurrentAppearance = {
    value: AppearanceMode;
    system: boolean;
};

type Language = 'en' | 'ru';

// SERVICES
type AppType = 'one_screen' | 'three_tabs';

// STORES
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Russian';

// SCREENS
// Props
type ExampleScreenProps = {
    value?: number;
};

// Settings
type AppearanceAction = {
    name: UIAppearance;
};

type LanguageAction = {
    name: UILanguage;
};

// API
// Responses
type CounterGetResponse = {
    value: number;
};








// field type

type FieldType = "text" | "number" | "date" | "checkbox"

type Field = {
    id: string;
    category_id: string;
    name?: string;
    type: FieldType;
    value?: string | number | typeof Date
}


interface FieldNormalized {
    [key: string]: Field
}

interface FieldState {
    byIds: FieldNormalized;
    allIds: string[];
}


interface AddField {
    type: string;
    field: Field
}

interface DeleteField {
    type: string;
    id: string
}

type FieldsActionTypes_U = (AddField & DeleteField)


// field type




// category type


interface CategoryNormalized {
    [key: string]: Category
}

interface CategoryState {
    byIds: CategoryNormalized;
    allIds: string[];
}

type Category = {
    id: string;
    name?: string;
    fieldIds: string[];
    itemIds: string[]
    nameKey?: string;
}

type CategoryRelation = {
    id: string;
    item_id: string;
}

interface AddCategory {
    type: string;
    category: Category
}

interface AddCategoryItemRelation {
    type: string;
    relation: CategoryRelation
}

interface DeleteCategory {
    type: string;
    id: string
}

type CategoriesActionTypes_U = (AddCategory & DeleteCategory & AddCategoryItemRelation); // Union Types




// category type


// item type



type Item = {
    id: string;
    category_id: string;
    name?: string;
    attributeIds: string[]
}


interface ItemNormalized {
    [key: string]: Item
}

interface ItemState {
    byIds: ItemNormalized;
    allIds: string[];
}

interface AddItem {
    type: string;
    item: Item
}

interface RemoveItem {
    type: string;
    id: string
}

type ItemActionTypes_U = (AddItem & AddAttributeRelation & RemoveItem)

// item type


//attribute type


type Attribute = {
    id: string;
    field_id: string;
    category_id: string;
    name?: string;
    type: FieldType;
    item_id: string;
    value?: boolean | string | number | Date;
}


interface AttributeNormalized {
    [key: string]: Attribute
}

interface AttributeState {
    byIds: AttributeNormalized;
    allIds: string[];
}

interface AddAttribute {
    type: string;
    attribute: Attribute
}

interface DeleteAttribute {
    type: string;
    id: string
}

type AttributeRelation = {
    id: string;
    attrubute_id: string;
}

type AddAttributeRelation = {
    type: string;
    relation: AttributeRelation;
}

type AttributeActionTypes_U = (AddAttribute & AddAttributeRelation & DeleteAttribute)


//attribbute type










// global reducer states

interface AppState {
    categories: CategoryState;
    fields: FieldState;
    items: ItemState;
    attributes: AttributeState
}

// global reducer states


// extras
interface IconProps {
    vector: icon_vector;
    name: string;
    size: number;
    color: string;
    style?: StyleProp<TextStyle>;
    onPress?: () => void | undefined
}

// handleChange,handleBlur,handleSubmit,values
interface FormElement {
    onTextChanged: (key: string, value: any) => void;
    // handleChange?: (key: string, value: any) => void;
    // handleBlur?: (key: string) => void;
    // handleSubmit?: () => void;
    // values: any;
    // setFieldValue: (key: string, value: any) => void;
}
// extras
