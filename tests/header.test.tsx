import { h } from 'preact'
import Header from '../src/components/header'
import { shallow } from 'enzyme'

describe('Test header contents', () => {
  test('Header brand is beepody', () => {
    const context = shallow(<Header />)
    expect(context.find('.navbar-brand').text()).toBe('Beepody')
  })
})
