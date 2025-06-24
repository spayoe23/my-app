import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyEvent.css';


function MyEvent() {
const navigate = useNavigate();

const [events, setEvents] = useState([
{
id: 1,
title: 'Wedding Setup',
status: 'Completed',
description: 'Decor, music, catering all completed successfully on June 20.',
},
{
id: 2,
title: 'Corporate Party',
status: 'Ongoing',
description: 'Stage and lighting planned. Catering not yet finalized.',
},
{
id: 3,
title: 'Birthday Event',
status: 'Ongoing',
description: 'Theme selected. Venue confirmed. Decoration pending.',
},
]);

const [expandedId, setExpandedId] = useState(null);

const handleExpand = (id) => {
setExpandedId(expandedId === id ? null : id);
};

const handleContinuePlanning = () => {
navigate('/start-planning');
};

return (
<div className="my-event-container">
<h1>My Events</h1>
<div className="chat-list">
{events.map((event) => (
<div key={event.id} className={`chat-bubble ${event.status.toLowerCase()}`}>

<div className="bubble-header" onClick={() => handleExpand(event.id)}>
<div className="event-title">{event.title}</div>
<div className="event-status">{event.status}</div>
</div>
    {expandedId === event.id && (
          <div className="bubble-details">
            <p>{event.description}</p>
            {event.status === 'Ongoing' && (
              <button onClick={handleContinuePlanning}>Continue Planning</button>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
);
}

export default MyEvent;