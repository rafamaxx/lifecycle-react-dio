import React, {useEffect, useState, memo} from 'react'

const areEqual = (prevProps, nextProps)=>{
    return prevProps.loading === nextProps.loading
}

function Twitter(props) {
    const {loading} = props
    const [tweet,setTweet] = useState('title')

    useEffect(()=>{
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componenctDidUpdat: loading', loading)
    },[])

    useEffect(()=>{
        console.log('componetDidUpdate', loading)
    }, [loading])

    useEffect(() =>{
        return () =>{
            console.log('componentWillUnmount: removed')
        }
    },[])

    const handleTweet = () =>{
        setTweet = ('Tweet Atualizado')
    }

    console.log('Tweet Atualizado', tweet)
    return (
        <div>
            Teste
        </div>
    )
}

export default memo(Twitter,areEqual)