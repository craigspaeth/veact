# veact

Veact is an opinionated library for building React components using a plain Javascript API.

## Example

````javascript
const veact = require('veact')
const OtherComponent = require('./other-component')

const view = veact()

// Extract React.DOM wrapped elements and React component class/functions for a nice DOM building API
const { div, h1, othercomponent } = view.els({
  othercomponent: OtherComponent
})

// Declare an inline styles object (note `h1('.header')` below)
view.styles({
  header: {
    fontSize: '24px',
    color: 'magenta'
  }
})

// Add a render function
view.render((props, ctx) =>
  div(                      // Flexible API for omitting props

    h1('.header'),          // Dot notation access to styles object for a convenient way to inline style

    div('Some body text'),  // Strings without leading dots are inner text
    div(
      othercomponent(),     // 
      div({ some: 'props' }, 'some text')))
)

// Finally export the component class (or stateless function
// if no stateful APIs were used to build the view)
const MyComponent = view()
````

## Why

JSX or Hyperscript or Template Strings, Decorators or Mixins, Classes or Stateless Functional Components, JSS or BEM or CSS modules... oh my!

There's a wonderful plethora of ways to write React components today. Veact is an opinionated approach that encourages using a minimal set of programming features. For instance, instead of having to write [stateless functional components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) differently than class-based components—Veact says "no classes", "no `this`" only a single `view.render(() => ReactElements)` API that automatically determines if it should be stateless or not based on how you built it with other `view` APIs.

So with that said, here's a quick Veact manifesto of sorts:

* Minimal use of programming features
* No `this` or classes, pragmatically functional
* Inline styling, with a little help to make that nice
* Flexible arguments for terser APIs
* Obvious wrapper API for using external components/decorators/whatever

## Contributing

Please fork the project and submit a pull request with tests. Install node modules `npm install` and run tests with `npm test`.

## License

MIT
