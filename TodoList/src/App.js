import React from 'react';
import './css/App.css';
import TodoItem from './components/TodoItem';
import checkAllImg from './img/checkAll.svg'
import {connect} from 'react-redux'
import * as actions from './actions/index'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      editItem: '',
      status: true,
      newItem: '',
      filter: ''
  }
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
  }
  onItemClick(item){
    return (event) => {
      this.props.onItemClick(item)
    }
  }
  onDelete(item){
    return (event) => {
      this.props.onDelete(item)
    }
  }
  onEdit(item) {
    return (event) => {
      const {tasks} = this.props
      const index = tasks.indexOf(item);
      this.setState({
        newItem: item.title,
        editItem: index,
      })
    }
  }
  onClickAll() {
    return (event) => {
      const {status} = this.state;
      this.props.onClickAll(status)
      this.setState({
        status: !status
      })

    }
  }
  onKeyUp(event){
    if(event.keyCode === 13 ) { //key enter === 13
      let text = event.target.value;
      if(!text) return;
      text = text.trim();
      if(!text) return;
      if(this.state.editItem===""){
        this.props.onAddTask({title: text, isComplete: false})
        this.setState({
          newItem: ''
        })

      }else {
        const indexEdit = this.state.editItem
        this.props.onEdit(text, indexEdit)
        this.setState({
          newItem: '',
          editItem: ''
        })
      }
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  onClearComplete(){
    return (event) => {
      const {tasks} = this.props
      let a = [];
      tasks.map(item=>{
        if(!item.isComplete) {
          a.push(item)
        }
      })
      this.props.onClearComplete(a)
    }
  }
  onClickShowActive(){
    return (event) => {
      this.setState({
        filter: this.props.tasks.filter(element => typeof element.isComplete==="undefined" || element.isComplete ===false)
      })
    }
  }
  onClickShowComplete(){
    return (event) => {
      this.setState({
        filter: this.props.tasks.filter(element => element.isComplete === true)
      })
    }
  }
  onClickShowAll(){
    return (event) => {
      this.setState({
        filter: ''
      })

    }
  }
  
  render() {
    const {tasks} = this.props
    const {newItem, filter} = this.state;
    const found = tasks.filter(element => element.isComplete === true)
    return (
      <div className="App">
        <div className="title">TodoList</div>
        <div className="body">
          <div className="Header">
            <img src={checkAllImg} width={20} height={20} onClick={this.onClickAll()}/>
            <input 
              type="text" 
              placeholder="What needs to be done?" 
              onKeyUp = {this.onKeyUp}
              value={newItem}
              onChange={this.onChange}
              />
          </div>
          {filter && filter.map((item, index) =>
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClick(item)} 
              onDelete = {this.onDelete(item)}
              onEdit = {this.onEdit(item)}
              
            />
          )}
          {!filter && tasks.length>0 && tasks.map((item, index) =>
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClick(item)} 
              onDelete = {this.onDelete(item)}
              onEdit = {this.onEdit(item)}
              
            />
          )}
          {tasks.length === 0 && 'Nothing here'}
          <div className="Footer">
            <p className="totalItem">{tasks.length} Item</p>
            <div className="filter">
              <p className="show all" onClick={this.onClickShowAll()}>All</p>
              <p className="show active" onClick={this.onClickShowActive()}>Active</p>
              <p className="show complete" onClick={this.onClickShowComplete()}>Complete</p>
            </div>
            
            {found.length > 0 && <p className="clear-complete" onClick={this.onClearComplete()}>Clear complete</p>}
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    tasks : state.tasks
   }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask : (task) => {
      dispatch(actions.addTask(task))
    },
    onItemClick: (task) => {
      dispatch(actions.itemClick(task))
    },
    onDelete: (task) => {
      dispatch(actions.itemDelete(task))
    },
    onEdit: (text, indexEdit) => {
      dispatch(actions.itemEdit(text, indexEdit))
    },
    onClickAll: (status) => {
      dispatch(actions.clickAll(status))
    },
    onClearComplete: (arr) => {
      dispatch(actions.clearComplete(arr))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
