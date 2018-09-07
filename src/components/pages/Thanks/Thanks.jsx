import React from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from 'themes';

function Thanks() {
  return (
    <main>
      <ThemeContext.Consumer>
        {theme => (
          <div>
            <h1>Thank you!</h1>
            <p>
              <Link to="/">Home</Link>
            </p>
          </div>
        )}
      </ThemeContext.Consumer>
    </main>
  );
}

Thanks.displayName = 'Thank you';

export default Thanks;
