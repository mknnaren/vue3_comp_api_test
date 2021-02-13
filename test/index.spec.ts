import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import index from '@/pages/index.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(Vuetify)

describe('index', () => {
  let localVue = createLocalVue()
  let router = new VueRouter()
  let vuetify = new Vuetify()
  test('mounts properly', () => {
    const wrapper = mount(index, {localVue, router, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  // test('renders properly', () => {
  //   const wrapper = mount(index,  {localVue, router, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
