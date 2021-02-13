import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import favourites from '@/pages/favourites.vue';
import favTableComp from '@/components/favourites/table.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(Vuetify)

describe('favourites', () => {
  let localVue = createLocalVue()
  localVue.use(VueRouter)
  let router = new VueRouter()
  let vuetify = new Vuetify()

  test('mounts properly', () => {
    const wrapper = mount(favourites, {localVue, router, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  test('mounts child component properly', () => {
    const wrapper = mount(favourites, {localVue, router, vuetify})
    // expect(wrapper.vm.$refs.favTableComp).toBeTruthy()
    const tableComp = wrapper.findComponent(favTableComp) // => finds Bar by component instance
    expect(tableComp.exists()).toBe(true)
  })

  test('renders properly', () => {
    const wrapper = mount(favourites,  {localVue, router, vuetify})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
