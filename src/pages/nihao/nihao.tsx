import * as React from "react";
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {addTodo, toggleTodo} from '../../redux/actions/nihaoActions';

interface Props {
    onClick: (text: string) => void;
    nihaoReducer: Array<object>;
}

interface State {
    countNum: number
}

class Nihao extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            countNum: 1
        };
    }

    componentWillMount(): void {
        this.props.onClick(`任${Math.random()}务`);
    }

    calcAdd: () => void = () => {
        this.setState((preState) => {
            return {
                ...preState,
                countNum: this.calcCountNum(preState.countNum)
            };
        });
    };

    calcCountNum = (num: number) => {
        // const countNum = this.state.countNum;
        // countNum.split(1);
        console.log(this.state.countNum);
        return num + 1
    }

    render() {
        const {nihaoReducer} = this.props;
        const {countNum} = this.state;
        return (
            <div>
                <h1>HHHmss 详情页 and 你好你好!</h1>
                <Link to="/">主页</Link>
                <div onClick={this.calcAdd}>计时器：{countNum}</div>
                {
                    nihaoReducer.map((item: { text: string, completed: boolean }, index) => <div key={index}><span style={{color: 'red'}}>序号：{index}</span> [ {item.text} ] {item.completed ? '已完成' : '未完成'}</div>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state: object) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch: (action: {type: string}) => void) => {
    return {
        onClick: (text: string) => {
            dispatch(addTodo(text));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nihao);
