import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import MarkdownEditor from './MarkdownEditor.js';
import MarkdownPreviewer from './MarkdownPreviewer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h1 className="page-title">Markdown previewer</h1>
        <MarkdownEditor/>
        <MarkdownPreviewer/>
    </div>
)