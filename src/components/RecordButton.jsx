function RecordButton({isRecording, onClick}) {
    return (
        <main className="bg-gray-800 rounded-lg p-6 text-white flex flex-col items-center justify-center">
            <div className="mb-4">
                <button className={`w-16 h-16 bg-white rounded-full flex items-center justify-center hover:'bg-gray-100' transition-colors text-gray-800 text-3xl`}
                onClick={onClick}>
                    {isRecording? '⏹' : '▶'}
                </button>
            </div>
            <span className="text-lg font-bold">{isRecording? 'Recording...' : 'Record'}</span>
        </main>
    )
}

export default RecordButton;