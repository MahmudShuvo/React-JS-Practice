

const Ternary = () => {
    let status=true;
    return (
        <div>
            {
                status?
                <button>ternary ok</button>
                :
                <button>ternary gese</button>
            }
            
        </div>
    );
};

export default Ternary;