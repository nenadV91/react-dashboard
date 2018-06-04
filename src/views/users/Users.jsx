import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { users_data as data } from 'utils';

import UsersTable from './UsersTable';
import UsersStats from './UsersStats';
import Filters from './Filters';
import Search from './Search';


class Users extends Component {
  state = {
    users: [],
    searchText: "",
    age: [18, 60],
    show: "all"
  }

  componentWillMount() {
    this.setState({users: data});
  }

  get active() {
    return this.state.users.filter(user => user.isActive).length;
  }

  get total() {
    return this.state.users.length;
  }

  get active_percent() {
    return Number((this.active / this.total * 100).toFixed(2))
  }

  get new_users() {
    return this.state.users.filter(({registered}) => {
      return new Date(registered) > new Date("2018");
    });
  }

  get increase() {
    return Number((this.new_users.length / this.total * 100).toFixed(2))
  }

  handleSearch = e => {
    this.setState({searchText: e.target.value});
  }

  handleFilter = (value, type) => {
    this.setState({[type]: value})
  }

  filter = () => {
    let {age, searchText, show} = this.state;
    let [min, max] = age;

    return this.state.users.filter(user => {
      if(!user.name.toLowerCase().includes(searchText.toLowerCase())) return false;
      if(user.age < min || user.age > max) return false;
      if(show === "active" && !user.isActive) return false;
      if(show === 'inactive' && user.isActive) return false;
      return true;
    });
  }

  render() {
    return (
      <div className="users">
        <Row gutter={16}>
          <Col md={{span: 6}}>
            <Search 
            onSearch={this.handleSearch}
            searchText={this.state.searchText} />

            <Filters 
            show={this.state.show}
            age={this.state.age}
            onFilterChange={this.handleFilter} />

            <UsersStats
            active_percent={this.active_percent}
            increase={this.increase}
            active={this.active}
            total={this.total} />
          </Col>

          <Col md={{span: 18}}>
            <UsersTable data={this.filter()} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Users
