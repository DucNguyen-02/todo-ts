import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    SET_TASK,
    SHOW_ALERT,
} from '../constants/constants'

export const addTask = (payload: string) => {
    return {
        type: ADD_TASK,
        payload,
    }
}

export const removeTask = (payload: string | number) => {
    return {
        type: REMOVE_TASK,
        payload,
    }
}

export const editTask = (payload: string | number) => {
    return {
        type: EDIT_TASK,
        payload,
    }
}

export const setTask = (payload: string | number) => {
    return {
        type: SET_TASK,
        payload,
    }
}

export const showAlert = (payload?: any) => {
    return {
        type: SHOW_ALERT,
        payload,
    }
}
