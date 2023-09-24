import React from "react";

export default class MarkdownEditor extends React.Component{
    render(){
        return(
            <div id="markdown-editor">
                <textarea id="editor"></textarea>
            </div>
        );
    }
}