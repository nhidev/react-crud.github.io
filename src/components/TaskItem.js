import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    return (
        <tr>
           <td>1</td>
           <td>Hoc React</td>
           <td class="text-center"><span class="label label-info">Ẩn</span></td>
           <td class="text-center">
                 <button type="button" class="btn btn-warning"><span class="fa fa-pencil mr-5"></span>Sửa</button>
               <button type="button" class="btn btn-danger"><span class="fa fa-trash mr-5"></span>Xóa</button>
           </td>
        </tr>
    );
  }
}

export default TaskItem;
