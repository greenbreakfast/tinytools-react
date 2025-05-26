// const baseUrl = "https://api.assemblyai.com/v2"
const baseUrl = "/api/assembly";

async function uploadAudio (apiKey, audioData) {
    try {
        const uploadAudio = await fetch(`${baseUrl}/upload`, {
            method: 'POST',
            // headers: {
            //     'authorization': apiKey
            // },
            body: audioData
        });
        const { upload_url } = await uploadAudio.json();
        return upload_url;
    } catch (error) {
        // TODO: handle error
    }
}

async function startTranscription (apiKey, audioUrl) {
    try {
        const startTranscription = await fetch(`${baseUrl}/transcript`, {
            method: 'POST',
            // headers: {
            //     'authorization': apiKey
            // },
            body: JSON.stringify({
                audio_url: audioUrl
            })
        });
        const { id } = await startTranscription.json();
        return id;
    } catch (error) {
        // TODO: handle error
    }
}

async function getTranscriptionResult (apiKey, transcriptionId) {
    try {
        const getTranscript = await fetch(`${baseUrl}/transcript/${transcriptionId}`, {
            method: 'GET',
            // headers: {
            //     'authorization': apiKey
            // }
        });
        const { status, text } = await getTranscript.json();
        return { status, text };
    } catch (error) {
        // TODO: handle error
    }
}

async function pollForTranscriptionResult(apiKey, transcriptionId) {
    const maxAttempts = 60;
    const baseDelay = 1000;
    const maxDelay = 5000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const { status, text } = await getTranscriptionResult(apiKey, transcriptionId);

        if (status === 'completed') {
            return text;
        } else if (status === 'error') {
            throw new Error('Transcription failed');
        }
        await new Promise(resolve => {
            const delay = Math.min(baseDelay * Math.pow(1.5, attempt), maxDelay);
            setTimeout(resolve, delay);
        });
    }
    throw new Error('Transcription timed out');
}

async function aaiTranscribeApi(apiKey, audioData) {
    try {
        const uploadUrl = await uploadAudio(apiKey, audioData);
        const transcriptionId = await startTranscription (apiKey, uploadUrl);

        const transcriptionResult = await pollForTranscriptionResult(apiKey, transcriptionId);
        return transcriptionResult;

    } catch (error) {
        // TODO: handle error
    }
}

export default aaiTranscribeApi;
