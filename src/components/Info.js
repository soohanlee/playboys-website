import React, { Component } from 'react';
import styled from 'styled-components'
class Info extends Component {
    render() {
        const Wrap = styled.div`
            display : flex
        `
        const Name = styled.div`
            font-size: 1.5rem
            color : #2EC4B6
        `
      
        return (
            <div>
                <Wrap>
                    <Name>{this.props.name}</Name>
                </Wrap>
            </div>
        );
    }
}

export default Info;