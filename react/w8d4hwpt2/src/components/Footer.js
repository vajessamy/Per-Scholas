import copyright from './img/copyright.webp';
function Footer() {
    return (  
    <footer>
        <div className="footerMenu">
            <ul aria-label="Main Navigation" role="navigation">
                <li><a className= "aBottom" href="#">Home</a></li>
                <li><a className= "aBottom" href="#">Women's</a></li>
                <li><a className= "aBottom" href="#">Men's</a></li>
                <li><a className= "aBottom" href="#">On the Street</a></li>
                <li><a className= "aBottom" href="#">The Catwalk</a></li>
                <li><a className= "aBottom" href="#">AdWatch</a></li>
                <li><a className= "aBottom" href="#">AboutTips</a></li>
            </ul>
         </div>
        <img src={copyright} alt="people" class="copywrite"/> 2023Valet Industries, Inc.
    </footer>
    );
}

export default Footer;