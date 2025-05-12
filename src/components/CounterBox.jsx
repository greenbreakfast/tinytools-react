function CounterBox({wordCount, charCount}) {
    return (
        // <>
        //     <div className="grid grid-cols-2 gap-4">
        //         <div>
        //             <p className="text-2xl font-bold">{wordCount} words, {charCount} characters</p>
        //         </div>
        //     </div>
        // </>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
            <div className="grid grid-cols-1 gap-4">
                <div className="text-left">
                    <p className="text-2xl font-bold">{wordCount} words, {charCount} characters</p>
                </div>
            </div>
        </div>
    )
}

export default CounterBox;