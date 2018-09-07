import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeContext, * as themes from 'themes';

import { Home, About, Delivery, Thanks } from 'components/pages';

export default function App({ theme }) {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ThemeContext.Consumer>
        {th => (
          <div
            style={{
              backgroundColor: th.backgroundColor,
              padding: '10px',
              height: '100vh',
            }}
          >
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/delivery" component={Delivery} />
                <Route path="/thanks" component={Thanks} />
              </Switch>
            </Router>
          </div>
        )}
      </ThemeContext.Consumer>
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
