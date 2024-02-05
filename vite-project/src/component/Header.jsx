

const Header = (props) => {
    return (
        <div>
            <li>
                <ul>Home</ul>
                <ul>Hero section</ul>
                <ul>Contact Us</ul>
            </li>
            <h1>{2+5}</h1>
            <button onClick={()=>alert("Ki obosta?")}>Submit</button>
            <h2 style={{
                color:'red'
            }}>I am Fine</h2>
            <button onClick={props.childbuttonclick}>Submittkori?</button>
            
        </div>
    );
};

export default Header;