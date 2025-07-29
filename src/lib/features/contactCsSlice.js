import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleLoopContactCS } from "../../helper/request/getSingleLoopContactCs";

// Initial state
const initialState = {
  contactCsData: null,
  loading: "idle",
  error: null,
};

// Async thunk untuk mengambil data contact CS
export const fetchContactCs = createAsyncThunk(
  "contactCs/fetchContactCs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSingleLoopContactCS();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch contact CS data"
      );
    }
  }
);

const contactCsSlice = createSlice({
  name: "contactCs",
  initialState,
  reducers: {
    setContactCsData: (state, action) => {
      state.contactCsData = action.payload;
    },
    resetContactCs: (state) => {
      state.contactCsData = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactCs.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchContactCs.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.contactCsData = action.payload;
        state.error = null;
      })
      .addCase(fetchContactCs.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { setContactCsData, resetContactCs } = contactCsSlice.actions;
export default contactCsSlice.reducer;

export const selectContactCsData = (state) => state.contactCs.contactCsData;
export const selectContactCsLoading = (state) => state.contactCs.loading;
export const selectContactCsError = (state) => state.contactCs.error;
