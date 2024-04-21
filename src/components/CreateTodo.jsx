import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import api from "../services/apiClient";

const CreateTodo = ({ handleToggle }) => {
const [task , setTask] = useState({}); 


    return (
        <div className='fixed top-0 left-0 bg-black/30 w-full h-full p-2'>
            <div className='w-full md:w-1/3 mx-auto fixed top-1/3 left-1/2 py-4 px-2
                -translate-x-1/2 -translate-y-1/2 bg-white border shadow rounded flex flex-col'>
                <div className="text-end">
                    <button type="button" className='mx-2 p-1' onClick={handleToggle}>
                        <IoCloseOutline size={20} />
                    </button>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="deadline" className="uppercase text-sm p-0.5">deadline</label>
                        <input
                            type="date"
                            id="deadline"
                            placeholder="enter the deadline"
                            value={task.deadline}
                            onChange={(e) => setTask({ ...task, deadline: e.target.value })} 
                            className="border shadow-sm rounded p-2 placeholder:uppercase placeholder:text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="content" className="uppercase text-sm p-0.5">content</label>
                        <input
                            type="text"
                            id="content"
                            placeholder="enter the content"
                            value={task.discription}
                            onChange={(e) => setTask({ ...task, discription: e.target.value })} 
                            className="border shadow-sm rounded p-2 placeholder:uppercase placeholder:text-sm"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="border rounded py-2 px-3 w-fit bg-indigo-500 text-white font-medium capitalize"
                            onClick={async () => await api.post("TodoListTasks" , task)}
                        >
                            add task

                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateTodo