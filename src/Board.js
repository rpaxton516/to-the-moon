import React, {Component} from 'react'
import logo from '../src/eggbacon.svg'
import Note from './Note'
import {FaPlus} from 'react-icons/fa'

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: [
			
			]
		}
		this.eachNote = this.eachNote.bind(this)
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
		this.add = this.add.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	add(text){
		this.setState(prevState => ({
			notes:[
				...prevState.notes,
				{
					id: this.nextId,
					note: text
				}
			]
		}))
	}

	nextId(){
		this.uniqueID = this.uniqueId || 0
		return this.uniqueId++
	}

	update(newText, i){
		console.log('updating item at index ', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
				)
		}))
	}

	remove(id){
		console.log('removing item at index ', id)
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id !== id)
		}))
	}

eachNote(note, i){
	return(
			<Note key={note.id}
						index={note.id}
						onChange={this.update}
						onRemove={this.remove}>
						{note.note}
			</Note>
		)
}

	render() {
		return (
		<div>
		  <div className="head">
        <header className="App-header">
        	<center>
          <img src={logo} className="App-logo" alt="logo" />  
          <h1 className="App-title">What do we owe Nicole?</h1>
          </center>
        </header>
      </div>
			<div className="board">
				{this.state.notes.map(this.eachNote)}
				<button onClick={this.add.bind(null, "New Note")}
						id="add">
						<FaPlus />
				</button>
			</div>
		</div>
		)
	}
}

export default Board;