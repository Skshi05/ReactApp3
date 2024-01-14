import React, { useState } from 'react';

export default function ActivityGen() {
  const [activity, setActivity] = useState([]);

  const Getapi = async () => {
    try {
      let url = "https://www.boredapi.com/api/activity";
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      // Check if the response includes the expected properties
      if (data.type && data.participants !== undefined && data.price !== undefined && data.accessibility!== undefined &&data.key !== undefined) {
        setActivity(prevactivity => [...prevactivity, { ...data, id: Date.now(), expanded: false }]);
      } else {
        console.error("API response is missing expected properties.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Expand = (id) => {
    setActivity(prevactivity => {
      return prevactivity.map(item => {
        if (item.id === id) {
          return { ...item, expanded: !item.expanded };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="btn">
          <button onClick={Getapi}>Generate Activity</button>
        </div>
        <div className="activities-container">
          <ul>
            {activity.map((activityItem) => (
              <li key={activityItem.id} className="activity">
                {activityItem.activity}
                <button className="expbtn" onClick={() => Expand(activityItem.id)}>
                  {activityItem.expanded ? 'Collapse' : 'Expand'}
                </button>
                {activityItem.expanded && (
                  <div className="expanded-info">
                    <p>Type: {activityItem.type}</p>
                    <p>Participants: {activityItem.participants}</p>
                    <p>Price: {activityItem.price}</p>
                    <p>Accessibility: {activityItem.accessibility}</p>
                    <p>Key: {activityItem.key}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
