import React from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from 'themes';

import {
  Button,
  BorderedButton,
  ToggleButton,
  BorderedToggleButton,
  CheckBox,
  BorderedNavButton,
} from 'components/controls';

function About() {
  return (
    <main>
      <ThemeContext.Consumer>
        {theme => (
          <div
            style={{
              backgroundColor: theme.backgroundColor,
              height: '100%',
            }}
          >
            <Button text="Button" value="button1" />
            <BorderedButton text="Bordered Button" value="button2" />
            <ToggleButton text="Toggle Button" value="button3" toggled />
            <BorderedToggleButton text="Bordered Toggle Button" value="button4" />
            <CheckBox text="Check Box" />
            <Link to="/home">Go Home</Link>
            <BorderedNavButton to="/home" text="Go Home" value="goHome" />
          </div>
        )}
      </ThemeContext.Consumer>
    </main>
  );
}

About.displayName = 'About';

export default About;
