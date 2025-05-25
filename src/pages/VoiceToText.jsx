import { useState, useEffect } from 'react';

import OnOffStatusIndicator from '../components/OnOffStatusIndicator';
import RecordButton from '../components/RecordButton';

function VoiceToText() {
    const [isRecording, setIsRecording] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isError, setIsError] = useState(false);
    const [transcript, setTranscript] = useState("Transcript will appear here...");

    function handleRecordButtonClick() {
        setIsRecording(!isRecording);
    };

    useEffect(() => {
        const getText = async () => {
            setIsError(false);
            setIsProcessing(true);
            try {
                const response = await fetch('https://api.sampleapis.com/futurama/infos');
            const data = await response.json();
            setTranscript(data[0]?.synopsis);
            } catch (error) {
                setIsError(true);
                console.error('Error fetching data:', error);
            }
            setIsProcessing(false);
            console.log(transcript)
        }
        if (isRecording) {
            getText();
        }
    }, [isRecording]);

    return (
        <main className="container mx-auto p-4">
            <div className="max-w-4xl mx-auto mb-6">
                <h1 className="text-xl font-bold mb-4 text-center">Voice to Text</h1>
                <p className="text-center mb-4">
                    TBD
                </p>
            </div>
            
            <div className="flex flex-row mb-6 gap-4">
                <div className="w-1/3">
                    <RecordButton
                        isRecording={isRecording}
                        onClick={handleRecordButtonClick} />
                </div>
                <div className="w-2/3 bg-gray-800 rounded-lg p-4 flex flex-col gap-4">
                    <OnOffStatusIndicator     
                        statusName="Recording" 
                        statusValue={isRecording}
                        activeColour="bg-red-500"
                    />
                    <OnOffStatusIndicator      
                        statusName="Processing" 
                        statusValue={isProcessing}
                        activeColour='bg-blue-500'
                    />
                </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 min-h-64">
                <h2 className="text-lg font-bold mb-4 text-white">Transcript</h2>
                <div className="bg-white rounded border p-4 min-h-48 text-gray-700">
                    <p className="italic">{transcript}</p>
                </div>
            </div>
            
        </main>
    );
}

export default VoiceToText;