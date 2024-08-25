import { authUser } from "./auth-firebase";
import { getUserInfo, setUser } from "../../../entities/User";
import { TAuthForm } from "../components/AuthForm";
import { setXp } from "../../Xp/services/xp-slice";
import { fetchChallengeInfo } from "../../Challenge/services/challenge-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../app/services/store";

export const setApiAuth = createAsyncThunk<
void,
TAuthForm,
ThunkConfig<string>
>(
  "auth/setApiAuth",
  async (payload, thunkAPI) => {
    const { email, password } = payload;
    const user = await authUser(email, password);
    console.log(user);
    const userData = await getUserInfo(user.uid);

    if (!userData) {
      thunkAPI.rejectWithValue("Auth Error");
    }

    localStorage.setItem("token", user.refreshToken);
    const convertedUser = {
      id: user.uid,
      email: user.email,
      name: userData.name,
      completed: userData.completed || [],
      level: userData.level || 0,
      token: user.refreshToken,
      idDoc: userData.idDoc,
    };

    thunkAPI.dispatch(setXp(userData.xp || 0));
    thunkAPI.dispatch(setUser(convertedUser));
    thunkAPI.dispatch(fetchChallengeInfo({ UID: user.uid }));

    thunkAPI.extra.router.navigate("/");
  }
);
