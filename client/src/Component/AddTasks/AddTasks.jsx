import axios from 'axios'
import { Button, Modal, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Add_Tasks = ( {setCount} ) => {
    const [openModal, setOpenModal] = useState(false)
    const [state, setState] = useState({
        title: "",
        description: "",
        status: "pending",
        assignedTo: ""
    })

    const handler = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const addTask = async (e) => {
        e.preventDefault()
        const task = new FormData()
        task.append("title", state.title)
        task.append("description", state.description)
        task.append("status", state.status)
        task.append("assignedTo", state.assignedTo)

        try {
            const response = await axios.post("http://localhost:8080/tasks/api/tasks",state)
            console.log(response.data.task)
            toast.success('New task has been added')
            
        
            setOpenModal(false)
        } catch (error) {
            console.error('Error adding task:', error)
            toast.error('Failed to add task')
        }
        setCount(true)
    }

    return (
        <>
            <Toaster />
            <button onClick={() => setOpenModal(true)} type="button" className="flex items-center justify-center bg-sky-500 hover:bg-sky-800 font-medium rounded-lg text-sm px-4 py-2">
                +  Add Task
            </button>
        <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}   >
                <Modal.Header>Add New Task</Modal.Header>
                <Modal.Body>
                    <form onSubmit={addTask} className='m-3'>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input onChange={handler} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Task title" required />
                            </div>
                            <div>
                                <label htmlFor="assignedTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assigned To</label>
                                <input onChange={handler} type="text" name="assignedTo" id="assignedTo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Assigned to" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</span>
                            <Textarea id="description" name="description" onChange={handler} placeholder="Task description..." required rows={4} />
                        </div>
                        <button className='bg-sky-700 hover:bg-sky-800 text-white w-full h-full rounded-md' type="submit">Add</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Discard
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </>
    )
}

export default Add_Tasks
