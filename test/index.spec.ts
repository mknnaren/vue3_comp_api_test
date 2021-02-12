import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue';

describe('index', () => {
  test('mounts properly', () => {
    const wrapper = mount(index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = mount(index)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
