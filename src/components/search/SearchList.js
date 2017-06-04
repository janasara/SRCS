import React, { PropTypes } from 'react';


const SearchList = ({searches}) => {
    return ( 
      
                <div>
                {searches.map(search =>              

                    <div className="belement" key={search._id}>
                        <p className="belementn" >{search.name}</p>
                        
                    </div>
              
                )}
                </div>
                
    );
};

SearchList.propTypes = {
    searches: PropTypes.array.isRequired
};

export default SearchList;