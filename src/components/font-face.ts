import { createGlobalStyle } from 'styled-components';

const fontDirectory = '/static/fonts/';

export default createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
        url('${fontDirectory}OpenSans-Italic.woff2') format('woff2'),
        url('${fontDirectory}OpenSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'),
        url('${fontDirectory}OpenSans-BoldItalic.woff2') format('woff2'),
        url('${fontDirectory}OpenSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url('${fontDirectory}OpenSans-Light.woff2') format('woff2'),
        url('${fontDirectory}OpenSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('${fontDirectory}OpenSans-Bold.woff2') format('woff2'),
        url('${fontDirectory}OpenSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${fontDirectory}OpenSans-Regular.woff2') format('woff2'),
        url('${fontDirectory}OpenSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Light Italic'), local('OpenSans-LightItalic'),
        url('${fontDirectory}OpenSans-LightItalic.woff2') format('woff2'),
        url('${fontDirectory}OpenSans-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

#__next b, #__next strong {
    font-weight: 700;
}

html, body { overflow-x: hidden; }
`;
