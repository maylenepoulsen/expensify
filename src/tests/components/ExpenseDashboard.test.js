import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboard from '../../components/ExpenseDashboard'

test('should render the ExpenseDashboard component', () => {
  const wrapper = shallow(<ExpenseDashboard />)
  expect(wrapper).toMatchSnapshot()
})
