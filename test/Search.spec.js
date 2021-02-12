import { mount } from '@vue/test-utils'
import Search from '@/components/movie/search.vue'

describe('Search', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Search)
    expect(wrapper.vm).toBeTruthy()
  })
})
