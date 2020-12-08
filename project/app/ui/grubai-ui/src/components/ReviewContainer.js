import React from 'react';
import { Input, Typography, Space } from 'antd'
import ReviewInput from './ReviewInput'
import './ReviewContainer.css'
import ReviewPrediction from './ReviewPrediction';

const { TextArea } = Input;
const { Text } = Typography;



class ReviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'rating': 0
        }

        this.updateReview.bind(this);
    }

    getPrediction = (text) => {
        

    }
    updateReview = (text) => {
        console.log("text", text);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        };
        fetch('/predict', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ rating: data.stars }));

    }

    render() {
        return (
            <div className='review-container'>
                <Space direction="vertical">
                    <Text> Type in your review here: </Text>
                    <ReviewInput updateReview={this.updateReview} />
                    <ReviewPrediction rating={this.state.rating}/>
                </Space>
            </div>
        )
    }
}

export default ReviewContainer