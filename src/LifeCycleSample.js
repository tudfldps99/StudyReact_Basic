import React, {Component} from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;       // ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // props로 받아온 값을 state에 동기화시키는 용도로 사용. 컴포넌트가 마운트될 때와 업데이트 될 때 호출됨
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {      // 조건에 따라 특정 값 동기화
            return {color: nextProps.color };
        }
        return null;        // state를 변경할 필요가 없다면 null 반환
    }

    // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
    componentDidMount() {
        console.log('componentDidMount');
    }

    // props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);

        // 숫자의 마지막 자리가 4면 리렌더링 하지 않음
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트를 DOM에서 제거할 때 실행
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    
    // 업데이트 하기 직전의 값을 참고할 일이 있을 때 활용 (예: 스크롤바 위치 유지)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링 완료한 후 실행
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => (this.myRef=ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;