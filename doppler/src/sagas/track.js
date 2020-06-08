// import { API_BASE_URL } from '../settings';

import jwtDecode from 'jwt-decode';
import { call, takeEvery, put,
    // race,// all,
    delay, select,  } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as schemas from '../schemas/track';
import * as selectors from '../reducers';
import * as actions from '../actions/track';
import * as types from '../types/track';
// import { useState } from 'react';
const API_BASE_URL = 'http://localhost:8000/api/v1';

function* fetchTracks(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call (
                fetch,
                `${API_BASE_URL}/tracks/mytracks/`,
                {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                      },
                }
            );

            if (response.status === 200) {
                const jsonResult = yield response.json();
                const { 
                    entities: { tracks },
                result, } = normalize(jsonResult, schemas.tracks);
                console.log('Tracks:\n', tracks);
                console.log('Result:\n', result);
                yield put(
                    actions.addTrack(tracks, result),
                );
            } else {
                console.log('fetchtrack else');
            }
        }
    } catch (error) {
        console.log('fetchTracks Saga error:\n', error)
        
    }
}

export function* watchTracksFetch() {
    yield takeEvery(
      types.TRACK_ADDED,
      fetchTracks,
    );
  }

function* createTrack(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);

        if (isAuth) {
            console.log('Creating track saga started');
            console.log('Payload:\n');
            console.log(`${API_BASE_URL}/tracks/`)
            
            const token = yield select(selectors.getAuthToken);
            const decoded = jwtDecode(token);
            const { username } = decoded;
            action.payload['username'] = username
            console.log(action.payload);
            console.log(JSON.stringify(action.payload));
            const response = yield call (
                fetch,
                `${API_BASE_URL}/tracks/`,
                {
                    method: 'POST',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                      },
                }
            );

            if (response.status === 201) {
                const jsonResult = yield response.json();
                console.log('Track created successfully');
                // yield put(
                //     actions.completeAddingPetOwner(
                //         action.payload.id,
                //         jsonResult,
                //         username
                //     ),
                //     );
                } else {
                    console.log('Server replied:', response.status);
                }
        }
    } catch (error) {
        console.log('createTrack Saga error:\n', error);
    }
}

export function* watchTrackCreate() {
    yield takeEvery(
      types.TRACK_CREATED,
      createTrack,
    );
}

export function* removeTrack(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call (
                fetch,
                `${API_BASE_URL}/tracks/${action.payload.id}/`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                      },
                }
            );

        if (response.status === 200) {
            console.log('removeTrack 200');
          } else {
            console.log('removeTrack not 200');
          }
        }
        
    } catch (error) {
        console.log('removeTrack Saga error:\n', error);
    }
}


export function* watchRemoveTrack() {
    yield takeEvery(
      types.TRACK_DELETED,
      removeTrack,
    );
}