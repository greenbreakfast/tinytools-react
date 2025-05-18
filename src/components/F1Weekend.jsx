function F1Weekend({weekendObject, isActive}) {
    const getEventDateAsMonthDay = (event) => {
        return event.dateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    }
    const getEventDateAsYear = (event) => {
        return event.dateTime.toLocaleDateString('en-US', { year: 'numeric' });
    }
    const getEventDayAndTime = (event) => {
        const day = event.dateTime.toLocaleDateString('en-US', { weekday: 'short'});
        const time = event.dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit'});
        return `${day}, ${time}`;
    }

    const raceDates = `${getEventDateAsMonthDay(weekendObject.events[0])} - ${getEventDateAsMonthDay(weekendObject.events[weekendObject.events.length-1])} ${getEventDateAsYear(weekendObject.events[0])}`;

    const currentDate = new Date();
    const getEventStatus = (event) => {
        function addHours(date, hours) {
            return new Date(date.getTime() + (hours * 60 * 60 * 1000));
        }
        if (!isActive || !event || !event.dateTime) return '';
        
        if (currentDate < event.dateTime) {
            // event is coming up
            return '⏳ ';
        } else if (currentDate < addHours(event.dateTime,3)) {
            // event is live
            return '▶️ '
        } else {
            // event is over
            return '🏁 ';
        } 
    }

    return (
        <div className={`p-6 rounded-lg shadow-lg w-full mb-6 ${isActive ? 'bg-gradient-to-r from-gray-800 to-blue-900 border-2 border-blue-500' : 'bg-gray-800'}`}>
            {isActive && (
                <span className="mr-2 bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                    LIVE NOW
                </span>
            )}
            <div className="flex flex-col md:flex-row mb-4 md:mb-2">
                <div className="w-full md:w-2/3 mb-2 md:mb-0">
                    <span className="text-white text-lg font-bold">
                        {weekendObject.name}
                    </span>
                    
                </div>
                <div className="w-full md:w-1/3 text-left md:text-right">
                    <p className="text-gray-300">
                        {raceDates}
                    </p>
                </div>
            </div>

            <div className="block border-t border-gray-600 my-3"></div>

            <div className="space-y-2">
                {weekendObject.events.map(event => (
                    <div key={event.dateTime.toString()} className="flex text-gray-200">
                        <div className="w-1/2 md:w-1/3">
                            {getEventStatus(event)}{event.type}
                        </div>
                        <div className="w-1/2 md:w-2/3 text-gray-400">
                            {getEventDayAndTime(event)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default F1Weekend;