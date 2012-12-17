# cell-ev

> Cross-browser event-binding for the DOM.

## Installation

### Component

`cell-ev` is available as a [component](https://github.com/component/component).

    $ component install qualiancy/cell-ev

## Usage

### .bind (element, event, handle)

* **@param** _{Node}_ DOM element
* **@param** _{String}_ event 
* **@param** _{Function}_ handler 

Add a handler as listener for event on
element. If planning to `.unbind()`, the
handler should not be defined inline.

```js
var ev = require('cell-ev');

function domScroll (e) {
  // detect location, etc
}

ev.bind(window, 'scroll', domScroll);
```


### .unbind (element, event, handle)

* **@param** _{Node}_ DOM element
* **@param** _{String}_ event 
* **@param** _{Function}_ handler 

Remove a handler for event that was previously
bound to an element. Arguments must be passed
the same as when `.bind()`.

```js
ev.unbind(window, 'scroll', domScroll);
```


## License

(The MIT License)

Copyright (c) 2012 Jake Luer <jake@qualiancy.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
