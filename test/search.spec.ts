import { mount } from '@vue/test-utils'
import search from '@/components/movie/search.vue';

describe('search', () => {
  test('mounts properly', () => {
    const wrapper = mount(search)
    expect(wrapper.vm).toBeTruthy()
  })

  // test('renders properly', () => {
  //   const wrapper = mount(search)
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
