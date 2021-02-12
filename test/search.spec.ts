import { shallowMount, createLocalVue  } from '@vue/test-utils'
import search from '@/components/movie/search.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('search', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()
  test('mounts properly', () => {
    const wrapper = shallowMount(search, {localVue, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  // test('renders properly', () => {
  //   const wrapper = shallowMount(search,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
