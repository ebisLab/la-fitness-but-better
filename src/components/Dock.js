import React from 'react';

import { apps } from './apps';

export default function Dock({setCurrentApp, item}) {
    const [availableApps] = React.useState(apps);
    console.log('item', item.member_photo)
    if(item.member_photo === '') {
        return (
            <div className="dock w-full pb-2 fixed bottom-0">
                <ul className="osx-dock dock-item mx-auto w-max p-1 space-x-2 flex flex-row justify-center justify-between bg-white bg-opacity-25 blur rounded-2xl shadow-2xl">
                    {availableApps.map((app) => {
                        if (app.title === 'FaceTime'){
                            return(<div
                                key={app.title}
                                onClick={() =>setCurrentApp(app)}
                            >Take Photo Now</div>)
                        }
                    })}
                </ul>
            </div>
            )
        }
    else {return "awww"}
    // return (
    //   <div className="dock w-full pb-2 fixed bottom-0">
    //     <ul className="osx-dock dock-item mx-auto w-max p-1 space-x-2 flex flex-row justify-center justify-between bg-white bg-opacity-25 blur rounded-2xl shadow-2xl">
    //       {availableApps.map((app) => {
    //     (
    //         <div>
    //             <div>{item.first_name}</div>
    //         </div>
    //       )
    //       })}
    //     </ul>
    //   </div>
    // )
}
