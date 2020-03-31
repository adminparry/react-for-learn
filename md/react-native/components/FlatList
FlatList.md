# FlatList.md

``` javascript
import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export default class Example extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{
					id: 1,
					title: 'i am one',
				}
			],
		}
	}
	renderMovie(row) {
		return <Text>{ row.title }</Text>
	}
	render() {
		return (
			<FlatList
	        data={this.state.data}
	        renderItem={this.renderMovie}
	        style={styles.list}
	        keyExtractor={item => item.id}/>
		)
	}
}
const styles = StyleSheet.create({
	list: {

	}
})
```