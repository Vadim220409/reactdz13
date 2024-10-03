import React, { Comment, Component } from 'react';
import Modal from './Modal'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpne: false
    };
  }


  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {

    return(
      <div className='App'>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <h1>Modal Content</h1>
          <p>This is the content inside the modal.</p>
        </Modal>
      </div>
    )
  }
}


export default App;