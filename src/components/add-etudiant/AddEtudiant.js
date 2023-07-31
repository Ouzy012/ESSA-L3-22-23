import { Component } from "react";


class AddEtudiant extends Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            email: '',
            description: ''
        };

        this.getData = this.getData.bind(this)
        this.inscription = this.inscription.bind(this)
    }

    getData = (event) => {
        console.log(event.target.value);
        this.setState({
            email : event.target.value,
            description: event.target.value,
        })
    }



    inscription = (event) => {
        console.log(this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.inscription}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" value={this.props.email} onChange={this.getData}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" value={this.props.description} onChange={this.getData}></textarea>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        )
    }
}


export default AddEtudiant