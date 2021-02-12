import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import favourites from '@/pages/favourites.vue';
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

  test('emit update fav table', async () => {
    const wrapper = mount(favourites, {localVue, router, vuetify})
    wrapper.vm.$emit('update-table')
    await wrapper.vm.$nextTick() // Wait until $emits have been handled
    /*
    wrapper.emitted() returns the following object:
    {
      foo: [[], [123]]
    }
    */
    // assert event has been emitted
    expect(wrapper.emitted()["update-table"]).toBeTruthy()
  

  })

  // test('renders properly', () => {
  //   const wrapper = shallowMount(favourites,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
