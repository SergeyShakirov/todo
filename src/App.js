import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {

  state = {
    does: []
  }

  delEl = (index) => {
    const does = [...this.state.does]
    does.splice(index, 1)
    this.setState({does})
  }

  onAdd = () => {
    const does = [...this.state.does]
    does.unshift({name: '', mark: false})
    this.setState({does})
  }

  onChangeValue = (value, index) => {
    const does = this.state.does
    does[index].name = value
    this.setState({does})
  }

  onChangeMark(value, index) {
    const does = this.state.does
    does[index].mark = value
    this.setState({does})
  }

  deleteMarks = () => {
    const does = [...this.state.does]

    for (var i = does.length - 1; i >= 0; i--) {
      if (does[i].mark) {
        does.splice(i, 1);
      }
    }

    this.setState({does})
  }

  render() {
    return(
      <div className="App">
        <a name="newList" href="#top" onClick={this.onAdd}>Новый список</a><br/>
        <ol>
        { this.state.does.map((el, index) => {
          return (
            !el.mark ?
              <li>
                <input className="mark" type="checkbox" checked={el.mark} onChange={event => this.onChangeMark(event.target.checked, index)} />
                <input type="text" value={el.name} onChange={event => this.onChangeValue(event.target.value, index)} />
                <a id="del" href="#" key={index} onClick={event => this.delEl(index)}>X</a>
              </li>
            : null
            )
          })}
        </ol>
        <ol>
          {this.state.does.map((el, index) => {
            return (
              el.mark ?
                <li>
                  <input className="mark" type="checkbox" checked={el.mark} onChange={event => this.onChangeMark(event.target.checked, index)} />
                  <span>{el.name}</span>
                  <a id="del" href="#" key={index} onClick={event => this.delEl(index)}>X</a>
                </li>
              : null
              )
            })}

          {this.state.does.some(element => element.mark == true)
          ? <div>
            <a name="delMark" href="#" onClick={event => this.deleteMarks(this)}>Очистить выполненные</a>
          </div>
          : null
          }
        </ol>
      </div>
    )
  }
}

export default App;
