import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import index from '@/pages/index.vue';
import searchComp from '@/components/movie/search.vue';
import tableComp from '@/components/movie/search.vue';
import pageComp from '@/components/movie/search.vue';
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

  test('mounts child component SEARCH properly', () => {
    const wrapper = mount(index, {localVue, vuetify})
    const searchElem = wrapper.findComponent(searchComp) // => finds Bar by component instance
    expect(searchElem.exists()).toBe(true)
  })
  test('mounts child component TABLE properly', () => {
    const wrapper = mount(index, {localVue, vuetify})
    const tableElem = wrapper.findComponent(tableComp) // => finds Bar by component instance
    expect(tableElem.exists()).toBe(true)
  })
  test('mounts child component PAGINATION properly', () => {
    const wrapper = mount(index, {localVue, vuetify})
    const pageElem = wrapper.findComponent(pageComp) // => finds Bar by component instance
    expect(pageElem.exists()).toBe(true)
  })
  
  test('check for search emit event propagation from child component', async() => {
    const wrapper = mount(index, {localVue, vuetify, router})
    const searchElem = wrapper.findComponent(searchComp) // => finds Bar by component instance
    expect(searchElem.exists()).toBe(true)
    const input = searchElem.find('input')
    input.trigger('focus')
    // input.element.value = 'h'
    input.trigger('input')
    input.trigger('keydown.enter')
    input.trigger('keydown.enter')
    // expect(wrapper.emitted()["show-search-list"]).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = mount(index,  {localVue, router, vuetify})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
