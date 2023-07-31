import { Component } from "react";


class Classe extends Component {

    render() {
        return (
            <div className="content bg-warning">
                <p className='h1 text-white'>{this.props.classe}</p>
            </div>
        )
    }
}

export default Classe