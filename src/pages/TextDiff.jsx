/**
 * @copyright Copyright (c) 2025 Lazar Demin
 * @license MIT
 */

import { useState, useRef } from 'react';

import TextEditorPair from '../components/TextEditorPair';
import getDiff from '../utils/diffUtils';
import TextViewerPair from '../components/TextViewerPair';

function TextDiff () {
    const resultsRef = useRef(null);

    const [isCompared, setIsCompared] = useState(false);

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [marks1, setMarks1] = useState('');
    const [marks2, setMarks2] = useState('');

    const handleChangeText1 = (text) => {
        setText1(text);
    }
    const handleChangeText2 = (text) => {
        setText2(text);
        
    }
    const handleCompare = () => {
        // perform the comparison
        let {modifiedPos1, modifiedPos2} = getDiff(text1, text2);
        setMarks1(modifiedPos1);
        setMarks2(modifiedPos2);
        // show the output editors
        setIsCompared(true);
        // scroll to the results
        setTimeout(() => {
            if (resultsRef.current) {
                resultsRef.current.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }

    return (
        <main className="container mx-auto p-4 justify-center">
            <div className="mb-6">
                <h1 className="text-xl font-bold mb-4 text-center">Text Diff</h1>
                <p className="text-center mb-4">
                    ℹ️ Finds all the differences between two text files
                    <br />
                    🔒 All done in the browser, your text stays local and secure
                </p>
            </div>

            <TextEditorPair setText1={handleChangeText1} setText2={handleChangeText2} />
            <div className="flex justify-center my-6" ref={resultsRef}>
                <button 
                    className="w-3/4 md:w-1/4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                    onClick={handleCompare}
                >
                    Compare
                </button>
            </div>
            <div className={`${isCompared ? 'block' : 'hidden'}`}>
                <TextViewerPair text1={text1} text2={text2} marks1={marks1} marks2={marks2} />
                <div className="h-64"></div>
            </div>
        </main>
    );
}

export default TextDiff;