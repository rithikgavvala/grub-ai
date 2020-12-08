import React from 'react';

import { Space, Input } from 'antd'
import ReviewContainer from './ReviewContainer';

const { TextArea } = Input;

class ReviewInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Space direction="vertical">
                <TextArea showCount style={{width: 500}} onChange={this.onTextChange}/>
            </Space>
        )

    }

    onTextChange = (e) => {
        this.props.updateReview(e.target.value)
    }


}

export default ReviewInput