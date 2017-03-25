import React from 'react'
import { Link } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
	propTypes: {
		searchTerm: string,
		dispatch: func
	},
	contextTypes: {
		router: object
	},
	goToSearch (event) {
		event.preventDefault()
		this.context.router.transitionTo('/search')
	},
	handleSearchTermChange (event) {
		this.props.dispatch(setSearchTerm(event.target.value))
	},
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
        	<input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})
const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm
	}
}

export default connect(mapStateToProps)(Landing)
