import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditRecordPage extends Component {
  
  state = {
    formData: this.props.location.state.record
  };
  
  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateRecord(this.state.formData);
  };

  handleChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  };
  

  render() {
    return (
      <>
        <h1>Edit Record</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Record Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Record Artist</label>
            <input
              className="form-control"
              name="artist"
              value={this.state.formData.artist}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Genre</label>
            <input
              className="form-control"
              name="genre"
              value={this.state.formData.genre}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE RECORD
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditRecordPage;