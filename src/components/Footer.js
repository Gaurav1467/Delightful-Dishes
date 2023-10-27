import React from 'react'

function Footer() {
  return (
    <>
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                            <h4>Create By:</h4>
                            <ul>
                            <li><a href="/">Gaurav Sharma</a></li>
                            </ul>
                        </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/">about us</a></li>
                            <li><a href="/">our services</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://github.com/Gaurav1467" target='_blank' rel="noreferrer" ><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/gaurav-sharma5764/" target='_blank' rel="noreferrer" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer