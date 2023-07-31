
import { Component } from 'react';
import './Etudiant.css';

class Etudiant extends Component {
    render() {
        return (
            <div className="content" style={{backgroundColor: this.props.couleur}}>
                <p className='h1 text-white' onClick={this.props.clic}>{this.props.name}</p>
                <h5>{this.props.classe}</h5>
                <p>
                    {Math.floor(Math.random() * 50) >= 18  ? 'Majeur' : 'Mineur'}
                </p>
                <p>
                    {
                        Math.floor(Math.random() * 50) >= 18 &&
                        <b>Majeur</b>                        
                    }
                </p>
            </div>
        )
    }
}

export default Etudiant
