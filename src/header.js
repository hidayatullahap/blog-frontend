import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Header extends Component {
	render() {
		return (
			<div className="header-parent">
				<div>
					<Row>
						<Col className="header-child-left" span={6}>
							<Row>
								<Col className="header-left-content">
									🦆🐈🐕
								</Col>
							</Row>
						</Col>
						<Col className="header-child-right" span={18}>
							<Row>
								<Col className="header-right-content">
									About
								</Col>
								<Col className="header-right-content">
									Contact
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Header;