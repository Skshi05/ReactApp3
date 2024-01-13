import React, { useState } from 'react'
//import './App.css'
export default function ActivityGen() {
    const[activity,setActivity] = useState([])
    const[currActivity,setCurrActivity] = useState('')
      const Getapi = async()=>{
        let url = "https://www.boredapi.com/api/activity";
        let response = await fetch(url);
        let data = await response.json();
       // console.log(data)
        setActivity(prevactivity => [...prevactivity,currActivity]);
       //setActivity(prevactivity => prevactivity.concat(currActivity));
        setCurrActivity(data.activity)
      
    }
    
    

  return (
    <>
    <div className="container">
      <div className="btn">
      <button onClick={Getapi}>Generate Activity</button>
    </div>
    <div className="activities-container">
        <ul className="activity-list">
          <li className="current-activity">{currActivity}</li>
          {activity.map((activity) => (
            <li className="activity">{activity}</li>
          ))}
        </ul>
      </div>
      </div>
    </>
  )
}
