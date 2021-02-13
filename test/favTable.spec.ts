import { mount, createLocalVue  } from '@vue/test-utils'
import favTable from '@/components/favourites/table.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('favTable', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = mount(favTable, {localVue, vuetify, propsData: {
      favPropList: [{
        imdbID: "ab123", Title: "Harry", favourite: true, Year: "2021" 
      }]}})
    expect(wrapper.vm).toBeTruthy()
  })
  test('mounts properly without prop', () => {
    const wrapper = mount(favTable, {localVue, vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })
  
  test('remove fav click event', async() => {
    const wrapper = mount(favTable, {localVue, vuetify, propsData: {
      favPropList: [{
        imdbID: "ab123", Title: "Harry", favourite: true, Year: "2021" 
      }]}})
    expect(wrapper.vm).toBeTruthy()
    const rmFav = wrapper.findAll(".rmFavDiv")
    await rmFav.at(0).trigger('click')
  })
  // test('renders properly', () => {
  //   const wrapper = mount(favTable,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
