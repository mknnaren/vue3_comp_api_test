import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import movTablePage from '@/components/movie/page.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('movTablePage', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = mount(movTablePage, {localVue, vuetify,
      propsData: {
        pageData: {
          page: 1,
          per_page: 10,
          total_pages: 10,
          total: 100
        }
      }})
    expect(wrapper.vm).toBeTruthy()
  })
  test('update pagination triggers properly', async() => {
    const wrapper = mount(movTablePage, {localVue, vuetify,
      propsData: {
        pageData: {
          page: 1,
          per_page: 10,
          total_pages: 10,
          total: 100
        }
      }})
      await wrapper.vm.$nextTick()
      const cb = jest.fn()
      wrapper.vm.$on('input', cb)
      const navigation = wrapper.findAll('.v-pagination__item').wrappers
      navigation[1].trigger('click')
      expect(wrapper.emitted()["show-page-list"]).toBeTruthy()
  })
  test('renders properly', () => {
    const wrapper = mount(movTablePage,  {localVue, vuetify, propsData: {
      pageData: {
        page: 1,
        per_page: 10,
        total_pages: 10,
        total: 100
      }
    }})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
