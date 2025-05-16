# text-animator

A simple and lightweight JavaScript Typewriter effect library for animating typing of multiple words or phrases sequentially.

---

## Features

- Animate typing of multiple words or sentences
- Configurable typing speed and pause time between words
- Easy to use with plain JavaScript or popular frameworks like React, Next.js, Vue, and more
- Provides a `destroy()` method to stop the animation and clean up timers

---

## Installation

```bash
npm install text-animator
```

## Usage
### 1. Reactjs
```javascript
import React, { useEffect, useRef } from "react";
import Typewriter from "text-animator";

const TypewriterComponent = () => {
const elementRef = useRef(null);
const words = [
    "Type what you want to build here...",
    "Enter your prompt here...",
    "Describe what you want to build...",
];

useEffect(() => {
    const typewriter = new Typewriter(elementRef.current, words, {
    typingSpeed: 40,
    pauseTime: 500,
    });

    return () => typewriter.destroy();
}, []);

return <div ref={elementRef} style={{ fontFamily: "monospace", fontSize: 20 }} />;
};

export default TypewriterComponent;
```

### 2. Vanilla JS
```js
import Typewriter from "text-animator";

const element = document.getElementById("typewriter");
const words = [
  "Type what you want to build here...",
  "Enter your prompt here...",
  "Describe what you want to build..."
];

const typewriter = new Typewriter(element, words, {
  typingSpeed: 40,
  pauseTime: 500,
});
```
- add the following html to your page
```html
<div id="typewriter"></div>
```

### 3. Nextjs
```js
import { useEffect, useRef } from "react";
import Typewriter from "text-animator";

export default function Home() {
  const elementRef = useRef(null);
  const words = [
    "Type what you want to build here...",
    "Enter your prompt here...",
    "Describe what you want to build...",
  ];

  useEffect(() => {
    const typewriter = new Typewriter(elementRef.current, words, {
      typingSpeed: 40,
      pauseTime: 500,
    });

    return () => typewriter.destroy();
  }, []);

  return (
    <main>
      <h1>Next.js Typewriter Example</h1>
      <div ref={elementRef} style={{ fontFamily: "monospace", fontSize: 20 }} />
    </main>
  );
}
```

### 4. Vue3
```html
<template>
  <div ref="typewriter" class="typewriter-text"></div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue";
    import Typewriter from "text-animator";

    const typewriter = ref(null);
    const words = [
    "Type what you want to build here...",
    "Enter your prompt here...",
    "Describe what you want to build...",
    ];

    let typewriterInstance = null;

    onMounted(() => {
    typewriterInstance = new Typewriter(typewriter.value, words, {
        typingSpeed: 40,
        pauseTime: 500,
    });
    });

    onBeforeUnmount(() => {
    if (typewriterInstance) {
        typewriterInstance.destroy();
    }
    });
</script>
```

### 5. Javascript
```html
<!DOCTYPE html>
<html>
<head>
  <title>Typewriter Demo</title>
</head>
<body>
  <div id="output"></div>

  <script type="module">
    import Typewriter from 'text-animator';

    const element = document.getElementById('output');
    const words = [
      "Type what you want to build here...",
      "Enter your prompt here...",
      "Describe what you want to build..."
    ];

    const typewriter = new Typewriter(element, words, {
      typingSpeed: 40,
      pauseTime: 500
    });

    // Optional: Stop it later if needed
    // setTimeout(() => typewriter.destroy(), 10000);
  </script>
</body>
</html>
```

## License
MIT ©Pankaj Kumar

# Author
Pankaj Kumar
pankaj.ky3007@gmail.com 
github.com/PankajKumar1947