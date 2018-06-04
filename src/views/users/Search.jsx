import React from 'react';
import { Widget } from 'components';
import { Input } from 'antd';

const Search = props => {
  return <Widget className="search-widget">
    <Widget.Body>
      <Input.Search
      placeholder="Find user"
      value={props.searchText}
      onChange={props.onSearch}/>
    </Widget.Body>
  </Widget>
}

export default Search;
