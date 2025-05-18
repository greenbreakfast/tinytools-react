import { useMemo } from 'react';

import f1Schedule2025 from '../utils/f1ScheduleData2025';

import F1Weekend from '../components/F1Weekend';

function F1Schedule() {
    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    const currentDate = new Date();
    // const currentDate = new Date('2025-01-23T21:30:00-05:00'); // For testing purposes, set a fixed date
    const remainingRaces = useMemo(() => {
        console.log(currentDate);
        return f1Schedule2025.filter((weekend) => {
            const raceEvent = weekend.events.find(event => event.type === "Race");
            return raceEvent && (raceEvent.dateTime > currentDate || isSameDay(raceEvent.dateTime, currentDate));
        });
    }, [currentDate]);
    const firstWeekendActive = useMemo(() => {
        const firstWeekend = remainingRaces[0];
        if (!firstWeekend) return false;
        const firstEventTime = firstWeekend.events[0].dateTime;
        const lastEventTime = firstWeekend.events[firstWeekend.events.length-1].dateTime;
        
        return (
            isSameDay(firstEventTime, currentDate) ||
            isSameDay(lastEventTime, currentDate) ||
            (firstEventTime < currentDate && lastEventTime > currentDate)
        )
    }, [remainingRaces, currentDate]);

    return (
        <main className="container mx-auto p-4">
            <div className="max-w-4xl mx-auto mb-6">
                <h1 className="text-xl font-bold mb-4 text-center">F1 Schedule 2025</h1>
                <p className="text-center mb-4">
                    🏎️ All the <strong>remaining</strong> races in the Formula 1 2025 season
                    <br />
                    🕰️ All times are in ET (Eastern Time)
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                {remainingRaces.map((weekend, index) =>
                    <F1Weekend 
                        key={weekend.name} 
                        weekendObject={weekend} 
                        isActive={index === 0 && firstWeekendActive}
                    />
                )}
            </div>
            
        </main>
    )
}

export default F1Schedule;