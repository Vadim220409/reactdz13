import React, { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen || false,
        };
    }

    componentDidMount() {
        if (this.state.isOpen) {
            window.addEventListener('keydown', this.handleKeyDown);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            if (this.props.isOpen) {
                window.addEventListener('keydown', this.handleKeyDown);
            } else {
                window.removeEventListener('keydown', this.handleKeyDown);
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            this.props.onClose(); 
        }
    }

    handleClose = () => {
        this.props.onClose(); 
    };

    render() {
        if (!this.props.isOpen) return null;

        return (
            <div className="modal-overlay" onClick={this.handleClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={this.handleClose}>
                        &times;
                    </button>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;