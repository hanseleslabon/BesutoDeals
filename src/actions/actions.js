import axios from 'axios';
import {
    Request_Raw_Data_List, Request_Raw_Data_List_SUCCESS, Request_Raw_Data_List_FAILURE
    , Request_Switch_Data_List, Request_Switch_Data_List_SUCCESS, Request_Switch_Data_List_FAILURE
} from '../stores/constants'

export function getRawData() {
    return (dispatch) => {
        dispatch({ type: Request_Raw_Data_List });
        axios.get("/data")
            .then((res) => {
                dispatch({ type: Request_Raw_Data_List_SUCCESS, data: res });
            })
            .catch((error) => {
                dispatch({ type: Request_Raw_Data_List_FAILURE, data: error });
            });
    }
}

export function getSwitchData() {
    return (dispatch) => {
        dispatch({ type: Request_Switch_Data_List });
        axios.get("/data")
            .then((res) => {
                dispatch({ type: Request_Switch_Data_List_SUCCESS, data: res });
            })
            .catch((error) => {
                dispatch({ type: Request_Switch_Data_List_FAILURE, data: error });
            });
    }
}

