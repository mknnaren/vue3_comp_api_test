import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import movTable from '@/components/movie/table.vue';
import addfavComp from '@/components/movie/add_to_fav.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('movTable', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = mount(movTable, {localVue, vuetify, propsData: {
      movieData: {
          page: 1,
          per_page: 10,
          total_pages: 10,
          total: 100
      },
    loading: true,
    movieList: [{
      imdbID: "ab123", Title: "Harry", favourite: false, Year: "2021" 
    }]
    }})
    expect(wrapper.vm).toBeTruthy()
  })

  test('mounts child component add fav properly', () => {
    const wrapper = mount(movTable, {localVue, vuetify, propsData: {
      movieData: {
          page: 1,
          per_page: 10,
          total_pages: 10,
          total: 100
      },
    loading: true,
    movieList: [{
      imdbID: "ab123", Title: "Harry", favourite: false, Year: "2021" 
    }]
    }})
    const favComp = wrapper.findComponent(addfavComp) // => finds Bar by component instance
    expect(favComp.exists()).toBe(true)
  })
  
  test('check for event emit propagation from child component add fav', async() => {
    const wrapper = mount(movTable, {localVue, vuetify, propsData: {
      movieData: {
          page: 1,
          per_page: 10,
          total_pages: 10,
          total: 100
      },
    loading: true,
    movieList: [{
      imdbID: "ab123", Title: "Harry", favourite: false, Year: "2021" 
    }]
    }})
    const favComp = wrapper.findComponent(addfavComp)
    await favComp.find('div#favStarDiv').trigger('click')
    expect(wrapper.emitted()["update-table"]).toBeTruthy()
  })

  
  // test('renders properly', () => {
  //   const wrapper = shallowMount(movTable,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
