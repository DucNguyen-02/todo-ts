import { initialState } from '../alias/alias'
import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    SET_TASK,
    SHOW_ALERT,
} from '../constants/constants'

const initState: initialState = {
    idEdit: 0,
    isEditting: false,
    task: '',
    setAlert: { show: false, msg: ' ', type: '' },
    listTask: [],
}

const tasks = (
    state: initialState = initState,
    action: { type: string; payload: any }
): initialState => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                task: action.payload,
            }
        case SHOW_ALERT:
            return {
                ...state,
                setAlert: {
                    show: action?.payload?.show,
                    msg: action?.payload?.msg,
                    type: action?.payload?.type,
                },
            }
        case ADD_TASK:
            if (state.isEditting) {
                let newState = state.listTask.map((item) => {
                    if (item.id === state.idEdit) {
                        return { ...item, task: action.payload }
                    }
                    return item
                })
                return {
                    ...state,
                    isEditting: false,
                    listTask: newState,
                }
            }
            return {
                ...state,
                idEdit: 0,
                listTask: [
                    ...state.listTask,
                    { id: Date.now(), task: action.payload },
                ],
            }
        case REMOVE_TASK:
            const newList = state.listTask.filter(
                (item) => item.id !== action.payload
            )
            return {
                ...state,
                listTask: newList,
            }
        case EDIT_TASK:
            let getEdit = state.listTask.filter(
                (item) => item.id === action.payload
            )
            let [a] = [...getEdit]
            return {
                ...state,
                idEdit: a.id,
                isEditting: true,
                task: a.task,
            }

        default:
            return state
    }
}

export { tasks }
