import React, { Component } from 'react';
import axios from 'axios';

class Content extends Component {
    constructor(props) {
		super(props);
		this.state = {
			changer: true
		};
    }
    
    getPosts() {
		const HOST = process.env.API_HOST
		axios.get(HOST+'/api/v1/p')
			.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.log(error)
			});
    }

	render() {
		return (
			<div className="container">
                <div className="row">
                    <div className="red-border col-sm-6">
                        Content
                    </div>
                    <div className="red-border col-sm-6">
                        Content
                    </div>
                </div>
            </div>
		);
	}
}

export default Content;