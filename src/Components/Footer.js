import React from "react";


function Footer() {
    return (
        <div>
           
                <footer className="text-white text-center bg-secondary mb-3">
                    <div className="col-lg-12">
                        <div>
                            <span className="float-end me-5"><a href="#top">Back to top</a></span>
                            <span className="ms-5" ><a href="https://blog.bootswatch.com/">Blog</a></span>
                            <span className="ms-3"><a href="https://blog.bootswatch.com/rss/">RSS</a></span>
                            <span className="ms-3"><a href="https://twitter.com/bootswatch">Twitter</a></span>
                            <span className="ms-3"><a href="https://github.com/thomaspark/bootswatch">GitHub</a></span>
                            <span className="ms-3"><a href="../help/#api">API</a></span>
                            <span><a href="../help/#donate">Donate</a></span>
                        </div>
                        <p>Made by <a href="https://thomaspark.co/">Neha</a>.</p>
                        <p>Code released under the <a href="https://github.com/thomaspark/bootswatch/blob/master/LICENSE">MIT License</a>.</p>
                        <p>Based on <a href="https://getbootstrap.com/" rel="nofollow">Bootstrap</a>. Icons from <a href="https://icons.getbootstrap.com/" rel="nofollow">Bootstrap Icons</a>. Web fonts from <a href="https://fonts.google.com/" rel="nofollow">Google</a>.</p>

                    </div>
                </footer>
            
        </div>
    )

}

export default Footer