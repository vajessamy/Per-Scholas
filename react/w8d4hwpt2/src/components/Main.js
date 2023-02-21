import blogimage1 from './img/blogimage1.jpg';

function Main() {
    return ( 
    <div className="mainDiv">
        <h3 className="date">02/04/2023</h3>
        <h2>On the Street in Brooklyn</h2>
        <img src={blogimage1} alt="Brooklyn" />
     </div>
    );
}

export default Main;