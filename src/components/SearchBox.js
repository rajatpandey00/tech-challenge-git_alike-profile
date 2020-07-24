import React, { useState } from 'react';
import axios from 'axios';
import User from './UserCard';

const SearchBox = () => {
    const [query, setQuery] = useState(""); // We can also use class based rather than hook based call. I will demonstrate that as well
    const [result, setData] = useState([]);

    const handleInputChange = ({ target: { value } }) => setQuery(value);

    function getData(event) {
        event.preventDefault();
        event.stopPropagation();
        axios.get(`http://localhost:3000/getUserProfiles/${query}`)         // We can also use async/await as well so .then can be replaced with `const response = await(`url`)`
            .then(res => setData(res.data))
            .catch(error => {
                //In case of any error
                console.log('Logging Error', error);
            });

    }

    return (
        <div>
            <div style={{textAlign: "center"}}>
                <form onSubmit={getData}>
                    <input
                        placeholder="Search by User name..."
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {!!result && result.map((user, index) => <User {...user} key={index} />)}
            </div>
        </div>
    );
}

export default SearchBox;