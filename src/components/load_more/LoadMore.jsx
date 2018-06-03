import React from 'react';
import { Icon, Spin } from 'antd';

const LoadMore = props => {
  if(!props.hasMore) return null;

  else if(props.loading) return <div className="loader">
    <Spin indicator={<Icon type="loading"/>} />
    <span>Loading...</span>
  </div>

  else return <div
  className="load-more" 
  onClick={props.loadMore}>
    <Icon type="down" />
    <span>Load more</span>
  </div>
}


export default LoadMore;