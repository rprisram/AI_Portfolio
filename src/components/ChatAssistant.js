"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './ChatAssistant.module.css';

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Hi! I\'m Priya\'s AI Assistant. Ask me anything about her projects, tech stack, or 15+ years of experience!' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages.map(m => ({
                        role: m.role,
                        parts: [{ text: m.text }]
                    }))
                })
            });

            const data = await response.json();
            if (data.text) {
                setMessages(prev => [...prev, { role: 'model', text: data.text }]);
            } else {
                setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error. Please try again later.' }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', text: 'Network error. Please check your connection.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            {isOpen && (
                <div className={`${styles.chatWindow} glass`}>
                    <div className={styles.header}>
                        <div className={styles.titleInfo}>
                            <span className={styles.statusDot}></span>
                            <h3>Priya's AI Assistant</h3>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    <div className={styles.messagesList}>
                        {messages.map((m, i) => (
                            <div key={i} className={`${styles.message} ${styles[m.role]}`}>
                                <div className={styles.bubble}>{m.text}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className={`${styles.message} ${styles.model}`}>
                                <div className={`${styles.bubble} ${styles.loading}`}>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className={styles.inputArea} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ask about her skills/projects..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" disabled={isLoading}>→</button>
                    </form>
                </div>
            )}

            <button
                className={`${styles.launcher} ${isOpen ? styles.hidden : ''}`}
                onClick={() => setIsOpen(true)}
                title="Ask Priya's AI Assistant"
            >
                <span className={styles.icon}>AI</span>
                <span className={styles.pulse}></span>
            </button>
        </div>
    );
}
