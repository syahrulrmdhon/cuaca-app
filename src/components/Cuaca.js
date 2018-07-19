import React from 'react'

class Cuaca extends React.Component {
    render () {
        return (
            <div>
                { this.props.city && this.props.country && 
                    <p>Location : {this.props.city} , {this.props.country}</p> 
                }
                { this.props.temprature && this.props.humidity && 
                    <p>Temparature : {this.props.temprature} , {this.props.humidity} </p>
                }
                { this.props.description && 
                    <p>Description : {this.props.description}</p>
                }
                { this.props.error &&
                    <p>{this.props.error}</p>
                }
            </div>
        );
    }
}

export default Cuaca