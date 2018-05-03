import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  constructor (props) {
    super(props);
    
    this.state = { comment: ''};
  }

  onFormChange(event) {
    this.setState({ comment: event.target.value});
  }


  onFormSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: ''});
  }
  
  render () {
    return (
      <form
        className="comment-box" 
        onSubmit={this.onFormSubmit.bind(this)}>
        
        <div className="text-xs-center">
          <h4>Add a Comment</h4>
        </div>
        
        <div className="form-group">
          <textarea
            className="form-control"
            value={this.state.comment}
            onChange={this.onFormChange.bind(this)} 
          />
        </div>
        

        <div>
          <button
            className="btn btn-primary center-block"
            action="submit">Submit Comment</button>
        </div>
        
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox);