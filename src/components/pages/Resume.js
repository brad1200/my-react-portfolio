import React from 'react';

const styles = {
    card: {
        margin: 20,
        // background: 'red',
        // textAlign: 'center'
    },
    h1: {
        textAlign: 'center'
    },
    ul: {
        textAlign: 'center',
        margin: 20
    }
}

function Blog() {
    return (
        <div style={styles.card}>
            <h1 style={styles.h1}>My Resume!</h1>


            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </div>
    );
}

export default Blog;