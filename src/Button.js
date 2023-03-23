import React,{Component} from 'react'
import "./Button.css"

class Button extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(evt){
        this.props.changeColor(this.props.text);
    }
    render() {
        return (
            <div className="Button">
                <button className="Button-item" onClick={this.handleClick} style={{backgroundColor:this.props.text}}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button