import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {addReminder, deleteReminder, clearReminders} from '../actions';

import '../styles/App.css';

class App extends Component{
  constructor (props) {
    super(props);

    this.state = {
      text: '',
      dueDate: ''
    };
  }

  addReminder() {
    console.log('this', this);
    this.props.addReminder(this.state.text, this.state.dueDate);
    this.refs.inputBox.value = '';
  }

  delereReminder(id){
    console.log('delete helper ', id);
    console.log(this.props);
    this.props.deleteReminder(id);
  }

  clearAll(){
    this.props.clearReminders();
    this.refs.inputBox.value = '';
  }
  renderReminder(){
    const reminders = this.props.reminder;

    console.log('reminders ', reminders);

    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(r => {
            return(
              <li key={r.id} className="list-group-item">
                <div className="list-item">
                  <div>{r.text}</div>
                  <div><em>{moment(new Date(r.dueDate)).fromNow()}</em></div>
                </div>
                <div onClick={() => this.delereReminder(r.id)} className="list-item delete-button">&#x2715;</div>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-title row">
          <div className="col-md-12">
            Reminder Pro
          </div>
        </div>
        <div className="form-inline">
          <div className="form-group>">
            <input type="text"
                   className="form-control"
                   placeholder="type..."
                   onChange={event => this.setState({text: event.target.value})}
                   ref="inputBox"
            />

            <input type="datetime-local"
                   className="form-control"
                   placeholder="type..."
                   onChange={event => this.setState({dueDate: event.target.value})}
              //onBlur={event => event.target.value = ''}
                  // ref="inputBox"
            />

            &nbsp;
            <button type="button"
                    className="btn btn-success"
                    onClick={() => this.addReminder()}>Add
            </button>
            &nbsp;
            <button type="button"
                    className="btn btn-danger"
                    onClick={() => this.clearAll()}>Clear
            </button>
          </div>
        </div>
        <div className="row">{this.renderReminder()}</div>
      </div>
    );
  }
}

/*function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder}, dispatch);
}*/

function mapStateToProps(state) {
  console.log('state', state);
  return {
    reminder: state
  }
}

//export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);