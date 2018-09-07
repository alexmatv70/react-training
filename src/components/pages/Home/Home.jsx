import React from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from 'themes';

import { CheckBox, Button } from 'components/controls';

const items = [
  {
    name: 'Adidas Boys 3S WV Shorts - Navy/White',
    price: 14.63,
    quantity: 10,
  },
  {
    name: 'Briga Core Training Tee - Nvy/Skyt',
    price: 4.07,
    quantity: 20,
  },
  {
    name: 'Adidas Girls 3 Stripe Tights - Black/White',
    price: 17.89,
    quantity: 3,
  },
];

const ItemsList = function(items) {
  const listItems = items.map(item => (
    <tr key={item.name}>
      <td style={{ padding: '5px 10px' }}>{item.name}</td>
      <td style={{ padding: '5px 10px' }}>
        <strong>€ {item.price}</strong>
      </td>
      <td>
        <input style={{ width: '40px' }} type="number" name="quantity" min="0" max={item.quantity} defaultValue="0" />
      </td>
    </tr>
  ));
  return (
    <table>
      <tbody>{listItems}</tbody>
    </table>
  );
};

function Home() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div>
          <h1>Sports Store</h1>
          {ItemsList(items)}
          <p>
            <Link to="/delivery">Buy</Link>
          </p>
          <p>
            <Link to="/About">About</Link>
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

Home.displayName = 'Home';

export default Home;
