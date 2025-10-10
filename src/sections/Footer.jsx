import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <p>© {new Date().getFullYear()} Dat — All rights reserved.</p>
                </div>

                <div className="socials">
                    {socialImgs.map((s) => (
                        <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                            <div className="icon">
                                <img src={s.imgPath} alt={s.name} />
                            </div>
                        </a>
                    ))}
                </div>

                <div>
                    <p>Made with ❤️ · Built with React & Three.js</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
