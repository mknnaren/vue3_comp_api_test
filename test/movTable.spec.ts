import { shallowMount, createLocalVue  } from '@vue/test-utils'
import movTable from '@/components/movie/table.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('movTable', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = shallowMount(movTable, {localVue, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  // test('renders properly', () => {
  //   const wrapper = shallowMount(movTable,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
