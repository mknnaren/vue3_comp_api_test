import { mount, createLocalVue  } from '@vue/test-utils'
import search from '@/components/movie/search.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('search', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()
  test('mounts properly', () => {
    const wrapper = mount(search, {localVue, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  test('search result event emited properly', () => {
    const wrapper = mount(search, {localVue, vuetify})
    const input = wrapper.find('input')
    input.trigger('focus')
    // input.element.value = 'h'
    input.trigger('input')
    input.trigger('keydown.enter')
    input.trigger('keydown.enter')
    expect(wrapper.emitted()["show-search-list"]).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = mount(search,  {localVue, vuetify})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
