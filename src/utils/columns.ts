import { ScreenSize, useDimensions } from './dimensions';

export const NUM_COLUMNS = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 2,
};

export function useColumns() {
    let { screenSize } = useDimensions();
    let numColumns: number;

    switch (screenSize) {
        case ScreenSize.Medium: {
            numColumns = NUM_COLUMNS.MEDIUM;
            break;
        }
        case ScreenSize.Large: {
            numColumns = NUM_COLUMNS.LARGE;
            break;
        }
        default: {
            numColumns = NUM_COLUMNS.SMALL;
            break;
        }
    }
    return numColumns;
}