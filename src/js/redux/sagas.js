import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Api from "../ThemeApi";

function* fetchTheme(action) {
  try {
    const themes = yield call(Api.fetchThemes);
    yield put({ type: "FETCH_THEMES_SUCCEEDED", payload: { themes } });
  } catch (error) {
    yield put({ type: "FETCH_THEMES_FAILD", payload: { error } });
  }
}

function* mySaga() {
  yield takeLatest("FETCH_THEMES_REQUESTED", fetchTheme);
}

export default mySaga;
