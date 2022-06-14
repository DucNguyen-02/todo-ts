import { createStore } from 'redux'
import { tasks } from '../reducers/reducer'

export const store = createStore(tasks)
