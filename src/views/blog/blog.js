import './blog.css';
import * as ReactBootStrap from "react-bootstrap";

function BlogPage() {
    return (
        <div className="section green-bg" >
            <div class="popup-section white-bg">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green pat-cert-heading">BLOG</span>
                            <span className="sub-title-text green pat-cert-heading">LOREM IPSUM DOLOR SIT AMET.</span>
                            <br />
                            <img src="/agriculture-farm.jpeg" className="blog-full-width-img" />
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo consequat.</span>
                            <span className="sub-heading-blog green align-left">LOREM IPSUM DOLOR SIT AMET.</span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo consequat.</span>
                        </div>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={6} lg={6}>
                                <img src="/sustainable.png" className="blog-column-img" />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={6} lg={6}>
                                <span className="sub-heading-blog green align-left">LOREM IPSUM DOLOR SIT AMET.</span>
                                <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                    enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                    nisl ut aliquip ex ea commodo consequat.</span>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                            nisl ut aliquip ex ea commodo consequat.</span>
                        <div className="blog-bottom-info">
                            <div className="blog-social-links-container">
                                <span className="default-text grey align-left">Share</span>
                                <img src="/icons/icons8-facebook-f-60.png" className="blog-social-img" />
                                <img src="/icons/icons8-instagram-logo-48.png" className="blog-social-img" />
                                <img src="/icons/icons8-linkedin-2-60.png" className="blog-social-img" />
                            </div>
                            <div className="blog-date-container">
                                <span className="default-text grey align-left">Publish Date - 10 July 2021</span>
                            </div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
        </div>
    );
}

export default BlogPage;