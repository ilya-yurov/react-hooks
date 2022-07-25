import React, {useContext, useReducer} from 'react';

//? Action types definitions
const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

//! CORRECT WAY. WHEN MORE THAN ONE EXPORT ELEMENTS WE CREATE ONE CONTEXT...
export const AlertContext = React.createContext()

export const useAlert = () => {
	return useContext(AlertContext)
}

//!   SECOND WE INIT REDUCER
const reducer = (state, action) => {
	switch (action.type) {
		case SHOW_ALERT: return {...state, visible: true, text: action.text}
		case HIDE_ALERT: return {...state, visible: false}
		default: return state
	}
}

export const AlertProvider = ({children}) => {
//!   FIRST WE INIT REDUSER WITH USEREDUCER() HOOK WITH INITIAL VALUES
	const [state, dispatch] = useReducer(reducer, {
		visible: false,
		text: ''
	})

//!   THIRD - INIT THE FUNCS, WHICH DISPATCH ACTIONS TO REDUCER
	const show = text => dispatch({text: text, type: SHOW_ALERT});
	const hide = () => dispatch({type: HIDE_ALERT});


	return (
//! ...LAST ONE - WE TRANSMIT THE ELEMENTS AS AN OBJECT IN VALUE PARAMETERS
		<AlertContext.Provider value={{
			visible: state.visible,
			text: state.text,
			show, hide
		}}>
			{children}
		</AlertContext.Provider>
	)
}