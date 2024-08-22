import React,{Component} from 'react'
class Classcomp extends Component{
    state={
        count:1
    }
    fun = ()=>{
        //by using the setstate we can changhe the count property
        this.setState({count:this.state.count+1})//count-property,this.state.count+1-value
    }
    render(){
        return(
            <div>
                <p>
                    {this.state.count}
                </p>
                <button onClick={this.fun} >Hello</button>
            </div>
        )
    }
}
export default Classcomp

