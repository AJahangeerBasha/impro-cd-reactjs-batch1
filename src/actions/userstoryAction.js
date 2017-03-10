import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import userstoryApi from '../api/mockUserstoryApi';

export function createUserstory(userstory) {
    return { type: 'CREATE_USERSTORY', userstory };
}

export function updateUserstory(userstory) {
    return { type: 'UPDATE_USERSTORY', userstory };
}

export function LoadUserstoriesSuccess(userstories) {
  return { type: 'LOAD_USERSTORIES_SUCCESS', userstories};
}

export function updateUserstoryStatus(userstory) {
    return { type: 'UPDATE_USERSTORY_STATUS', userstory };
}

export function deleteUserstory(userstory) {
    return { type: 'DELETE_USERSTORY', userstory };
}

export function loadUserstories() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return userstoryApi.getAllUserstories().then(userstories => {
            dispatch(LoadUserstoriesSuccess(userstories));
        }).catch(error => {
            throw (error);
        });
    };
}

export function saveUserstory(userstory) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return userstoryApi.saveUserstory(userstory).then(userstory => {
            userstory.id ? dispatch(updateUserstory(userstory)) :
                dispatch(createUserstory(userstory));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}
