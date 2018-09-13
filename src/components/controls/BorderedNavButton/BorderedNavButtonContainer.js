import {
  withHandlers, setDisplayName, compose, mapProps,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import BorderedButton from '../BorderedButton';

export const enhance = compose(
  setDisplayName('BorderedNavButton'),
  withRouter,
  withHandlers({
    onClick: ({ to, history }) => () => {
      history.push(to);
    },
  }),
  mapProps(({ text, value, onClick }) => ({ text, value, onClick })),
);

export default enhance(BorderedButton);
