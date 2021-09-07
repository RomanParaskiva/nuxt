export const state = () =>({
  contactsList : []
})

export const getters ={
  getList : (state) => state.contactsList
}

export const mutations = {
  setContactsList(state, data){
    state.contactsList = data
  }
}