import React, { Component } from 'react';
import { Table, Progress } from 'antd';
import { 
  Sparklines, 
  SparklinesLine, 
} from 'react-sparklines';
import { colors } from 'utils';


class UsersTable extends Component {
  render() {
    const columns = [{
      title: 'User',
      dataIndex: 'name',
      key: 'info',
      render: (name, data) => {
        return <div className="info-field">
          <div className="info-field-name">{name}</div>
          <div className="info-field-email">{data.email}</div>
        </div>
      }
    }, {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: value => <div className="phone-field">{value}</div>
    }, {
      title: 'Is active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: value => {
        return value ? 
          <div className="icon-active"></div> :
          <div className="icon-not-active"></div>
      }
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    }, {
      title: 'Activity',
      dataIndex: 'activity',
      key: 'activity',
      render: (value, data) => {
        const sparkProps = {
          data: value,
          margin: 0,
          height: 20
        }

        const chartStyle = { 
          fill: colors.chartMain
        }

        const style = {
          maxWidth: 200,
          minWidth: 100
        }

        return <div style={style}>
          <Sparklines {...sparkProps}>
            <SparklinesLine style={chartStyle} />
          </Sparklines>
        </div> 
      }
    }, {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: value => <div className="balance-field">{value}</div>,
      sorter: (a, b) => a.balance.localeCompare(b.balance)
    }, {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: value => <div className="progress-field">
         <Progress percent={value} />
      </div>
    }];


    const pagination = {
      showSizeChanger: true,
      pageSize: 10
    }

    return (
      <Table 
      pagination={pagination}
      dataSource={this.props.data} 
      columns={columns}
      rowKey="_id"/>
    );
  }
}

export default UsersTable
