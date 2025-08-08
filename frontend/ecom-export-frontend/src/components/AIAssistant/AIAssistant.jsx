import React from 'react';
import styles from './AIAssistant.module.css';

function AIAssistant() {
    const handleClick = () => {
        alert('AI Assistant Activated!');
    };

    return (
        <div className={styles.aiAssistantBtn} onClick={handleClick} title="AI Assistant">
            🤖
        </div>
    );
}

export default AIAssistant;  // ← THIS line is important!
