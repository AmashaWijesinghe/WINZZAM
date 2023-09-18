import { createContext, useReducer } from "react"

export const TuitionMasterContext = createContext()
export const tuitionMastersReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TUITION_MASTERS':
            return {
                tuitionMasters: action.payload
            }
        default:
            return state
    }
}

export const TuitionMasterContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(tuitionMastersReducer, {
        tuitionMasters: null
    })

    
    return(
        <TuitionMasterContext.Provider value={{...state, dispatch}}>
            { children }
        </TuitionMasterContext.Provider>
    )
}

