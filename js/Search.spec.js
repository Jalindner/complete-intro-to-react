/* eslint-env node, jest */
import React from 'react'
import Search from './Search'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

test('Search should render correctly', () => {
  const component = shallow(<Search />)
  let tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />)
  expect(preload.shows.length).toEqual(component.find(ShowCard).length)
})

test('Search should render correct amount of shows when searched', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change',{target:{value: searchWord}})
  const showCount = preload.shows.filter((show) => `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())).length
  console.log(showCount)
  console.log(component.find(ShowCard).length)
  expect(showCount).toEqual(component.find(ShowCard).length)
})