import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API } from "../../constants";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(`${BASE_API}users`);
  return response.data;
});

export const addUsers = createAsyncThunk("users/addUsers", async (data) => {
  await axios.post(`${BASE_API}users`, data);
  return data;
});

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async ({ id, value }) => {
    await axios.put(`${BASE_API}users/${id}`, value);
    return {
      id: id,
      changes: value,
    };
  }
);

export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
  await axios.delete(`${BASE_API}users/${id}`);
  return id;
});

const usersAdapter = createEntityAdapter({
  selectId: (users) => users.id,
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) =>
      usersAdapter.setAll(state, action.payload || []),
    [addUsers.fulfilled]: (state, action) =>
      usersAdapter.addOne(state, action.payload),
    [updateUsers.fulfilled]: (state, action) =>
      usersAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes,
      }),
    [deleteUsers.fulfilled]: (state, action) => {
      usersAdapter.removeOne(state, action.payload);
    },
  },
});

export const usersSelector = usersAdapter.getSelectors((state) => state.users);
export default usersSlice.reducer;
