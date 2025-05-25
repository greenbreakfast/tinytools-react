import { useReducer, useEffect } from 'react';

import OnOffStatusIndicator from '../components/OnOffStatusIndicator';
import RecordButton from '../components/RecordButton';

function VoiceToText() {
    const stateReducer = (state, action) => {
        switch (action.type) {
            case 'SET_IS_RECORDING':
                return { ...state, isRecording: true};
            case 'SET_IS_NOT_RECORDING':
                return { ...state, isRecording: false};
            case 'SET_IS_PROCESSING':
                return { ...state, isProcessing: true};
            case 'SET_IS_NOT_PROCESSING':
                return { ...state, isProcessing: false};
            case 'RESET_ERROR':
                return { ...state, error: null};
            case 'SET_ERROR':
                return { ...state, error: action.payload};
            case 'SET_TRANSCRIPT':
                return { ...state, transcript: action.payload};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(stateReducer, {
        isRecording: false,
        isProcessing: false,
        error: null,
        transcript: "Transcript will appear here..."
    })

    function handleRecordButtonClick() {
        console.log(`setting isRecording to`, !state.isRecording ? {type: 'SET_IS_RECORDING'} : {type: 'SET_IS_NOT_RECORDING'})
        dispatch(!state.isRecording ? {type: 'SET_IS_RECORDING'} : {type: 'SET_IS_NOT_RECORDING'});
        console.log(state);
    };

    useEffect(() => {
        const getText = async () => {
            dispatch({type: 'RESET_ERROR'});
            dispatch({type: 'SET_IS_PROCESSING'});
            try {
                const response = await fetch('https://api.sampleapis.com/futurama/info');
                const data = await response.json();
                dispatch({
                    type: 'SET_TRANSCRIPT',
                    payload: data[0]?.synopsis
                })
            } catch (error) {
                dispatch({
                    type: 'SET_ERROR',
                    payload: error
                })
                console.error('Error fetching data:', error);
            }
            dispatch({type: 'SET_IS_NOT_PROCESSING'});
            console.log(state.transcript)
        }
        if (state.isRecording) {
            getText();
        }
    }, [state.isRecording]);

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
                        isRecording={state.isRecording}
                        onClick={handleRecordButtonClick} />
                </div>
                <div className="w-2/3 bg-gray-800 rounded-lg p-4 flex flex-col gap-4">
                    <OnOffStatusIndicator     
                        statusName="Recording" 
                        statusValue={state.isRecording}
                        activeColour="bg-red-500"
                    />
                    <OnOffStatusIndicator      
                        statusName="Processing" 
                        statusValue={state.isProcessing}
                        activeColour='bg-blue-500'
                    />
                </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 min-h-64">
                <h2 className="text-lg font-bold mb-4 text-white">Transcript</h2>
                <div className="bg-white rounded border p-4 min-h-48 text-gray-700">
                    <p className="italic">{state.transcript}</p>
                </div>
            </div>
            
        </main>
    );
}

export default VoiceToText;