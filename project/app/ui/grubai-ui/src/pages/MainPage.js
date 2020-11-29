import React from 'react';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import ReviewContainer from '../components/ReviewContainer'
import { Typography, Space } from 'antd';
import './MainPage.css'
const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

class MainPage extends React.Component {
    render() {
        return (
            <Layout style={{height: "100vh"}}>
                <Header> <Text className="title"> Review Prediction App </Text> </Header>
                <Content> 
                    <Row justify="center">
                        <ReviewContainer />
                    </Row>     
                </Content>
                <Footer> Made with &lt;3 by grub.ai </Footer>
            </Layout>
        )
    }
}

export default MainPage