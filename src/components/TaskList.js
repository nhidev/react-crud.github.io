import React, { Component } from 'react';
import TaskItem from  './TaskItem';
class TaskList extends Component {
  render() {
    var {tasks} = this.props //var tasks = this.props.tasks
    var itemTasks = tasks.map((task, index) => {
        return <TaskItem key={task.id} 
                         index={index} 
                         task={task} 
                         onUpdateStatus = {this.props.onUpdateStatus} 
                         onDelete = {this.props.onDelete}  
                 />
    })
    return (
     <table className="table table-bordered table-hover mt-15">
        <thead>
            <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>
                    <input type="text" className="form-control" name="filterName" />
                </td>
                <td>
                    <select className="form-control" name="filterStatus">
                        <option value="-1">Tất Cả</option>
                        <option value="0">Ẩn</option>
                        <option value="1">Kích Hoạt</option>
                    </select>
                </td>
                <td></td>
            </tr>
            {/* Task Item */}
             {itemTasks}
        </tbody>
    </table>
    );
  }
}

export default TaskList;
