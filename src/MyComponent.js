import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 화살표 함수 : ()=>{}
// 함수형 컴포넌트 선언 시 function 키워드를 사용하는 것과 화살표 함수 문법을 사용하는 것 간에는 큰 차이가 없음
class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children } = this.props; // 비구조화 할당 문법 : 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다.<br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }        
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

// name값은 무조건 문자열 형태로 전달해줘야 된다는 것을 의미
MyComponent.prototype = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

/*
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    }; 
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다.<br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}
*/

export default MyComponent;