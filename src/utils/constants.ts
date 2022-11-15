import { moderateScale } from 'react-native-size-matters';



const fontName = "Lato"

export const theme = {
    font: {
        light: fontName + "-Light",
        light_italic: fontName + "-LightItalic",
        regular: fontName + "-Regular",
        semibold: fontName + "-Semibold",
        semibold_italic: fontName + "-SemiBoldItalic",
        extra_light: fontName + "-ExtraLight",
        extra_light_italic: fontName + "-ExtraLightItalic",
        bold: fontName + "-Bold",
        bold_italic: fontName + "-BoldItalic",
        extra_bold: fontName + "-ExtraBold",
        extra_bold_italic: fontName + "-ExtraBoldItalic",
        medium: fontName + "-Medium",
        popins_semibold: "Poppins-SemiBold",
    },
    fontSize: {
        extraVSmall: moderateScale(11, 1),
        extraSmall: moderateScale(12, 1),
        small: moderateScale(14, 1),
        medium: moderateScale(16, 1),
        large: moderateScale(18, 1),
        extraLarge: moderateScale(28, 1),
    },
    color: {
        white: '#FFFFFF',
        darkWhite: '#FAFAFA',
        black: '#2D2D2D',
        red: '#FF5852',
        orange: '#FF5C5C',
        grey: '#A4A4A4',
        priceGrey: '#C4C4C4',
        lightGrey: '#E8E8E8',
        primaryColor: '#0253B3',
        stepIndicatorLabel: '#0458BD',
        stepIndicator: '#0050B6',
        orderStatusDelivered: '#63CE05',
        orderStatusOnProcess: '#64B1FF',
        wishlist: '#FF4A88',
        transparent: 'transparent',
        inactive: '#AAAAAA',
        blue: '#2195F3',
        green: "#178F68",
        dark_green: "#198068",
        goldenGreen: "#C3B478",
        blackOverlay: "rgba(0, 0, 0, 0.7)"
    },
}