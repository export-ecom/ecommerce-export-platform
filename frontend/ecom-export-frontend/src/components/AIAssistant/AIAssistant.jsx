import React from 'react';

function AIAssistant() {
    const handleClick = () => {
        alert('AI Assistant Activated!');
    };

    return (
        <button
            type="button"
            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center ai-assistant-btn"
            style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
            onClick={handleClick}
            title="AI Assistant"
        >
            🤖
        </button>
    );
}

export default AIAssistant; // keep export same
