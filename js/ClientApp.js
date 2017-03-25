import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import data from '../public/data.json'
import { Provider } from 'react-redux'
import store from './store'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match pattern='/search' component={(props) => <Search shows={data.shows} {...props} />} />
            <Match pattern='/details/:id' component={(props) => {
              const show = data.shows.filter((show) => props.params.id === show.imdbID)
              return <Details show={show[0]} {...props} />
            }} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
