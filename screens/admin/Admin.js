import React from 'react';
import { Container, Header, Title, Body} from 'native-base';

export default class Admin extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <Container >
                <Header >
                    <Body >
                        <Title>Admin</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}