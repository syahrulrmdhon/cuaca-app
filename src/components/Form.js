import React from 'react'

class Form extends React.Component {
    render () {
        return (
            <form onSubmit = {this.props.getCuaca}>
                <input name='city' placeholder='Kota'/>
                <input name='country' placeholder='Negara'/>
                <button>Search</button>
            </form>
        );
    }
}

export default Form