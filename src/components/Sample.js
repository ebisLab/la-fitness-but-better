import React from 'react'

export default function Sample({
    usersDatabase, 
    currentUser, 
    setUsersDatabase, 
    changeThisUser,
    // getInput, 
    // setGetInput
}) {
    const [ getInput,
         setGetInput
        ] = React.useState('')
    const [ changeData, setChangeData] = React.useState('')
    const changeHandler =(e)=>{
        setGetInput(e.target.value)

    }

//     const changeThisUser = (data)=>{
//         console.log('change this ', data)
//  }
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log('clicked here', getInput)
 }


// console.log('changedata', changeData)
    console.log('userdatabase', usersDatabase)
  return (
    <div>
        <div>{changeData}</div>
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler}/>
            <button 
            onClick={()=>{changeThisUser(getInput)}}
            >click</button>
        </form>
    </div>
  )
}
