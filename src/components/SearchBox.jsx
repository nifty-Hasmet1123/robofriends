const SearchBox = ({ searchChange }) => {
    const input = (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots" 
                id="robot-search" 
                name="searchbox"
                onChange={ searchChange }
            />
        </div>
    );
    
    return input;
}

export default SearchBox;