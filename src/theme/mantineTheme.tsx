import { createTheme } from '@mantine/core';

const theme = createTheme({
    /** Put your mantine theme override here */
    defaultGradient: {
        from: 'orange',
        to: 'red',
        deg: 45,
    },
    fontFamily: 'Roboto, sans-serif',
    headings: {
        fontFamily: 'Roboto, sans-serif',
    },
    fontSmoothing: true,
});

export default theme;
