import React, { Component } from 'react';
import { Widget } from 'components';
import { Slider, Radio  } from 'antd';

const Filter = props => {
  return (
    <div className="filters-item">
      <div className="filters-item-title">{props.title}</div>

      <div className="filters-item-element">
        {props.element}
      </div>
    </div>
  )
}

class Filters extends Component {
  render() {
    let {age, show} = this.props;

    return (
      <Widget className="filters-widget">
        <Widget.Body>
          <div className="title">Filters</div>

          <div className="filters-content">
            <Filter
            title="Age"
            element={
              <Slider  min={1} max={100} range 
              onChange={value => this.props.onFilterChange(value, "age")}
              className="filter-slider"
              defaultValue={age} />
            } />

            <Filter
            title="Show"
            element={
              <Radio.Group 
              value={show}
              onChange={(e) => this.props.onFilterChange(e.target.value, "show")}>
                <Radio value="all">All</Radio>
                <Radio value="active">Active</Radio>
                <Radio value="inactive">Inactive</Radio>
              </Radio.Group>
            } />


          </div>
        </Widget.Body>
      </Widget>
    );
  }
}

export default Filters
