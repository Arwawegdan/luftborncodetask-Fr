import { useState, useEffect } from "react";
import api from "../services/apiClient";

import moment from 'moment'; 

const FinishedTasksPage = () => {
  const [finishedTasks , setFinishedTasks] = useState([]); 

  const getAllTasks = async () => {
    try {
        const response = await api.get('TodoListTasks/FinishedTasks');
        response?.data && setFinishedTasks(response?.data);
    } catch (error) {
        throw new Error("there's an error while fetching all tasks", error);
    }
}

useEffect(() => {
    getAllTasks();
}, [])


  
  function HandleDateTime(taskFeadline) {
    return moment(taskFeadline).format("MMMM Do YYYY, h:mm a");
  }

  function HandleStatus(statusNumber){
    if(statusNumber == 0) return "In-Progress"
    if(statusNumber == 1) return "Not Started"
    if(statusNumber == 2) return "Finished"
    if(statusNumber == 3) return "Postponded"
  }


  return (
    <div className="bg-white max-w-[1340px] mx-auto">
      <h1 className="text-2xl font-medium capitalize text-center my-8">
        All tasks
      </h1>
      <div className="relative overflow-x-auto mt-10 text-gray-700">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Task Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
        
            </tr>
          </thead>
          <tbody>
             {finishedTasks.map((task) => (
              <tr className="bg-gray-100 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  <td className="px-6 py-4">{task.discription}</td>
                </th>
                <td className="px-6 py-4">{HandleDateTime(task.deadline)}</td>
                <td className="px-6 py-4">{HandleStatus(task.status)}</td>
            
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinishedTasksPage;
