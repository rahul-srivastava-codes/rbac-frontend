import { call, put, takeLatest } from "redux-saga/effects";
import api from "@/services/api";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";

function* loginUser(action) {
  try {
    const res = yield call(api.post, "/auth/login", action.payload);
    const { token, user } = res.data;

    localStorage.setItem("token", token);

    yield put(
      loginSuccess({
        token,
        role: user.role,
        user,
      })
    );
  } catch (err) {
    yield put(loginFailure(err.response?.data?.message));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, loginUser);
}
