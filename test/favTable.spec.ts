import { shallowMount, createLocalVue  } from '@vue/test-utils'
import favTable from '@/components/favourites/table.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('favTable', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = shallowMount(favTable, {localVue, vuetify})
    expect(wrapper.vm).toBeTruthy()
  })

  // test('renders properly', () => {
  //   const wrapper = shallowMount(favTable,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
