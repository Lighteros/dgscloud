import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  login: {
    data: [],
    isLoading: true,
  },
  isValid: {
    data: [],
    isLoading: true,
  },
  deposit: {
    data: {},
    isLoading: true,
  },
  sharedCpuAMD: {
    data: {},
    isLoading: true,
  },
  dashboard: {
    data: {},
    isLoading: true,
  },
  sharedCpuIntel: {
    data: {},
    isLoading: true,
  },
  dedicatedCpuGp: {
    data: {},
    isLoading: true,
  },
};

export let login = createAsyncThunk("login", async (address, thunkAPI) => {
  try {
    let data = await fetch(
      `https://api.dcicloud.ai/login-wqed892q/${address}`,
      {
        method: "POST",
      }
    );
    data = await data.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Login Failed");
  }
});

export let isValid = createAsyncThunk("isValid", async (encData, thunkAPI) => {
  try {
    let data = await fetch(`https://api.dcicloud.ai/customer-info/${encData}`, {
      method: "POST",
    });
    data = await data.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Check Validation Failed");
  }
});

export let deposit = createAsyncThunk("deposit", async (id, thunkAPI) => {
  try {
    let data = await fetch(
      `https://api.dcicloud.ai/check-deposit-transaction/${id}`
    );
    data = await data.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Deposit Failed");
  }
});

export let sharedCpuAMD = createAsyncThunk(
  "sharedCpuAMD",
  async (_, thunkAPI) => {
    try {
      let data = await fetch(
        `https://api.dcicloud.ai/get-product/cloudcpu-amd`
      );
      data = await data.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Shared CPU AMD Failed");
    }
  }
);

export let sharedCpuIntel = createAsyncThunk(
  "sharedCpuIntel",
  async (_, thunkAPI) => {
    try {
      let data = await fetch(
        `https://api.dcicloud.ai/get-product/cloudcpu-intel`
      );
      data = await data.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Shared CPU Intel Failed");
    }
  }
);

export let dedicatedCpuGp = createAsyncThunk(
  "dedicatedCpu",
  async (_, thunkAPI) => {
    try {
      let data = await fetch(
        `https://api.dcicloud.ai/get-product/dedicated-gp`
      );
      data = await data.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Dedicated Cpu Failed");
    }
  }
);

export let dashboard = createAsyncThunk(
  "dashboard",
  async (encdata, thunkAPI) => {
    try {
      let data = await fetch(`https://api.dcicloud.ai/my-servers/${encdata}`);
      data = await data.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Deposit Failed");
    }
  }
);


const DCloud = createSlice({
  name: "dcloud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.login.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.login.isLoading = false;
        state.login.data = payload;
      })
      .addCase(login.rejected, (state) => {
        state.login.isLoading = false;
      });

    builder
      .addCase(isValid.pending, (state) => {
        state.isValid.isLoading = true;
      })
      .addCase(isValid.fulfilled, (state, { payload }) => {
        state.isValid.isLoading = false;
        state.isValid.data = payload;
      })
      .addCase(isValid.rejected, (state, { payload }) => {
        state.isValid.isLoading = false;
        state.isValid.data = payload;
      });

    builder
      .addCase(deposit.pending, (state) => {
        state.deposit.isLoading = true;
      })
      .addCase(deposit.fulfilled, (state, { payload }) => {
        state.deposit.isLoading = false;
        state.deposit.data = payload;
      })
      .addCase(deposit.rejected, (state, { payload }) => {
        state.deposit.isLoading = false;
        state.deposit.data = payload;
      });

    builder
      .addCase(sharedCpuAMD.pending, (state) => {
        state.sharedCpuAMD.isLoading = true;
      })
      .addCase(sharedCpuAMD.fulfilled, (state, { payload }) => {
        state.sharedCpuAMD.isLoading = false;
        state.sharedCpuAMD.data = payload;
      })
      .addCase(sharedCpuAMD.rejected, (state, { payload }) => {
        state.sharedCpuAMD.isLoading = false;
        state.sharedCpuAMD.data = payload;
      });

    builder
      .addCase(sharedCpuIntel.pending, (state) => {
        state.sharedCpuIntel.isLoading = true;
      })
      .addCase(sharedCpuIntel.fulfilled, (state, { payload }) => {
        state.sharedCpuIntel.isLoading = false;
        state.sharedCpuIntel.data = payload;
      })
      .addCase(sharedCpuIntel.rejected, (state, { payload }) => {
        state.sharedCpuIntel.isLoading = false;
        state.sharedCpuIntel.data = payload;
      });

    builder
      .addCase(dedicatedCpuGp.pending, (state) => {
        state.dedicatedCpuGp.isLoading = true;
      })
      .addCase(dedicatedCpuGp.fulfilled, (state, { payload }) => {
        state.dedicatedCpuGp.isLoading = false;
        state.dedicatedCpuGp.data = payload;
      })
      .addCase(dedicatedCpuGp.rejected, (state, { payload }) => {
        state.dedicatedCpuGp.isLoading = false;
        state.dedicatedCpuGp.data = payload;
      });

    builder
      .addCase(dashboard.pending, (state) => {
        state.dashboard.isLoading = true;
      })
      .addCase(dashboard.fulfilled, (state, { payload }) => {
        state.dashboard.isLoading = false;
        state.dashboard.data = payload;
      })
      .addCase(dashboard.rejected, (state, { payload }) => {
        state.dashboard.isLoading = false;
        state.dashboard.data = payload;
      });
  },
});

export default DCloud.reducer;
