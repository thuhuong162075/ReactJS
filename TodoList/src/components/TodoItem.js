import React, {Component} from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from "../img/check_complete.svg";
import editImg from "../img/edit.svg";
import deleteImg from "../img/trash.svg";
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state={
            hover: false
        }
    }
    mouseOut() {
        this.setState({
            hover: false
        })
    }
    
    mouseOver() {
        this.setState({
            hover: true
        })
    }
    
    render() {  
        const {item, onClick, onDelete, onEdit} = this.props;
        const {hover} = this.state
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }
        let className = ''

        if(item.isComplete) {
            className += 'TodoItem-complete';
        }
        return (
            <div 
                className="TodoItem" 
                // onMouseOut={() => this.mouseOut()} 
                // onMouseOver={() => this.mouseOver()}
            >
                <img src={url} width={20} height={20} onClick= {onClick} className="checkImg"/>
                <p className={className}>{item.title}</p>
                <img src={editImg} width={15} height={20} className="img editImg" onClick={onEdit}/>
                <img src={deleteImg} width={15} height={20} className="img deleteImg" onClick={onDelete}/>
            </div>
        )
    }
}
export default TodoItem;