import * as React from "react";
// import FaceTime from "./FaceTime";
export const apps = [
    {
      title: "Finder",
      icon: "finder"
    },
    {
      title: "Safari",
      icon: "safari",
      content: () => <div>safari</div>
    },
    {
      title: "FaceTime",
      icon: "facetime",
    //   content: (props)=><FaceTime juice={"juice"} {...props}/>
    },
    {
      title: "TextEdit",
      icon: "notes",
      content: () => <div>textedid</div>
    },
    {
      title: "Calculator",
      icon: "calculator",
      content: () => "App to be delivered soon"
    },
    {
      title: "AppStore",
      icon: "appstore",
      content: () => "App to be delivered soon"
    }
  ];