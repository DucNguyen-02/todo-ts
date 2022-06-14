import { tasks } from '../reducers/reducer'

export type listContent = { id: string | number; task: string }
export type alert = {
    show: boolean
    msg: string
    type: string
}
export type initialState = {
    idEdit: number | string
    isEditting: boolean
    task: string
    setAlert: any
    listTask: Array<listContent>
}
export type IRootState = ReturnType<typeof tasks>
