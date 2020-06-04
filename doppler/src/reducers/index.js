import { combineReducers } from 'redux';

import track, * as trackSelectors from './track';
import auth, * as authSelectors from './auth';
import phrasebox, * as phraseboxSelectors from './phrasebox';


const reducer = combineReducers({
    auth,
    track,
    phrasebox
});

export default reducer;

export const getPhrases = state => phraseboxSelectors.getPhrases(state.phrasebox.phrases);
export const getWords = state => phraseboxSelectors.getWords(state.phrasebox.words);
export const getPhrasebox = state => phraseboxSelectors.getPhrasebox(state.phrasebox);

export const getTracks = state => trackSelectors.getTracks(state.track);
export const getTrack = (state, id) => trackSelectors.getTrack(state.track[id]);
export const getLetra = (state, id) => trackSelectors.getLetra(state.track[id].letra);
export const getTrackIds = state => trackSelectors.getTrackIds(state.track);
export const getTrackName = (state, id) => trackSelectors.getTrackName(state.track[id].trackname);
export const getTrackKey = (state, id) => trackSelectors.getTrackKey(state.track[id].trackKey);
export const getTrackPrivate = (state, id) => trackSelectors.getTrackPrivate(state.track[id].private);
export const getTrackDateModified = (state, id) => trackSelectors.getTrackDateModified(state.track[id].date_modified);

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);