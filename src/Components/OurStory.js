import React from "react";
class OurStory extends React.Component {
    render (){

    
    return (
        <div className="our-story" id="story">
            <div className=" container story-container ">
                <div className="story-wrapper">
                    <div className="story-txt">
                        <p className="blue-text">OUR STORY</p>
                        <h3>At the heart of everything</h3>
                        <p className="p">At Triple Shot Café, we believe that every cup of coffee is an opportunity to create something special. That's why we're dedicated to sourcing the highest quality beans from around the world, and to crafting each cup with care and attention to detail.</p>
                        <p className="no-margin p">Our commitment to quality extends beyond just our coffee. We also take pride in creating a warm and welcoming atmosphere in our cafes, where our customers can relax, catch up with friends, or get some work done. Whether you're a coffee aficionado or just looking for a cozy spot to grab a drink, we have something for everyone.</p>
                    </div>
                    <img src="https://assets.website-files.com/6435285ed29de434162c3676/6436855e31ade754a36cf750_story-img.png" loading="lazy" sizes="(max-width: 479px) 80vw, (max-width: 767px) 64vw, 40vw" srcSet="https://assets.website-files.com/6435285ed29de434162c3676/6436855e31ade754a36cf750_story-img-p-500.png 500w, https://assets.website-files.com/6435285ed29de434162c3676/6436855e31ade754a36cf750_story-img.png 508w" alt="" className="story-image"></img>
                    <img src="https://assets.website-files.com/6435285ed29de434162c3676/643685972590db2bb91a32f0_corner-left.png" loading="lazy" alt="" className="top-left-corner"></img>
                    <img src="https://assets.website-files.com/6435285ed29de434162c3676/643685972590dbd1701a32ef_corner-right.png" loading="lazy" alt="" className="bottom-right-corner"></img>
                </div>
            </div>
        </div>
    )
}
}
export default OurStory