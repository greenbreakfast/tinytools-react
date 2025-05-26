import { useEffect, useReducer, useRef } from 'react';

import OnOffStatusIndicator from '../components/OnOffStatusIndicator';
import RecordButton from '../components/RecordButton';

import aaiTranscribeApi from '../utils/aaiTranscribeApi';

function VoiceToText() {
    const mediaRecorderRef = useRef(null)
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
            case 'SET_AUDIO_DATA':
                return { ...state, audioData: [ ...state.audioData, action.payload]};
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
        audioData: [],
        transcript: "Transcript will appear here..."
    })

    const startRecording = async () => {
        // TODO: handle case where waiting on permission and case where denied permission
        try {
            if (navigator.mediaDevices) {
                const stream = await navigator.mediaDevices.getUserMedia({audio: true});
                mediaRecorderRef.current = new MediaRecorder(stream);

                mediaRecorderRef.current.start();
                dispatch({type: 'SET_IS_RECORDING'});

                mediaRecorderRef.current.ondataavailable = async (event) => {
                    console.log('data available');
                    dispatch({type: 'SET_AUDIO_DATA', payload: event.data});
                };
            } else {
                console.error('getUserMedia is not supported in this browser.');
                // TODO: add user visible error message
            }
        } catch (error) {
            console.error('Error accessing microphone:', error);
            // TODO: add user visible error message
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            dispatch({type: 'SET_IS_NOT_RECORDING'});
        }
    }

    const handleRecordingData = async () => {
        dispatch({type: 'RESET_ERROR'});
        dispatch({type: 'SET_IS_PROCESSING'});
        try {
            // console.log(process.env.AAI_API_KEY)
            const transcript = await aaiTranscribeApi(import.meta.env.VITE_AAI_API_KEY, state.audioData[state.audioData.length - 1]);
            console.log('Transcript:', transcript);
            dispatch({type: 'SET_TRANSCRIPT', payload: transcript});
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: error
            })
            console.error('Error running transcription:', error);
        }
        dispatch({type: 'SET_IS_NOT_PROCESSING'});
    }

    function handleRecordButtonClick() {
        if (!state.isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    };

    useEffect(() => {
        console.log(`useEffect: state.audioData.length = ${state.audioData.length}`);
        if (state.audioData && state.audioData.length > 0) {
            handleRecordingData();
        }
    }, [state.audioData]);

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