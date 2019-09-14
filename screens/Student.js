import React from 'react';
import { Container, Header, Title, Body} from 'native-base';

export default class Student extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <Container >
                <Header >
                    <Body >
                        <Title>Student</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}