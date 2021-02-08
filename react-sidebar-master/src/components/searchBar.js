import React from 'react'
import SearchBar from "material-ui-search-bar";

export default function searchBar() {
    return (
        <div>
        <h1>Search for a Review :</h1>
        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          maxWidth: 800,
          marginTop:"50px"
        }}
      />
        </div>
    )
}
