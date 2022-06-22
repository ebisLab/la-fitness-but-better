import React from 'react'

export default function Display(props) {
    // console.log("props", props)
    const {currentApp, changecurrentuser, setProvileImg}=props
    // console.log('display', changecurrentuser())
    // useEffect(() => {
    //     console.log('curr', props.currentApp?.content('listen'))
  
    //   }, [])
    if (currentApp == null) {
        return <div />;
      }


      
  return (
    <div>
        check this out
        {currentApp.content?.({changecurrentuser,setProvileImg}) ?? `I'm ${currentApp.title} app`}

    </div>
  )
}
