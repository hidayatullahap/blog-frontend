import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div>
                    <Row>
                        <Col className="red-border header-left" span={6}>🦆🐈🐕</Col>
                        <Col className="red-border" span={18}>Header Menus</Col>
                    </Row>
                </div>
			</div>
		);
	}
}

export default Header;