# use-size-hook

[![npm version](https://badge.fury.io/js/create-react-context-data.svg)](//npmjs.com/package/use-size-hook)


## A simple custom hook to keep track of a component's width and height;

--

# Installation

Open the terminal in your project's root folder and run the following command:

```
npm install use-size-hook --save
```

# Usage

### 1 Import the hook

Import the hook on top of any component you want to track the size of.

```javascript
import useSize from 'use-size-hook';
```

### 2 Destructure target and size

Call the hook inside the component.
The hook returns an array of two elements:

1. `target` is a reference to the dom, you should pass it asa `ref` prop to the dom element of your component you want to track the size of.
2. `currentSize` is an object containing the current `width` and `height` of the element you are tracking. Measurement is in pixels.

```javascript
import React from 'react';
import useSize from 'use-size-hook';

const TestComponent = () => {
  const [target, currentSize] = useSize();

  return (
    <div ref={target}>
      Height: {currentSize.height} - Width: {currentSize.with}
    </div>
  );
};

export default TestComponent;
```
