import React, {useContext} from 'react'
import { ThemeContex, themes } from './Theme'

function Form(){
    
    const context = useContext(ThemeContex)

    const renderForm = (
        <form>
            <label>Name: </label>
            <input></input>
            <label>E-mail: </label>
            <input></input>            
            <label>Age: </label>
            <input></input>            
            <label>Phone: </label>
            <input></input>
        </form>
    )
    const renderNotLogged = (
        <h1>
            Not Logged
        </h1>
    )

    return(
        <div>
        {context.token ? renderForm:renderNotLogged}
        </div>
    )
}

export default Form