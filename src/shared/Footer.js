import React, {Component, PureComponent} from 'react';
import {Layout} from 'antd';
import {ROUTES} from '../routes';

const {Footer}=Layout;

export function FooterComp(props) {
    return (
        <Footer style={{textAlign: 'center', backgroundColor: 'transparent', fontSize: '12px', color: '#666'}}>
            <div>
                {props.current_route===ROUTES.about ?
                    '课表助手' :
                    <a onClick={()=>{props.navigate(ROUTES.about);}}>关于课表助手</a>
                }{' '}
                by @xmcp
            </div>
            <div style={{marginTop: '8px'}}>
                <a href="https://github.com/Morrow-Yang/pku-syllabus" target="_blank" rel="noopener noreferrer">
                    源代码
                </a>
                {' | '}
                <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">
                    GPLv3 协议
                </a>
                {' | '}
                基于{' '}
                <a href="https://github.com/pkuhelper-web/pku-syllabus" target="_blank" rel="noopener noreferrer">
                    原项目
                </a>
                {' '}修改
            </div>
        </Footer>
    );
}