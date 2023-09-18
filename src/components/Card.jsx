import "./css/Card.css";

const Card = ({ id, name, email }) => {
    const imgStyle = {
        height: "200px",
        width: "200px"
    }

    // using destructuring/unpacking
    // const { id, name, email } = props;
    // bg-light-green
    return (
        <div className="container dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img 
                className="robot" 
                src={`https://robohash.org/${id + "robot gang"}`} 
                alt="robot" 
                style={imgStyle}
            />

            <div>
                <h2 id="name">{name}</h2>
                <p id="email">{email}</p>
            </div>
        </div>
    );
}

export default Card;
