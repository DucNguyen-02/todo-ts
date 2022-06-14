import React from 'react'
import { useDispatch } from 'react-redux'
import { editTask, removeTask, showAlert } from '../actions/actions'
import { Todo } from '../model'

interface props {
    itemTask: Todo
}

const SingleTask = ({ itemTask }: props) => {
    const dispatch = useDispatch()

    const handleRemove = (id: string | number) => {
        dispatch(removeTask(id))
        dispatch(showAlert({ show: true, msg: 'Removed task', type: 'remove' }))
    }

    const handleEdit = (id: string | number) => {
        dispatch(editTask(id))
    }
    return (
        <li className="d-flex justify-content-between form-label">
            <h5>{itemTask.task}</h5>
            <div className="btn-wrapper">
                <button
                    className="btn btn-info"
                    onClick={(e) => handleRemove(itemTask.id)}
                >
                    Remove
                </button>
                <button
                    className="btn btn-info mx-1"
                    onClick={(e) => {
                        handleEdit(itemTask.id)
                    }}
                >
                    Edit
                </button>
            </div>
        </li>
    )
}

export default SingleTask
