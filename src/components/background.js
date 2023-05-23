import React from "react";
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';


function Background() {
    return (
        <div>
            <div className="parallax">
                <h1>Welcome to Parallax Scroll Demo Site</h1>
            </div>

            <div className="parallax2 text-center">
                <div className="parallax02">
                    <h3>Butterfly</h3>
                    <div className="para1 bg-dark">
                        <div className="card p-5 ">
                            <div className="card-body">
                                <p>Welcome to My Demo site</p>
                                <form method="post" action="#" className="form-group text-center">
                                    <label>Email</label>
                                    <input className="form-control" typeof="email" name="email" placeholder="ogunbiye@gmail.com" />
                                    <label>Username</label>
                                    <input className="form-control" typeof="text" name="username"placeholder="Akins20" />
                                    <button className="btn btn-primary mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallax3">
                <h3>Mountains</h3>
                <div className="para2 bg-dark">
                    <p>The customer is very important, the customer will be followed by the customer.
                        Tomorrow it will be financed by a mortgage, or an asset pool.
                        The boat flatters except in the hate of the venetian gate.
                        You are not a member of the real life. Jasmine or yeast itself.
                        Until eleifend dignissim diam, and a sad lake needs chocolate.
                        I don't even care about kids now. We live with a pillow that flatters us.
                        Until the end of the week, it was the tincidunt, but the most important thing was the chocolate.
                        For this reason, he said, he wore a bow and a hairstyle.</p>
                </div>
            </div>
            <div className="parallax">
            <div className="para">
                <h2>Thanks for Viewing</h2>
            </div>
            </div>

        </div>
    )
}

export default Background;