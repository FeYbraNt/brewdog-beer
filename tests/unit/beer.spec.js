import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from '@/router'
import Beer from '@/components/Beer'

const localVue = createLocalVue()
localVue.use(Vuex, VueRouter)

describe("Beer methods and ingredients", () => {

    // First prepare a Vuex store to test
    let store
    let beer
    beforeEach(() => {
        beer = { id: 1, image_url: "" }
        store = new Vuex.Store({
            state: { beers: [ beer ] }
        })
    })


    it("goes to 'Beer Details' via routing when button clicked", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(Beer, {
          localVue, store, router, propsData: { beer: beer, isCurrentRouteDetails: false }
        })
    
        const button = wrapper.find('button')
        button.trigger('click')
        await wrapper.vm.$nextTick()
    
        expect(router.currentRoute.name).toBe('beerdetails')
    })

    it("goes back to 'Beer List' via routing when button clicked", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(Beer, {
          localVue, store, router, propsData: { beer: beer, isCurrentRouteDetails: true }
        })
    
        const button = wrapper.find('button')
        button.trigger('click')
        await wrapper.vm.$nextTick()
    
        expect(router.currentRoute.name).toBe('beerlist')
    })

})