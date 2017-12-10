import React from 'react';
import './Counter.css';

class Counter extends React.Component{
  constructor(){
    super();
    this.state = {
      number: 0
    }
  }

  increase(){
    // this.state.number = this.state.number + 1;
    // console.log(this.state.number);
    this.setState({
      number: this.state.number + 1 //
    });
  }

  decrease(){
    if(this.state.number <= 0) return;
    // this.setState({
    //   number: this.state.number - 1
    // });
    this.setState((state) => {
      return{
          number: state.number - 1
        }
    });
  }

  render(){
    // const number = 0;
    return (
      <div>
        {/*<div>{number}</div>*/}
        {/*<div className={ ? A : B}>{number}</div>*/}
        <div>{this.state.number}</div>
        <button onClick={() => this.increase()}>증가</button>
        <button disabled={!this.state.number} onClick={() => this.decrease()}>감소</button>
        <div >{this.state.number <= 0 && '0 미만으로는 내려 갈 수 없습니다.'}</div>
      </div>
    )
  }
}

export default Counter;