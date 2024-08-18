import { useState, useEffect } from 'react';

const HelloComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default HelloComponent;
