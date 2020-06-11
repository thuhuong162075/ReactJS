import React from 'react';
import './css/App.css';
import TodoItem from './components/TodoItem';
import checkAllImg from './img/checkAll.svg'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      editItem: '',
      status: true,
      newItem: '',
      todoItems: [
        {title: "Đọc sách", isComplete: true},
        {title: "Nghe nhạc"},
        {title: "Đi chợ, nấu ăn"}
      ],
      filter: ''
  }
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
  }
  onItemClick(item){
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }
  onDelete(item){
    return (event) => {
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          ...todoItems.slice(index+1)
        ]
      })
    }
  }
  onEdit(item) {
    return (event) => {
      const {todoItems, newItem} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        newItem: item.title,
        editItem: index,
      })
    }
  }
  onClickAll() {
    return (event) => {
      const {todoItems, status} = this.state;
      const a = []
      todoItems.map(item => a.push({title: item.title, isComplete: status}))
      this.setState({
        todoItems: a,
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
        this.setState({
          todoItems: [
            {title: text, isComplete: false},
            ...this.state.todoItems
          ],
          newItem: ''
        })
      }else {
        const index = this.state.editItem
        const {todoItems} = this.state;
        this.setState({
          todoItems: [
            ...todoItems.slice(0, index),
            {
              title: text,
              isComplete: todoItems[index].isComplete
            },
            ...todoItems.slice(index+1)
          ],
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
      const {todoItems} = this.state;
      let a = [];
      todoItems.map(item=>{
        if(!item.isComplete) {
          a.push(item)
        }
      })
      this.setState({
        todoItems: a
      })
    }
  }
  onClickShowActive(){
    return (event) => {
      this.setState({
        filter: this.state.todoItems.filter(element => typeof element.isComplete==="undefined" || element.isComplete ===false)
      })
    }
  }
  onClickShowComplete(){
    return (event) => {
      this.setState({
        filter: this.state.todoItems.filter(element => element.isComplete === true)
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
    const {todoItems, newItem, filter} = this.state;
    const found = todoItems.filter(element => element.isComplete === true)
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
          {!filter && todoItems.length>0 && todoItems.map((item, index) =>
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClick(item)} 
              onDelete = {this.onDelete(item)}
              onEdit = {this.onEdit(item)}
              
            />
          )}
          {todoItems.length === 0 && 'Nothing here'}
          <div className="Footer">
            <p className="totalItem">{todoItems.length} Item</p>
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

export default App;
