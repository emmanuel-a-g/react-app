import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
  //we will render either content or a movie
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    } else {
      return _.get(item, column.path);
    }
  }

  //we want multiple t-rows for each item along with its tr's 
  render() { 
    const { data, columns } = this.props;  
    return (
      <tbody>
      {data.map(item => (
        <tr key={item._id}>
          {columns.map((column, index) => (
            <td key={index}>{this.renderCell(item, column)}</td>
          ))}
        </tr>   
      ))}
      </tbody>
    );
  }
}
 
export default TableBody;