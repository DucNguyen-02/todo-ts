import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Todo } from '../model'

interface props {
    showAlert: any
    msg: string
    type: string
    tasks: Todo[]
}

const Alert = ({ showAlert, msg, type, tasks }: props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(showAlert())
        }, 1000)
        return () => clearTimeout(timeout)
    }, [tasks])
    return <h6 className={``}>{msg}</h6>
}

export default Alert
