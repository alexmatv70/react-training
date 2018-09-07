import React from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from 'themes';

function Delivery() {
  return (
    <main>
      <ThemeContext.Consumer>
        {theme => (
          <div>
            <h1>Delivery details</h1>
            <p>
              Please provide delivery details and click <strong>Submit</strong>
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>
                    <input type="text" name="name" size="40" />
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    <input type="text" name="addr" size="40" />
                  </td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>
                    <input type="tel" name="phone" size="40" />
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <Link to="/thanks">Submit</Link>
            </p>
            <p>
              <Link to="/">Home</Link>
            </p>
          </div>
        )}
      </ThemeContext.Consumer>
    </main>
  );
}

Delivery.displayName = 'Delivery details';

export default Delivery;
