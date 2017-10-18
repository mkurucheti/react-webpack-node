import React, {Component} from 'react';

class Table extends Component{
	render(){
		return <div className="container">
			<table className="table">
				<thead>
					<tr>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Designation</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>MK</td>
						<td>KK</td>
						<td>AAA</td>
					</tr>
					<tr>
						<td>MK</td>
						<td>KK</td>
						<td>AAA</td>
					</tr>
					<tr>
						<td>MK</td>
						<td>KK</td>
						<td>AAA</td>
					</tr>
				</tbody>
			</table>
		</div>
	}
}

export default Table;