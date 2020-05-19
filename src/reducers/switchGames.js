import DataApi from '../state-api';

var defaultState = {
    loading: false,
    loaded: false,
    data: [],
    error: '',
};


const switchGames = (state = defaultState, action) => {
    switch (action.type) {
        case ('Request_Raw_Data_List'):
            return {
                ...state,
                loading: true,
                loaded: false
            }
        case ('Request_Raw_Data_List_SUCCESS'):
            return {
                ...state,
                data: action.data.data,
                loading: false,
                loaded: true,
                error: '',
            }
        case ('Request_Raw_Data_List_FAILURE'):
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.data.data
            }
        case ('Request_Switch_Data_List'):
            return {
                ...state,
                loading: true,
                loaded: false
            }
        case ('Request_Switch_Data_List_SUCCESS'):
            const api = new DataApi(action.data.data);
            return {
                ...state,
                data: api.getSwitchGames(),
                loading: false,
                loaded: true,
                error: '',
            }
        case ('Request_Switch_Data_List_FAILURE'):
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.data.data
            }
        default: return state;
    }
}


export default switchGames;