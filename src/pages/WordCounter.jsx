/**
 * @copyright Copyright (c) 2025 Lazar Demin
 * @license MIT
 */

import { useState } from 'react';

import TextInputBox from '../components/TextInputBox';
import CounterBox from '../components/CounterBox';

function WordCounter() {
    const [text, setText] = useState('');

    const wordCount = text ? text.trim().split(/\s+/).filter(word => word.length > 0).length : 0;
    const charCount = text ? text.replace(/[\n\r]/g, '').length : 0;


    const handleTextChange = (newText) => {
        setText(newText);
    }


    return (
        <main className="container mx-auto p-4 justify-center">
            <div className="mb-6">
                <h1 className="text-xl font-bold mb-4 text-center">Word Counter</h1>
                <p className="text-center mb-4">
                    ℹ️ Count the number of words and characters in your text
                    <br />
                    🔒 All done in the browser, your text stays local and secure
                </p>
            </div>
            
            <TextInputBox text={text} onTextChange={handleTextChange} />
            <CounterBox wordCount={wordCount} charCount={charCount} />
        </main>
    );
}

export default WordCounter;