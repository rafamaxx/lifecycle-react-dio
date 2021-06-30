import React, {Fragment}  from 'react'

const store = [{
    type: 'X'
  },{
    type: 'Y'
  },{
    type: 'Z'
  }
]

function Column({type}){
  return(
    <tr>
      <td>{type}</td>
    </tr>
  )
}
function App(){

  const renderColumns = (element, key) => (
  <Fragment key={'Column-${key}'}>
     <Column type={element.type} />
  </Fragment>
  )
  return(
    <table>
        {store.map(renderColumns)}
    </table>
  ) 
}

export default App