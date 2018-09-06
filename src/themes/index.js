import React from 'react';
import defaultTheme from './default';
import redTheme from './red';

const ThemeContext = React.createContext(defaultTheme);

export default ThemeContext;

export { defaultTheme, redTheme };
