function TextInputBox({text, onTextChange}) {
    const handleChange = (e) => {
        onTextChange(e.target.value);
    }
    

    return (
        <div className="mb-6">
        <textarea
            id="textInput"
            className="w-full p-3 border border-gray-600 rounded min-h-[400px] text-white"

            value={text}
            onChange={handleChange}
            placeholder="Start typing or paste your text here..."
        />
        </div>
    );
}

export default TextInputBox;