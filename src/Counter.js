import React, { Component } from 'react';

class Counter extends Component {
  /*
    constructor(props) {
        super(props);       // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 함.
        // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줌

        // state의 초깃값 설정하기
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }
    */

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber} </h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });

            /*
            this.setState(prevState => {
                return {
                    number: prevState.number + 1
                };
            });

            // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
            this.setState(prevState => ({
                number: prevState.number + 1
            }));

            */

            this.setState(
                {
                    number: number + 1
                },
                () => {
                    console.log('방금 setState가 호출되었습니다');
                    console.log(this.state);
                }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
