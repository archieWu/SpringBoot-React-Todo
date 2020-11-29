import React,{ Component} from 'react';
import './Counter.css'
//創建類別Counter繼承Component
class Counter extends Component{
    //初始化參數
    constructor(props) {
        super(props);
        this.state={
            counter : 0
        }
        //將function綁定
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    //回傳元件
    render() {
        return(
            <div className={'counter'}>
                {/*帶入CounterButton元件
                 * 傳入參數by
                 * 傳入function
                 * increment及decrement
                 * 使子類繼承
                 * */}
                <CounterButton by={1} increment={this.increment} decrement={this.decrement}/>
                <CounterButton by={5} increment={this.increment} decrement={this.decrement}/>
                <CounterButton by={10} increment={this.increment} decrement={this.decrement}/>
                {/*創建元件待入此類中的counter值*/}
                <span className="count" >{this.state.counter}</span>
                {/*創建元件button建立onClick帶入此類的function reset*/}
                <div><button className={"reset"} onClick={this.reset}>Reset</button></div>
            </div>
        );
    }
    /*創建increment function 傳入參數by 使用 ()=>{} 將執行前的參數帶入
    * function do:
    * 將原本的counter值加上按鈕所代表的by值存回counter中
    * */
    increment(by) {
        this.setState( (prevState) => {
            return (
                {counter: prevState.counter + by}
            )
        })
    }
    /*創建decrement function 傳入參數by 使用 ()=>{} 將執行前的參數帶入
    * function do:
    * 將原本的counter值減去按鈕所代表的by值存回counter中
    * */
    decrement(by) {
        this.setState( (prevState) => {
            return (
                {counter: prevState.counter - by}
            )
        })
    }
    /*創建reset function
    * function do:
    * 將counter設為0
    * */
    reset() {
        this.setState(
                {counter: 0}
            )
    }
}
//創建類別Counter繼承Component
class CounterButton extends Component{
    //初始化參數
    constructor(props) {
        super(props);
        this.state={
            counter : 0
        }
    }
    //回傳元件
    render() {
        return(
            <div className="counterbutton">
                {/*創建元件button onClick帶入父類的function increment*/}
                <button onClick={() => this.props.increment(this.props.by)}>+{this.props.by}</button>
                {/*創建元件button onClick帶入父類的function decrement*/}
                <button onClick={() => this.props.decrement(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
}
//拋出Counter
export default Counter;
