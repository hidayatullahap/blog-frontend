import React, { Component } from 'react';
import axios from 'axios';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: '#',
		title: `ant design part ${i}`,
		avatar: '',
		description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	});
}

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);
class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			changer: true
		};
	}

	getPosts() {
		const HOST = process.env.API_HOST
		axios.get(HOST + '/api/v1/p')
			.then(function (response) {
				console.log(response.data)
			})
			.catch(function (error) {
				console.log(error)
			});
	}

	render() {
		return (
			<div className="content">
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: (page) => {
							console.log(page);
						},
						pageSize: 4,
					}}
					dataSource={listData}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[]}
							extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
						>
							<List.Item.Meta
								avatar={<Avatar src={item.avatar} />}
								title={<a href={item.href}>{item.title}</a>}
								description={item.description}
							/>
							{item.content}
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

export default Content;