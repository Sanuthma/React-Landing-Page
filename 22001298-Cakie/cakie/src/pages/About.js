import AboutPic from "../assets/9.jpg";
import '../styles/About.css';
function About(){
    return(
        <div className="about">
            <div 
                className="aboutTop"
                style={{backgroundImage: `url(${AboutPic})`}}>
            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Welcome to Cakie! Located in the heart of Galle, Sri Lanka, Cakie has been delighting customers since 2020 with our wide variety of cakes. From stunning wedding cakes and fun birthday cakes to adorable cupcakes, we specialize in custom designs and sizes to make your celebrations truly unique.
                    At Cakie, we believe in using only the finest ingredients to create delicious and memorable cakes for every occasion. Visit us and add a touch of sweetness to your special moments!</p>
            </div>
        </div>
    
    );
}
export default About