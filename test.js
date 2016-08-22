/* eslint-env mocha */
const veact = require('./')
const React = require('react')
const sinon = require('sinon')
const { renderToString } = require('react-dom/server')

const view = veact()
const { div } = view.els()

describe('veact', () => {
  let comp, render

  beforeEach(() => {
    view.render(() => div('Hello World'))
    render = () => {
      comp = view()
      return renderToString(React.createElement(comp))
    }
  })

  it('renders a react component', () => {
    render().should.containEql('Hello World')
  })

  it('attaches inline styles', () => {
    view.styles({ div: { color: 'red' } })
    view.render(() => div('.div', 'Hello World'))
    render().should.containEql('red')
  })

  it('accepts array children', () => {
    view.render(() => div([div('foo'), div('bar')]))
    render().should.containEql('foo')
    render().should.containEql('bar')
  })

  it('converts to stateful when using lifecycle methods', () => {
    const callback = sinon.spy()
    view.on('componentDidUpdate', callback)
    view().prototype.componentDidUpdate()
    callback.called.should.be.ok()
  })
})
