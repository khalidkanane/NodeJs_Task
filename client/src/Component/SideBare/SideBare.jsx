import React from 'react'
import { Link } from 'react-router-dom'

const SideBare = () => {
  return (
    <aside class="flex flex-col w-[250px] h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l  shadow-lg m-3 rounded-lg bg-gray-100 border-2 border-blue-200">


    <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <Link class="flex items-center px-4 py-2 mt-5 text-blue-600 transition-colors duration-300 transform rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Task</span>
            </Link>

            <Link class="flex items-center px-4 py-2 mt-5 text-blue-600 transition-colors duration-300 transform rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 dark:hover:text-blue-200 hover:text-blue-700" href="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Users</span>
            </Link>


        </nav>
    </div>
</aside>
  )
}

export default SideBare