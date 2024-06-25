/*
Mi az a createContext() 
*/

/*

The line of code you've provided is for creating a context in a React application. Here's an example of how you might use this context in a React application.

Create the Context: First, create the context in a separate file, such as MBContext.js.
*/
import React, { createContext } from 'react';

export const MBContext = createContext();

/*
Create a Provider Component: Next, create a provider component that will use this context to pass down data to its children.
*/
import React, { useState } from 'react';
import { MBContext } from './MBContext';

const MBProvider = ({ children }) => {
  const [state, setState] = useState({ key: 'value' }); // Replace with your state and initial value

  return (
    <MBContext.Provider value={{ state, setState }}>
      {children}
    </MBContext.Provider>
  );
};

export default MBProvider;

/*
Wrap Your App with the Provider: Wrap your main app component with the provider to make the context available throughout your application.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MBProvider from './MBProvider';

ReactDOM.render(
  <MBProvider>
    <App />
  </MBProvider>,
  document.getElementById('root')
);

/*
Consume the Context: Finally, consume the context in any component that needs the shared state.
*/

import React, { useContext } from 'react';
import { MBContext } from './MBContext';

const MyComponent = () => {
  const { state, setState } = useContext(MBContext);

  return (
    <div>
      <p>{state.key}</p>
      <button onClick={() => setState({ key: 'new value' })}>Change Value</button>
    </div>
  );
};

export default MyComponent;
/*
This example shows how to set up and use a context in a React application. 
The MBContext is created using createContext(), and a provider component is used to pass down the state and a function to update it. 
Any component can then consume this context using the useContext hook.
********************************************************************************************************************************
*/

/*
Nagyon fontos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
eventListener a window-ra mlghozzá a resize-ra 
*/ 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Window Resize Event Listener</title>
  <style>
    .image-container {
      width: 50vw;
      height: 30vh;
      overflow: hidden;
      border: 1px solid #ccc;
    }
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
</head>
<body>
  <div class="image-container">
    <img src="path_to_your_image.jpg" alt="Example Image">
  </div>

  <script>
    window.addEventListener('resize', function() {
      console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);

      // Example: Dynamically update the size of an element
      const imageContainer = document.querySelector('.image-container');
      imageContainer.style.width = (window.innerWidth / 2) + 'px';
      imageContainer.style.height = (window.innerHeight / 3) + 'px';
      /*
      és attól függően, hogy mekkora innerWidth meg az innerHeight be tudjuk állítani dinamikusan, hogy mekkora legyen mondjuk ebben az esetben 
      a imageContainer!!! 
      ehhez még az is kell, hogy a imageContainer-nek az width-je meg a height-ja alapból úgy legyen megadva, hogy vh meg vvw!!! 
      */

    //Trigger the resize event listener on page load
    window.dispatchEvent(new Event('resize'));

/*
The dispatchEvent method is a way to manually trigger events on an element. 
In the context of the example, window.dispatchEvent(new Event('resize')) is used to simulate a resize event. 

dispatchEvent Method
The dispatchEvent method is part of the EventTarget interface, 
which is implemented by various DOM elements, including the window object. 
This method allows you to create and dispatch events programmatically, 
which can be useful for testing or triggering event listeners without waiting for the actual event to occur naturally
*/

// Create a custom event with additional data
const myEvent = new CustomEvent('myCustomEvent', { detail: { someData: 'example' } });

// Add an event listener for the custom event
window.addEventListener('myCustomEvent', function(event) {
  console.log('Custom event triggered:', event.detail.someData);
});

// Dispatch the custom event
window.dispatchEvent(myEvent);

/*
nagyon fontos, hogy lehet megcsinálni a pagination-t


Imagine you have an API endpoint that returns a list of items with pagination. The endpoint URL might look like this:

https://api.example.com/items?page=1&limit=10

page is the current page number.
limit is the number of items per page.

Nagyon fontos a pagination-nál, hogy kell egy page, meg kell egy limit is!!! 
és ezeket fogjuk majd megjeleníteni az url-ben

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagination Example</title>
</head>
<body>
  <div id="items-container"></div>
  <button id="prev-page">Previous Page</button>
  <button id="next-page">Next Page</button>

  <script>
    // Base URL of the API
    const baseUrl = 'https://api.example.com/items';

    // Function to fetch and display items
    async function fetchAndDisplayItems(page, limit) {
      // Create URLSearchParams for the query parameters
      const params = new URLSearchParams({ page, limit });
      
      try {
        // Fetch data from the API
        const response = await fetch(`${baseUrl}?${params.toString()}`);
        const data = await response.json();

        // Display the items
        const itemsContainer = document.getElementById('items-container');
        itemsContainer.innerHTML = data.items.map(item => `<p>${item.name}</p>`).join('');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Initial pagination state
    let currentPage = 1;
    const itemsPerPage = 10;

    // Event listeners for pagination buttons
    document.getElementById('prev-page').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        fetchAndDisplayItems(currentPage, itemsPerPage);
      }
    });

    document.getElementById('next-page').addEventListener('click', () => {
      currentPage++;
      fetchAndDisplayItems(currentPage, itemsPerPage);
    });

    // Fetch and display the initial set of items
    fetchAndDisplayItems(currentPage, itemsPerPage);
  </script>
</body>
</html>

*/
