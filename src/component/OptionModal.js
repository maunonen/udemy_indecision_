
import React from 'react'; 
import Modal from 'react-modal'; 

export default class OptionalModal extends React.Component {


    render (){
        return (
                <Modal
                    isOpen={!!this.props.selectedOption}
                    contentLabel="Selected Option"
                    ariaHideApp={false}
                    onRequestClose={this.props.clearSelectedOption}
                >
                    <h3>Selected Option</h3>
                    {this.props.selectedOption && <p>{this.props.selectedOption}</p>}
                    <button onClick={this.props.clearSelectedOption}>Okay</button>
                </Modal>     
        )
    }
}; 