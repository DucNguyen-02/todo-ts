import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, setTask, showAlert } from '../actions/actions'
import { IRootState } from '../alias/alias'
import { Todo } from '../model'
import Alert from './Alert'

interface props {
    listTask: Todo[]
}

const InputField = ({ listTask }: props) => {
    const dispatch = useDispatch()
    const task = useSelector((state: IRootState) => state.task)
    const isEditting = useSelector((state: IRootState) => state.isEditting)
    const alert = useSelector((state: IRootState) => state.setAlert)
    const inputRef = useRef<HTMLInputElement>(null)
    inputRef.current?.focus()

    const handleSubmit = (e: React.FormEvent, task: string) => {
        e.preventDefault()
        if (task) {
            dispatch(addTask(task))
        }
        if (!isEditting) {
            dispatch(showAlert({ show: true, msg: 'Add task', type: 'add' }))
        } else {
            dispatch(
                showAlert({ show: true, msg: 'Edited task', type: 'edit' })
            )
        }
        dispatch(setTask(''))
    }

    return (
        <form className="w-100">
            <h6 className="mb-2">
                {alert?.show ? (
                    <Alert
                        showAlert={showAlert}
                        msg={alert.msg}
                        type={alert.type}
                        tasks={listTask}
                    />
                ) : (
                    ''
                )}
            </h6>
            <div className=" d-flex mb-4  ">
                <input
                    className="w-100 form-controlform-control"
                    ref={inputRef}
                    type="text"
                    placeholder="enter task"
                    value={task}
                    onChange={(e) => dispatch(setTask(e.target.value))}
                />
                <button
                    className="btn btn-info"
                    type="submit"
                    onClick={(e) => handleSubmit(e, task)}
                >
                    {isEditting ? 'OK' : 'Submit'}
                </button>
            </div>
        </form>
    )
}

export default InputField
