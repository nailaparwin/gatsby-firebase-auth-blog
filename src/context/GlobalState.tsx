import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//create the initial state
const initialState = {
    feeds: [
        {name:"user",
        message:"Its amazing ....",
        pic:"feedimg.jpg"},
            
    ],
    addFeeds: (val: any) => {},
}

// create the Global Context
export const GlobalContext = createContext(initialState);

//create a provider for global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //action
   
    function addFeeds(feed){
        dispatch({
            type: 'ADD_FEEDS',
            payload: feed
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                feeds: state.feeds,                
                addFeeds
            }
        }>
            {children}
            </GlobalContext.Provider>
    )
}