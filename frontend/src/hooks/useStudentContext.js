import { useContext } from "react"
import { StudentContext } from "../context/studentContext"

export const useStudentContext = () => {
    const context = useContext(StudentContext)
    if(context === undefined) {
        throw new Error('useStudentContext must be used within a StudentContextProvider')
    }
    return context
}