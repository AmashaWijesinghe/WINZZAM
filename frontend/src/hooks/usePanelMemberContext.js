import { useContext } from "react"
import { PanelMemberContext } from "../context/panelMemberContext"

export const usePanelMemberContext = () => {
    const context = useContext(PanelMemberContext)
    if(context === undefined) {
        throw new Error('usePanelMemberContext must be used within a PanelMemberContextProvider')
    }
    return context
}