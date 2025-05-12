import DiffMatchPatch from 'diff-match-patch';

function getDiff(original, modified) {
    const dmp = new DiffMatchPatch();
    const diff = dmp.diff_main(original, modified);
    dmp.diff_cleanupSemantic(diff);

    let pos1 = {line: 0, ch: 0};
    let pos2 = {line: 0, ch: 0};

    let modifiedPos1 = [];
    let modifiedPos2 = [];

    diff.forEach(([op, text]) => {
        const lines = text.split('\n');
        const lastLine = lines.length - 1;
        let startPos;

        switch(op) {
            case 0: // Equal text
                // console.log(`Equal: ${text}`);
                for (let i = 0; i < lines.length; i++) {
                    if (i < lastLine) {
                        pos1.line++;
                        pos2.line++;
                        pos1.ch = 0;
                        pos2.ch = 0;
                    } else {
                        pos1.ch += lines[i].length;
                        pos2.ch += lines[i].length;
                    }
                }
                break;
            case -1: // Deleted text
                // console.log(`Deleted: ${text}`);
                startPos = {line: pos1.line, ch: pos1.ch};
                for (let i = 0; i < lines.length; i++) {
                    if (i < lastLine) {
                        pos1.line++;
                        pos1.ch = 0;
                    } else {
                        pos1.ch += lines[i].length;
                    }
                }
                modifiedPos1.push({start: startPos, end: {line: pos1.line, ch: pos1.ch}});
                break;
            case 1: // Inserted text
                // console.log(`Inserted: ${text}`);
                startPos = {line: pos2.line, ch: pos2.ch};
                for (let i = 0; i < lines.length; i++) {
                    if (i < lastLine) {
                        pos2.line++;
                        pos2.ch = 0;
                    } else {
                        pos2.ch += lines[i].length;
                    }
                }
                modifiedPos2.push({start: startPos, end: {line: pos2.line, ch: pos2.ch}});
                break;
        }
    });
    // console.log('Modified positions1:', modifiedPos1);
    // console.log('Modified positions2:', modifiedPos2); 

    return { modifiedPos1, modifiedPos2 };
}

export default getDiff