import { shallowMount, createLocalVue  } from '@vue/test-utils'
import addToFavComp from '@/components/movie/add_to_fav.vue';
import Vuetify from 'vuetify';
import Vue from 'vue'
Vue.use(Vuetify)

describe('addToFavComp', () => {
  let localVue = createLocalVue()
  let vuetify = new Vuetify()


  test('mounts properly', () => {
    const wrapper = shallowMount(addToFavComp, {localVue, vuetify,
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

  // test('renders properly', () => {
  //   const wrapper = shallowMount(favTable,  {localVue, vuetify})
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
