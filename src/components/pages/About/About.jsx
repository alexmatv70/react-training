import React from 'react';

import ThemeContext from 'themes';

import {
  Button, BorderedButton, ToggleButton, BorderedToggleButton, CheckBox,
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
          </div>
        )}
      </ThemeContext.Consumer>
    </main>
  );
}

About.displayName = 'About';

export default About;
