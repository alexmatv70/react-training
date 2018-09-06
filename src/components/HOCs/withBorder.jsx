import React from 'react';
import ThemeContext from 'themes';

/* eslint-disable react/prefer-stateless-function */
function withBorder(WrappedComponent) {
  class WithBorder extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <div
              style={{
                border: `1px solid ${theme.borderColor}`,
                display: 'inline-block',
              }}
            >
              <WrappedComponent {...this.props} />
            </div>
          )}
        </ThemeContext.Consumer>
      );
    }
  }

  WithBorder.displayName = `WithBorder(${WrappedComponent.displayName})`;

  return WithBorder;
}

export default withBorder;
