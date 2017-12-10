import React from 'react';
import './contents.css'

class  Contents extends React.Component{
  render(){
    console.log(this);
    return (
      <div className="contents">
        {/*컨텐츠 입니다.*/}
        {this.props.children}
        {/*{1 + 5}
        {1 + 5 == 6 ? '안녕' : '하하하'}*/}
      </div>
    )
  }
}

export default Contents;