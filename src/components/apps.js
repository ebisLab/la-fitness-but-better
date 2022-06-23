import * as React from "react";
import FaceTime from "./FaceTime";

export const apps = 
[

    {
      title: "Safari",
      icon: "safari",
      content: () => <div>safari</div>
    },
    {
      title: "FaceTime",
      icon: "facetime",
    //   content: ()=><FaceTime juice={"juice"}/>

      content: (props)=><FaceTime juice={"juice"} {...props}/>
    },
  ];