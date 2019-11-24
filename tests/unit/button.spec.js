import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Button from '@/components/Button'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("Beer methods and ingredients", () => {

    // First prepare a Vuex store to test
    let store
    beforeEach(() => {
        store = new Vuex.Store({
            state: { beers: [{ id: 1 }] }
        })
    })

    it("Ingredient status switched to 'DONE'", () => {
        const status = 'IDLE'
        const wrapper = shallowMount(Button, { 
            localVue, 
            store,
            propsData: { status } 
        })

        wrapper.vm.run()

        expect(wrapper.vm.status).toBe('DONE')
    })

})