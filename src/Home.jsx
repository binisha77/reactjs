import './Home.css'
function Home(){

 return (
 <>
 <div className="navbar">
        <div className="logo">
            <h2>MyWebsite</h2>
        </div>
        <div className="menu">
            <a href="#">Home</a>
            <Link to="/about">About</Link>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
    </div>

    <div className="main-content">
        <h1>Welcome to My Website!</h1>
        <p>This is a simple design featuring a navbar and some content in between.</p>

        <div className="content-box">
            <div className="box">
                <h3>Box 1</h3>
                <p>Some content goes here.</p>
            </div>
            <div className="box">
                <h3>Box 2</h3>
                <p>Some more content here.</p>
            </div>
            <div className="box">
                <h3>Box 3</h3>
                <p>Additional content here.</p>
            </div>
        </div>
    </div>
 </>
 )
}
export default Home