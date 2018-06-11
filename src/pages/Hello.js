import React from 'react';
import '../assets/styles/hello.less';

class Hello extends React.Component {

    // constructor(props, context) {
    //   super(props, context);
    // }
    render() {
        return (
            <div className="text-center hello">
                <div>
                    <img src={require('../assets/images/test.png')} width="auto" height="200px"/>
                </div>
                <h2>
                    恭喜!!!
                </h2>
                <h3>
                    React Web工程已经创建成功!
                </h3>
                <p href="#">
                    现在开始在代码的世界里傲游吧!<br/>
                </p>
                <h4>
                    欢迎使用react ->
                    <a href="https://github.com/huarxia">
                        https://github.com/huarxia
                    </a>
                </h4>
            </div>
        );
    };
}

export default Hello;
