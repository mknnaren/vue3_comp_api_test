import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import index from '@/pages/index.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('index', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()
  test('mounts properly', () => {
    const wrapper = mount(index, {localVue, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  // test('renders properly', () => {
  //   const wrapper = shallowMount(index,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
