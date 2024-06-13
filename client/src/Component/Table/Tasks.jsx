import axios from 'axios';

import React from 'react';
import toast from 'react-hot-toast';

import { MdDeleteOutline } from "react-icons/md";
import EditTask from '../EditTask/EditTask';


const Tasks = ({task}) => {

    const handleDelete = async (e) => {
       
            
        await axios.delete(`http://localhost:8080/tasks/api/tasks/${task._id}`)
        .then((response)=>{

         
            toast.success('delete success')
         


    
        })
        .catch((error)=> {
          console.error('Error deleting task:', error);
        })
      
    }



    return (
        <div className="m-5">
            <div className="group w-full mx-2 mt-1 grid max-w-screen-md grid-cols-12 space-x-4 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
                <a href="#" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"></a>
                <div className="col-span-11 flex  flex-col w-full pr-8 text-left sm:pl-4 ">
                    <h3 className="text-sm text-gray-600">Title</h3>
                    <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">{task.title}</a>
                    <p className="overflow-hidden pr-7 text-sm"><span className="font-bold">Description</span>: {task.description}</p>
                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                        <div>Status: <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">{task.status}</span></div>
                        <div>Assigned To: <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">{task.assignedTo}</span></div>
                    </div>
                    <div className="flex w-full justify-end items-center mt-4">
                    <EditTask task={task}  />
                        <button onClick={(e)=>handleDelete(e)} className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 flex items-center"><MdDeleteOutline /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;


