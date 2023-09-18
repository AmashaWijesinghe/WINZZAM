import { useContext } from "react"
import { TuitionMasterContext } from "../context/tuitionMasterContext"

export const useTuitionMasterContext = () => {
    const context = useContext(TuitionMasterContext)
    if(context === undefined) {
        throw new Error('useTuitionMasterContext must be used within a TuitionMasterContextProvider')
    }
    return context
}