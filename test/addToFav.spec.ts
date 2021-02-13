import { mount, shallowMount, createLocalVue  } from '@vue/test-utils'
import addToFavComp from '@/components/movie/add_to_fav.vue';
import  favStore  from '~/global_store/favStore'
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('addToFavComp', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()

  test('mounts properly', () => {
    const wrapper = mount(addToFavComp, {localVue, vuetify,
      propsData: {
        movieItem: {
          imdbID: "abc123", 
          Title: "Godfather", 
          favourite: true, 
          Year: "1972" 
        }
      }})
    expect(wrapper.vm).toBeTruthy()
  })
  
  test('remove from fav click triggers properly', async () => {
    const wrapper = mount(addToFavComp, {localVue, vuetify,
      propsData: {
        movieItem: {
          imdbID: "abc123", 
          Title: "Godfather", 
          favourite: true, 
          Year: "1972" 
        }
      }})
    await wrapper.find('div#favStarDiv').trigger('click')
    expect(wrapper.emitted()["fav-update-table"]).toBeTruthy()
  })
  test('add to fav click triggers properly', () => {
    const wrapper = mount(addToFavComp, {localVue, vuetify,
      propsData: {
        movieItem: {
          imdbID: "abc123", 
          Title: "Godfather", 
          favourite: false, 
          Year: "1972" 
        }
      }})
    
    wrapper.find('div#favStarDiv').trigger('click')
    expect(wrapper.emitted()["fav-update-table"]).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = mount(addToFavComp,  {localVue, vuetify, propsData: {
      movieItem: {
        imdbID: "abc123", 
        Title: "Godfather", 
        favourite: false, 
        Year: "1972" 
      }
    }})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
