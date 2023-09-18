import Card from "./Card";

// import robots from "./robots"; 
// you can also do this on prop without importing it here like
// const CardList = ( {robot} ) => ...rest of the code.
// when using this syntax it should match the prop name from the ReactDOM.createRoot.render
// Note: It's better to use the props way than importing it here
// because there will be an issue regarding the unique `key`

const CardList = ({ robotProp }) => {
    const cardArray = robotProp.map(robot => {
        return ( 
            <Card 
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                email={robot.email} 
            />
        );
    })

    return (
        <div>
            {cardArray}
        </div>
    );
}

// CardList.defaultProps = {
//     robotProp: ["key", "id", "name", "email"]
// };

export default CardList;