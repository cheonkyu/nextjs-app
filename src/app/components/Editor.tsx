'use client';
import React, { useCallback } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
const extensions = [sql()];

export default function Editor() {
    const onChange = useCallback((value: string) => {
      console.log('value:', value);
    }, []);
    return (
        <CodeMirror
            value="SELECT * FROM DUEL;"
            theme={vscodeDark}
            extensions={extensions}
            onChange={onChange}
            basicSetup={true}
            height="500px"
            maxHeight="500px"
        />
    );   
}