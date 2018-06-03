import React, { Component } from 'react';
import {Table, Icon} from 'antd';
import { colors } from 'utils';

class SourcesTable extends Component {
  columns() {
    return [{
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    }, {
      title: 'Traffic',
      dataIndex: 'traffic',
      key: 'traffic',
    }, {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
      render: value => {
        let change = value.slice(0, 1);
        let icon = null, color = null;

        if(change === "+") {
          color = colors.chartMain;
          icon = <Icon type="caret-up" />
        } else {
          color = colors.chartDark;
          icon = <Icon type="caret-down" />
        }

        return <div>
          <span style={{marginRight: 5, color, fontSize: 10}}>{icon}</span>
          <span>{value}</span>
        </div>
      }
    }];
  }

  render() {
    let {data} = this.props;
    
    return (
      <Table 
        bordered={false}
        size="small"
        pagination={false}
        columns={this.columns()} 
        dataSource={data} />
    );
  }
}

export default SourcesTable
