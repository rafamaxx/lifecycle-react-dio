import React,{Component} from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super(props)    
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo){
        console.log('error', error)
        console.log('errorInfor',errorInfo)
        this.setState({
            hasError:true
        })
    }
    render(){
        if(this.state.hasError)
        {
            return <h1>Erro encontrado!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary