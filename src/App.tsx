import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from './alias/alias'
import InputField from './components/InputField'
import ListTask from './components/ListTask'

const App: React.FC = () => {
    const tasks = useSelector((state: IRootState) => state.listTask)

    return (
        <section className=" d-block p-5 w-50 bg-danger text-center mx-auto my-5 rounded">
            <InputField listTask={tasks} />
            <ListTask listTask={tasks} />
        </section>
    )
}

export default App
