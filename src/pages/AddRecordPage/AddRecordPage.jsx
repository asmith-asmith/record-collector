import React, { Component } from 'react';

class AddRecordPage extends Component {

    state = {
        formData: {
            name: '',
            artist: ''
        }
    };

    formRef = React.createRef();


    handleChange = e => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }

        this.setState({ formData })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddRecord(this.state.formData);
    }

    render() {
        return (
            <>
                <h1>Add Record</h1>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Records's Name (required)</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Record Artist(required)</label>
                        <input
                            className="form-control"
                            name="artist"
                            value={this.state.formData.artist}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                    >
                        Add Record
                    </button>
                </form>
            </>
        );
    }
}

export default AddRecordPage;