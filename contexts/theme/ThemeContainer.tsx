import React from 'react';

import { ColorModeProvider, CSSReset, ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

const ThemeContainer: React.FC = ({children}) => {
    return (
        <ChakraThemeProvider theme={}>
            <ColorModeProvider value="light">
                <EmotionThemeProvider theme={{}}>
                    <CSSReset/>
                    {children}
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChakraThemeProvider>
    );
}