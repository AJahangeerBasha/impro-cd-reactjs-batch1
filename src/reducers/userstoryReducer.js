import initialState from './initialState';

export default function userstoryReducer(state = initialState.userstories, action) {
    switch (action.type) {
        case 'LOAD_USERSTORIES_SUCCESS' :
            return action.userstories;
        case 'CREATE_USERSTORY':
            return [...state, Object.assign({}, action.userstory)
            ];
        case 'UPDATE_USERSTORY':
            return [
                ...state.filter(userstory => userstory.id !== action.userstory.id),
                Object.assign({}, action.userstory)
            ];
        case 'UPDATE_USERSTORY_STATUS':
            return [
                ...state.filter(userstory => userstory.id !== action.userstory.id),
                Object.assign({}, action.userstory)
            ];
        case 'DELETE_USERSTORY':
            return state.filter(userstory => userstory.id !== action.userstory.id);
        default:
            return state || [];
    }
}