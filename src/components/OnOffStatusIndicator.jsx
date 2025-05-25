function OnOffStatusIndicator({statusValue, statusName, activeColour}) {
    return (
        <div className="bg-gray-600 rounded-lg p-4 text-white flex items-center h-1/2">
            <div className={`w-3 h-3 rounded-full mr-3 ${statusValue ? activeColour : 'bg-white'}`}></div>
            <span className="text-lg font-bold">{statusName}</span>
        </div>
    );
}

export default OnOffStatusIndicator;