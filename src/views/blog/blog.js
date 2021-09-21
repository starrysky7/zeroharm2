import './blog.css';
import * as ReactBootStrap from "react-bootstrap";

function BlogPage() {
    return (
        <div className="section green-bg" >
            <div class="popup-section white-bg">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <span className="title-text green align-center">BLOG</span><br />
                        <span className="sub-title-text green heading-20 align-center">LOREM IPSUM DOLOR SIT AMET.</span>
                        <br />
                        <img src="/agriculture-farm.jpeg" className="blog-full-width-img" />
                        <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                            nisl ut aliquip ex ea commodo consequat.</span>
                        <div className="blog-date-container">
                            <span className="default-text grey align-left">Publish Date - 10 July 2021</span>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
        </div>
    );
}

export default BlogPage;