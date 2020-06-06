import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted, watchRefreshTokenStarted } from './auth';
import { watchTrackCreate, watchRemoveTrack, watchTracksFetch } from './track';



function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchTrackCreate),
    fork(watchRemoveTrack),
    fork(watchTracksFetch),

  ]);
}


export default mainSaga;
