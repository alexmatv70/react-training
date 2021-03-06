import React from 'react';
import PropTypes from 'prop-types';
import { withToggle } from 'components/HOCs';

function CheckBox({
  text, isActive, onClick, ...rest
}) {
  return <input type="checkbox" onChange={onClick} value={text} {...rest} checked={isActive} />;
}

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

CheckBox.defaultProps = {
  text: '',
  isActive: false,
};

export default withToggle(CheckBox);
