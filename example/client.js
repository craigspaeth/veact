const React = require('react')
const veact = require('../')
const { render } = require('react-dom')

const view = veact()

// Extract React.DOM wrapped elements and React components for
// a nice DOM building API
const { div, h1 } = view.els()

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

    h1('.header'),          // Dot notation access to styles object for
                            // automatic inline styling

    div('Some body text'),  // Strings without leading dots are inner text
    div(
      div('other div')))
)

// Finally export the component class (or stateless function
// if no stateful APIs were used to build the view)
const MyComponent = view()

render(React.createElement(MyComponent, {}), document.getElementById('content'))
