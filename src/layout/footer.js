import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={footerStyle}>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </footer>
    )
}

const footerStyle = {
    color: '#6497b1',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: 'rgb(250, 250, 250)',
    fontWeight: 'bold',
    fontFamily: 'Arial, Helvetica, sans-serif'
}

const linkStyle = {
    color: '#6497b1',
    textDecoration: 'none'
}

export default Footer;