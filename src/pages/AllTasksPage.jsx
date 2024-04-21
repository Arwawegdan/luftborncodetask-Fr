import { useState } from "react";
import { useGetTasksContext } from "../contexts/getTasksContext";
import api from "../services/apiClient";

import moment from 'moment'; 

const AllTasksPage = () => {
  const { tasks } = useGetTasksContext([]);


  function HandleDateTime(taskFeadline) {
    return moment(taskFeadline).format("MMMM Do YYYY, h:mm a");
  }

  function HandleStatus(statusNumber){
    if(statusNumber == 0) return "In-Progress"
    if(statusNumber == 1) return "Finished"
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
              <th scope="col" className="px-6 py-3">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
             {tasks.map((task) => (
              <tr className="bg-gray-100 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  <td className="px-6 py-4">{task.discription}</td>
                </th>
                <td className="px-6 py-4">{HandleDateTime(task.deadline)}</td>
                <td className="px-6 py-4">{HandleStatus(task.status)}</td>
                <td className="px-6 py-4">
                {task.status === 0 ? ( // Use ternary operator for cleaner syntax
                  <button
                    onClick={async () => 
                      await api.put("TodoListTasks", { ...task, status: 1 })
                    }
                    className="bg-white border rounded"
                  >
                    Finished Task 
                  </button>
                ) : (
                  <span>Well done!</span> // Use span for display only
                )}
              </td>
            </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasksPage;
