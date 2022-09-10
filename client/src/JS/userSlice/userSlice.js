import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios'
export const addUser=createAsyncThunk('user/add',async (user) => {
  try {
    let result=await axios.post('http://localhost:5000/person/add',user)
    
    return result
  } catch (error) {
    console.log(error)
  }
})
export const getUser=createAsyncThunk('user/get',async () => {
  try {
    let result= axios.get('http://localhost:5000/person/');
  
    return result
    
  } catch (error) {
    console.log(error)
  }
})
export const delUser=createAsyncThunk('user/del',async (id) => {
  try {
    let result= axios.delete(`http://localhost:5000/person/delete/${id}`);
  
    return result
    
  } catch (error) {
    console.log(error)
  }
})
export const updtUser=createAsyncThunk('user/updt',async (id,user) => {
  try {
    let result= axios.put(`http://localhost:5000/person/put/${id}`,user);
  
    return result
    
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
    user:null,
    status:null
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {  },
  extraReducers: {
    [addUser.fulfilled]: (state) => {state.status="successe"},
    [addUser.rejected]: (state) => {state.status="failed"},
    [addUser.pending]: (state) => {state.status="pending"},
    [getUser.fulfilled]: (state,action) => {state.status="successe";
  state.user=action.payload.data?.persons},
    [getUser.rejected]: (state) => {state.status="failed"},
    [getUser.pending]: (state) => {state.status="pending" },
    [delUser.fulfilled]: (state) => {state.status="successe"},
    [delUser.rejected]: (state) => {state.status="failed"},
    [delUser.pending]: (state) => {state.status="pending"},
    [updtUser.fulfilled]: (state) => {state.status="successe"},
    [updtUser.rejected]: (state) => {state.status="failed"},
    [updtUser.pending]: (state) => {state.status="pending"},
  }
})

// Action creators are generated for each case reducer function
                    
export default userSlice.reducer