import { describe, expect, test } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import BaseStatus from '@/components/atoms/BaseStatus/BaseStatus.vue'

describe('BaseStatus', () => {
  test('renders default status text when status prop is not provided', () => {
    const wrapper = shallowMount(BaseStatus)

    expect(wrapper.text()).toBe('')
  })

  test('renders enter status text and classes when status prop is "enter"', () => {
    const wrapper = shallowMount(BaseStatus, {
      props: {
        status: 'enter',
      },
    })

    expect(wrapper.text()).toBe('Вошел')

    expect(wrapper.classes()).toContain('base-status')

    expect(wrapper.classes()).toContain('base-status--enter')
  })

  test('renders exit status text and classes when status prop is "exit"', () => {
    const wrapper = shallowMount(BaseStatus, {
      props: {
        status: 'exit',
      },
    })

    expect(wrapper.text()).toBe('Вышел')

    expect(wrapper.classes()).toContain('base-status')

    expect(wrapper.classes()).toContain('base-status--exit')
  })
})
