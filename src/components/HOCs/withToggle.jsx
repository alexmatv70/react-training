import React from 'react';
import PropTypes from 'prop-types';

function withToggle(WrappedComponent) {
  class WithToggle extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isToggled: props.toggled };

      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
      const { clickHandler } = this.props;

      // Call a passed in handler if any.
      if (clickHandler) {
        clickHandler(event);
      }

      this.setState(prevState => ({ isToggled: !prevState.isToggled }));
    }

    render() {
      // Destructure toggled and onClick because we do not pass them into the WrappedComponent.
      const { toggled, onClick, ...passThroughProps } = this.props;
      const { isToggled } = this.state;

      return <WrappedComponent {...passThroughProps} onClick={this.clickHandler} isActive={isToggled} />;
    }
  }

  WithToggle.displayName = `WithToggle(${WrappedComponent.displayName})`;

  WithToggle.propTypes = {
    toggled: PropTypes.bool,
  };

  WithToggle.defaultProps = {
    toggled: false,
  };

  return WithToggle;
}

export default withToggle;
