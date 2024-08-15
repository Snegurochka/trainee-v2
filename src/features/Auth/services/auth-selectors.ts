import { RootState } from "../../../app/services/store";

export const selectIsAuth = (state: RootState) => state.auth.isAuth;