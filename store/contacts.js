export const state = () =>({
  contactsList : []
})

export const mutations = {
  setContactsList(state, data){
    state.contactsList = data
  }
}