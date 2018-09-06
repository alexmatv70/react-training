import React from 'react';

import ThemeContext from 'themes';

import { CheckBox, Button } from 'components/controls';

var items = [
  {
    name: 'Adidas Boys 3S WV Shorts - Navy/White',
    price: 14.63,
  },
  {
    name: 'Briga Core Training Tee - Nvy/Skyt',
    price: 4.07,
  },
  {
    name: 'Adidas Girls 3 Stripe Tights - Black/White',
    price: 17.89,
  },
];

function ItemsList(items) {
  const listItems = items.map(item => (
    <li key={item.name}>
      {item.name} €{item.price} <CheckBox />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Home() {
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
            {ItemsList(items)}
            <Button text="Next" value="next" />
          </div>
        )}
      </ThemeContext.Consumer>
    </main>
  );
}

Home.displayName = 'Home';

export default Home;
