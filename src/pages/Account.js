import React, { Component } from 'react';
import Info from '../components/Info'
import '../styles/account.scss'
class Account extends Component {


   
    render() {
      
        return (
            <div className="account-wrap">
                <div>
                    박기철씨 계좌로 매달 2만원 송금 바랍니다.
                </div>
                <div>
                    641302-01-288859 국민은행 이수한 으로 기부 바랍니다.
                </div>
            </div>
        );
    }
}

export default Account;