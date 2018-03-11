import React, { Component } from 'react';
import './FlexBox.css';

class FlexBox extends Component {
    render() {
        return (
            <div class="flex-container">
			
			<div class="flex-item">
				<em>Flex Item</em>
				<strong>01</strong> 
			</div>
				
			<div class="flex-item">
				<em>Flex Item</em>
				<strong>02</strong>
			</div>
				
			<div class="flex-item">
				<em>Flex Item</em>
				<strong>03</strong>
			</div>
			
		</div>
        );
    }
}