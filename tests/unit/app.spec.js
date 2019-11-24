import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from '@/App'
import BeerList from '@/views/BeerList'
import { routes } from '@/router'

const localVue = createLocalVue()
localVue.use(Vuex, VueRouter)

describe("App", () => {

  // First prepare a Vuex store to test
  let store
  let beer
  beforeEach(() => {
    beer = { id: 1, image_url: "" }
    store = new Vuex.Store({
      state: { beers: [ beer ] },
      actions: { FETCH_ALL_BEERS: jest.fn() },
      getters: { getBeerById: jest.fn() }
    })
  })
  
  it("renders 'beer list' view by default via routing", async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue, 
      store,
      router
    })

    router.push("/whatever")
    await wrapper.vm.$nextTick()

    expect(wrapper.find(BeerList).exists()).toBe(true)
  })

})