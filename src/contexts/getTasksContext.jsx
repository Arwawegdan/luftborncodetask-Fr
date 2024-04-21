import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/apiClient";

const getTasksContext = createContext();

export const GetTasksContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const getAllTasks = async () => {
        try {
            const response = await api.get('TodoListTasks');
            response?.data && setTasks(response?.data);
        } catch (error) {
            throw new Error("there's an error while fetching all tasks", error);
        }
    }

    useEffect(() => {
        getAllTasks();
    }, [])

    return (
        <getTasksContext.Provider
            value={{
                tasks
            }}
        >
            {children}
        </getTasksContext.Provider>
    )
};


export const useGetTasksContext = () => useContext(getTasksContext);


