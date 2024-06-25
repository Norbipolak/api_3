/*
1. Mouse Events

click: Triggered when an element is clicked.
dblclick: Triggered when an element is double-clicked.
mousedown: Triggered when a mouse button is pressed down.
mouseup: Triggered when a mouse button is released.
mousemove: Triggered when the mouse is moved.
mouseover: Triggered when the mouse pointer is moved onto an element.
mouseout: Triggered when the mouse pointer is moved out of an element.
mouseenter: Triggered when the mouse pointer is moved onto an element (does not bubble).
mouseleave: Triggered when the mouse pointer is moved out of an element (does not bubble).

2. Keyboard Events

keydown: Triggered when a key is pressed down.
keyup: Triggered when a key is released.
keypress: Triggered when a key is pressed down and released (deprecated, use keydown and keyup instead).

3. Form Events

submit: Triggered when a form is submitted.
change: Triggered when an input, select, or textarea value changes.
input: Triggered when an input event occurs in an input, select, or textarea (covers more scenarios than change).
focus: Triggered when an element receives focus.
blur: Triggered when an element loses focus.
reset: Triggered when a form is reset.

4. Window Events (on the document level)

resize: Triggered when the window is resized.
scroll: Triggered when the document is scrolled.
load: Triggered when the whole page has loaded, including all dependent resources like images.
DOMContentLoaded: Triggered when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
beforeunload: Triggered before the document is about to be unloaded.
unload: Triggered when the document or a child resource is being unloaded.

5. Clipboard Events

copy: Triggered when copying text.
cut: Triggered when cutting text.
paste: Triggered when pasting text.

6. Focus Events

focusin: Triggered when an element is about to receive focus (bubbles).
focusout: Triggered when an element is about to lose focus (bubbles).

7. Drag and Drop Events

dragstart: Triggered when the user starts dragging an element.
drag: Triggered while an element is being dragged.
dragenter: Triggered when a dragged element enters a valid drop target.
dragover: Triggered when an element is being dragged over a valid drop target.
dragleave: Triggered when a dragged element leaves a valid drop target.
drop: Triggered when a dragged element is dropped on a valid drop target.
dragend: Triggered when a drag operation is ended (usually by releasing the mouse button).

8. Media Events

play: Triggered when media playback is started.
pause: Triggered when media playback is paused.
ended: Triggered when media playback reaches the end.
timeupdate: Triggered when the current playback position has changed.

9. Touch Events (for touch-enabled devices)

touchstart: Triggered when a touch point is placed on the touch surface.
touchmove: Triggered when a touch point is moved along the touch surface.
touchend: Triggered when a touch point is removed from the touch surface.
touchcancel: Triggered when a touch event is canceled.

10. Miscellaneous Events

contextmenu: Triggered when the context menu is opened (usually by right-clicking).
wheel: Triggered when the mouse wheel is rotated.
pointerdown: Triggered when a pointer (mouse, touch, pen) is pressed down.
pointerup: Triggered when a pointer is released.
pointermove: Triggered when a pointer is moved.
pointerover: Triggered when a pointer is moved onto an element.
pointerout: Triggered when a pointer is moved out of an element.
pointerenter: Triggered when a pointer is moved onto an element (does not bubble).
pointerleave: Triggered when a pointer is moved out of an element (does not bubble).
*/ 

/*
pushState example 
->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>History API Example</title>
</head>
<body>
  <nav>
    <a href="#" id="home-link">Home</a>
    <a href="#" id="about-link">About</a>
  </nav>
  <div id="content">
    <p>Welcome to the Home page!</p>
  </div>

  <script>
    // Function to update the content based on the current state
    function updateContent(state) {
      const content = document.getElementById('content');
      if (state.page === 'home') {
        content.innerHTML = '<p>Welcome to the Home page!</p>';
      } else if (state.page === 'about') {
        content.innerHTML = '<p>About us: We are a fictional company.</p>';
      }
    }

    // Event listeners for navigation links
    document.getElementById('home-link').addEventListener('click', function(event) {
      event.preventDefault();
      const state = { page: 'home' };
      history.pushState(state, '', '/home');
      updateContent(state);
    });

    document.getElementById('about-link').addEventListener('click', function(event) {
      event.preventDefault();
      const state = { page: 'about' };
      history.pushState(state, '', '/about');
      updateContent(state);
    });

    // Handle the popstate event to update the content when the user navigates through history
    window.addEventListener('popstate', function(event) {
      if (event.state) {
        updateContent(event.state);
      }
    });

    // Initial state setup
    if (!history.state) {
      const initialState = { page: 'home' };
      history.replaceState(initialState, '', '/home');
      updateContent(initialState);
    }
  </script>
</body>
</html>

*/