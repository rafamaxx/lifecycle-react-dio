import React, {Component} from 'react'

class Twitter extends Component{

    state={
        tweet: 'title'
    }

    componentDidMount(){
        const {posts, loading} = this.props
        console.log('componentDidMount',posts)
        console.log('componenctDidUpdat: loading', loading)
    }

    componentDidUpdate(prevProps){
        const {loading} = this.props
        if(this.props.loading !== prevProps.loading){
            console.log('componentDidUpdate: loading', loading)
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount: Removed :')
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.tweet !== nextState.tweet
    }


    render(){
        const {posts} = this.props
        console.log('Render',posts)
        return(
            <div>
                Teste
            </div>
        )
    }
}

export default Twitter