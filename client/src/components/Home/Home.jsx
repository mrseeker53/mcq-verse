import React, { useState } from 'react';
import SearchByKeyword from '../Search/SearchByKeyword';
import Questions from '../Questions/Questions';

const Home = () => {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div>
            <SearchByKeyword setIsSearching={setIsSearching} />
            {!isSearching && <Questions />}
        </div>
    );
};

export default Home;