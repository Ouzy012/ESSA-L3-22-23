import { Component } from "react";


class AddEtudiant extends Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            email: '',
            description: '',
            password: ''
        };

        this.getData = this.getData.bind(this)
        this.inscription = this.inscription.bind(this)
    }

    getData = (event) => {
        if (event.target.name === 'email') {
            console.log(event.target.value);
        }
        //console.log(event.target.value)
    }

    inscription = (event) => { 
        console.log("methode 1",event.target.email.value)
        console.log("methode 2",event.target[0].value)
        console.log("methode 3",event.target.elements.email.value)
        
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
                    <textarea name="description" className="form-control" value={this.props.description} onChange={this.getData}></textarea>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        )
    }
}


export default AddEtudiant