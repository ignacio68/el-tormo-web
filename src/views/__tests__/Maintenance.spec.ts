import { afterAll, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
// import { render } from '@testing-library/vue'
// import i18n from '@/i18n'
import Maintenance from '../Maintenance.vue'
const wrapper = mount(Maintenance)

afterAll(async () => {
  wrapper.unmount()
})

describe('Maintenance.vue Test', () => {
  it('renders the page', () => {
    // const wrapper = render(Maintenance)

    expect(wrapper).exist.toBeTruthy()
  })

  it.skip('renders translations', async () => {
    // const { getByText } = render(Maintenance, {})
    const subtitle = wrapper.get('#reservations')

    // expect(getByText('maintenance.description')).toBeTruthy()
    // expect(getByText('maintenance.reservations')).toBeTruthy()
    // expect(getByText('maintenance.to-reservations')).toBeTruthy()
  })
})
