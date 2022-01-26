import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {
    return (
    <div>
        <h1>Heroes de DC</h1>
        <hr />
        <HeroList publisher = "DC Comics" />

    </div> 
    
    
    );
}
 
export default DcScreen;