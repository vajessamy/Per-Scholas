import copyright from './img/copyright.webp';
function Footer() {
    return (  
    <footer>
        <div class="footerMenu">
            <ul aria-label="Main Navigation" role="navigation">
                <li><a class= "aBottom" href="#">Home</a></li>
                <li><a class= "aBottom" href="#">Women's</a></li>
                <li><a class= "aBottom" href="#">Men's</a></li>
                <li><a class= "aBottom" href="#">On the Street</a></li>
                <li><a class= "aBottom" href="#">The Catwalk</a></li>
                <li><a class= "aBottom" href="#">AdWatch</a></li>
                <li><a class= "aBottom" href="#">AboutTips</a></li>
            </ul>
         </div>
        <img src={copyright} alt="people" class="copywrite"/> 2023Valet Industries, Inc.
    </footer>
    );
}

export default Footer;