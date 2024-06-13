import React, { useEffect, useState } from 'react'
import Tasks from '../../Component/Table/Tasks'
import axios from 'axios';
import Add_Tasks from '../../Component/AddTasks/AddTasks';

const ListeTasks = () => {
  const [task, setTasks] = useState([]);
  const [count,setCount]=useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
     
      await axios.get('http://localhost:8080/tasks/api/tasks')
      .then((response)=>{
        setTasks(...task,response.data.tasks);
        console.log(response)
       }).catch ((error)=>{
        console.error('Error fetching tasks:', error);
      })
    };

    fetchTasks();
  }, [count]);

  return (

<div className='w-full'> 
    <div className='m-2 flex justify-end items-end '>
         <Add_Tasks setCount={setCount}/> 
</div>
    <div className="grid grid-cols-1 gap-1 overscroll-x-none">
      {

task!=null?(
        task.map((task, index) => (
          <Tasks key={index} task={task} />
        ))


  ):(<p>Loading ...</p>)
      }
      </div>
    </div>
  );
};


export default ListeTasks ;