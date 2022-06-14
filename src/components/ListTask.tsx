import React from 'react'
import { Todo } from '../model'
import SingleTask from './SingleTask'

interface props {
    listTask: Todo[]
}

const ListTask = ({ listTask }: props) => {
    return (
        <ul>
            {listTask.map((item, index) => {
                return <SingleTask key={index} itemTask={item} />
            })}
        </ul>
    )
}

export default ListTask
