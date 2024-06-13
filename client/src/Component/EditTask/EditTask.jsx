import { Button, Modal, Textarea } from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { LuFileEdit } from 'react-icons/lu'
import axios from 'axios'

const EditTask = ({ task }) => {
    const [openModal, setOpenModal] = useState(false)
    const [state, setState] = useState({
        title: task.title,
        description: task.description,
        status: task.status,
        assignedTo: task.assignedTo
    })

    useEffect(() => {
        setState({
            title: task.title,
            description: task.description,
            status: task.status,
            assignedTo: task.assignedTo
        })
    }, [task])

    const handler = (e) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const editTask = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8080/tasks/api/tasks/${task._id}`, state)
            console.log(response.data)
            toast.success('Task has been updated')
       
            setOpenModal(false)
        } catch (error) {
            console.error('Error updating task:', error)
            toast.error('Failed to update task')
        }
    }

    return (
        <>
            <Toaster />
            <button onClick={() => setOpenModal(true)} type="button" className="mr-2 rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 flex items-center">
                <LuFileEdit /> Edit
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Edit Task</Modal.Header>
                <Modal.Body>
                    <form onSubmit={editTask} className='m-3'>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 ">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input onChange={handler} value={state.title} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Task title" required />
                            </div>
                            <div>
                                <label htmlFor="assignedTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assigned To</label>
                                <input onChange={handler} value={state.assignedTo} type="text" name="assignedTo" id="assignedTo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Assigned to" required />
                            </div>
                        </div>
                        <div className="mb-4  ">
                            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                            <select onChange={handler} value={state.status} name="status" id="status" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5">
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                                <option value="incompletde">Incompletde</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</span>
                            <Textarea id="description" name="description" onChange={handler} value={state.description} placeholder="Task description..." required rows={4} />
                        </div>
                        <button className='bg-sky-700 hover:bg-sky-800 text-white w-full h-full rounded-md' type="submit">Update</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Discard
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditTask
