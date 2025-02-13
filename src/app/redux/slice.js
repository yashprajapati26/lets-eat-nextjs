const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users : []
}


const Slice = createSlice({
    name : "AddUserSlice",
    initialState,
    reducers:{
        addUser : (state,action) => {
            const data = {
                id : nanoid(),
                name : action.name,
                email : action.email,
                password : action.password,
            }
            state.users.push(data)
        }
    }
})


export const {addUser} = Slice.actions

export default Slice.reducer