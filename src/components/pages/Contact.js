import React, { useState } from 'react';

export default function Contact() {

    const [name, putName] = useState('');
    const [email, putEmail] = useState('');
    const [message, putMessage] = useState('');




    return (
        <div>
            <h1>Contact Me!</h1>
            <p>

            </p>
        </div>
    );
}
