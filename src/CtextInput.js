import React from 'react';

export default function CtextInput(props) {
	return (
		<div>
			<span> Name:</span>
			<input type="text" value={props.value} onChange={props.onChange} />
		</div>
	);
}