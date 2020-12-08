import React from 'react';
import { Input, Typography, Space } from 'antd'
import './ReviewPrediction.css'

const { TextArea } = Input;
const { Text } = Typography;



class ReviewPrediction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text> Star Prediction: {this.props.rating}</Text>
        )
    }
}

export default ReviewPrediction