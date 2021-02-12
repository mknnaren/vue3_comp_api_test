import { shallowMount, createLocalVue  } from '@vue/test-utils'
import movTablePage from '@/components/movie/page.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('movTablePage', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = shallowMount(movTablePage, {localVue, vuetify,
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

  // test('renders properly', () => {
  //   const wrapper = shallowMount(favTable,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
