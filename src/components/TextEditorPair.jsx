import CodeMirror from '@uiw/react-codemirror';
import { useRef } from 'react';

function TextEditorPair ({setText1, setText2}) {
    const editorRef1 = useRef(null);
    const editorRef2 = useRef(null);

    const isScrolling = useRef(false);

    const handleTextChange1 = (e) => {
        setText1(e.getValue());
    }
    const handleTextChange2 = (e) => {
        setText2(e.getValue());
    }

    // sync editor scrolling
    const syncScroll = (scrollingEditor, targetEditor) => {
        if (isScrolling.current) return;
        
        isScrolling.current = true;
        
        const scrollInfo = scrollingEditor.getScrollInfo();
        targetEditor.scrollTo(scrollInfo.left, scrollInfo.top);
        
        // Reset flag after a short delay
        setTimeout(() => {
            isScrolling.current = false;
        }, 20);
    };

    const handleScroll1 = () => {
        if (editorRef1.current?.editor && editorRef2.current?.editor) {
            syncScroll(editorRef1.current.editor, editorRef2.current.editor)
        }
    };

    const handleScroll2 = () => {
        if (editorRef1.current?.editor && editorRef2.current?.editor) {
            syncScroll(editorRef2.current.editor, editorRef1.current.editor)
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <p className="text-md font-medium mb-2 text-left">Original text</p>
                    <CodeMirror 
                        key="editor-1" 
                        value=""
                        height="400px" 
                        onChange={handleTextChange1} 
                        onScroll={handleScroll1}
                        ref={editorRef1}
                        options={{
                            theme: 'material',
                            lineNumbers: true,
                            lineWrapping: true,
                            extraKeys: {
                                Tab: false  // tab moves focus to next element
                            }
                        }}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-md font-medium mb-2 text-left">Changed text</p>
                    <CodeMirror 
                        key="editor-2" 
                        value=""
                        height="400px" 
                        onChange={handleTextChange2} 
                        onScroll={handleScroll2}
                        ref={editorRef2}
                        options={{
                            theme: 'material',
                            lineNumbers: true,
                            lineWrapping: true,
                            extraKeys: {
                                Tab: false  // tab moves focus to next element
                            }
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default TextEditorPair