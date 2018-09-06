import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext, * as themes from 'themes';

import { Home } from 'components/pages';

export default function App({ theme }) {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Home />
    </ThemeContext.Provider>
  );
}

App.displayName = 'App';

App.propTypes = {
  theme: PropTypes.string,
};

App.defaultProps = {
  theme: 'defaultTheme',
};
