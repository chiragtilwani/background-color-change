import React,{Component} from 'react'
import Button from './Button'
import './ButtonContainer.css'

class ButtonContainer extends Component {
    static defaultProps = {
        colors:['red','orange','yellow','green']
    }
    constructor(props) {
        super(props);
        this.state = {
            color:'cyan'
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(c){
        this.setState({color:c})
    }
    render() {
        let btn=this.props.colors.map(c=>{
            return (
                <Button text={c} changeColor={this.changeColor}/>
            )
        })
        return (
            <div className="ButtonContainer" style={{backgroundColor:this.state.color}}>
                {btn}
            </div>
        )
    }
}

export default ButtonContainer