import React from 'react'

export default function Display(props) {
    console.log("props", props)
    const {currentApp, changecurrentuser, setProvileImg}=props

    if (currentApp == null) {
        return <div />;
      }


      
  return (
    <div>
        {currentApp.content?.() ?? `I'm ${currentApp.title} app`}

    </div>
  )
}
