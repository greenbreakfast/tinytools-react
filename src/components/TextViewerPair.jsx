import { useRef, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';

function TextViewerPair ({text1, text2, marks1, marks2}) {
    const editorRef1 = useRef(null);
    const editorRef2 = useRef(null);

    const isScrolling = useRef(false);

    // handle marking differences
    useEffect(() => {
        // Skip if no diff results or refs aren't ready
        if (!marks1 || !marks2 || !editorRef1.current || !editorRef1.current.editor || !editorRef2.current || !editorRef2.current.editor ) {
            return;
        }
        // update the text in the editors
        editorRef1.current.editor.setValue(text1);
        editorRef2.current.editor.setValue(text2);
        // refresh editors to resolve layout issues
        setTimeout(() => {
            editorRef1.current.editor.refresh();
            editorRef2.current.editor.refresh();
        }, 10);
        
        // mark up the differences
        const markText = (ref, mark, textClasssName, bgClassName) => {
            if (!ref || !ref.current || !ref.current.editor) {
                console.warn('Editor reference is not available');
                return;
            }
            if (!mark || !mark.start || !mark.end) {
                console.warn('Invalid mark data');
                return;
            }

            // mark the text
            const markRet = ref.current.editor.markText(
                mark.start,
                mark.end,
                {className: textClasssName}
            );
            // update line to have background
            for (let i = mark.start.line; i <= mark.end.line; i++) {
                ref.current.editor.addLineClass(i, 'background', bgClassName);
            }
        }

        for (let i = 0; i < marks1.length; i++) {
            markText(editorRef1, marks1[i], 'diff-delete', 'line-delete-background');
        }
        for (let i = 0; i < marks2.length; i++) {
            markText(editorRef2, marks2[i], 'diff-insert', 'line-insert-background');
        }
    }, [marks1, marks2]);

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
                    <CodeMirror 
                        value="" 
                        height="400px" 
                        options={{
                            theme: 'material',
                            lineNumbers: true,
                            lineWrapping: true,
                            readOnly: true
                        }}
                        ref={editorRef1}
                        onScroll={handleScroll1}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <CodeMirror 
                        value=""
                        height="400px" 
                        options={{
                            theme: 'material',
                            lineNumbers: true,
                            lineWrapping: true,
                            readOnly: true
                        }}
                        ref={editorRef2}
                        onScroll={handleScroll2}
                    />
                </div>
            </div>
        </>
    );
}

export default TextViewerPair;