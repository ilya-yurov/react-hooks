import React, {createContext, useContext, useState} from 'react';


//! CORRECT WAY. WHEN MORE THAN ONE EXPORT ELEMENTS WE CREATE ONE CONTEXT...
export const AlertContext = React.createContext()
//? First way (not correct). CREATE MORE THAN ONE CONTEXT
/* export const AlertToogleContext = React.createContext() */

export const useAlert = () => {
	return useContext(AlertContext)
}

//? First way (not correct). CREATE MORE THAN ONE CONTEXT
/* export const useAlertToogle = () => {
	return useContext(AlertToogleContext)
} */

export const AlertProvider = ({children}) => {
	//Alert comp defines
	const [alert, setAlert] = useState(false);
	const toogle = () => {
		setAlert(prev => !prev)
	}


	return (
//! ...AND WE TRANSMIT THE ELEMENTS AS AN OBJECT IN VALUE PARAMETERS
		<AlertContext.Provider value={{
			visible: alert,
			toogle
		}}>
			{children}
		</AlertContext.Provider>
	)
}