import { Colors, Typography } from 'react-native-ui-lib';
import { theme } from './constants';



export const configureDesignSystem = (): void => {
    Colors.loadColors(theme.color);

    const weights: any = {};
    for (const [key, value] of Object.entries(theme.font)) {
        weights["w" + key] = { fontFamily: value }
    }

    Typography.loadTypographies({
        vsmall: { fontSize: theme.fontSize.extraSmall },
        small: { fontSize: theme.fontSize.small },
        medium: { fontSize: theme.fontSize.medium },
        large: { fontSize: theme.fontSize.large },
        vlarge: { fontSize: theme.fontSize.extraLarge },
        ...weights,
    });
};