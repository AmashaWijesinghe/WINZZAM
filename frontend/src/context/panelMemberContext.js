import { createContext, useReducer } from "react"

export const PanelMemberContext = createContext()
export const panelMembersReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PANEL_MEMBERS':
            return {
                panelMembers: action.payload
            }
        default:
            return state
    }
}

export const PanelMemberContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(panelMembersReducer, {
        panelMembers: null
    })

    
    return(
        <PanelMemberContext.Provider value={{...state, dispatch}}>
            { children }
        </PanelMemberContext.Provider>
    )
}

