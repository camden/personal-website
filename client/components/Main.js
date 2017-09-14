// @flow

import React, { Component } from 'react';
import ReactModal from 'react-modal';

import Resume from 'components/Resume';
import resume from 'assets/resume.json';

resume.basics.email = process.env.EMAIL_ADDRESS;
resume.basics.phone = process.env.PHONE_NUMBER;
resume.basics.location.address = process.env.LOCATION_ADDRESS;
resume.basics.location.postalCode = process.env.LOCATION_POSTAL_CODE;
resume.basics.location.city = process.env.LOCATION_CITY;
resume.basics.location.city = process.env.LOCATION_CITY;
resume.basics.location.region = process.env.LOCATION_REGION;
resume.basics.location.regionAbbrev = process.env.LOCATION_REGION_ABBREV;

class Main extends Component {
  state: {
    settingsModalOpen: boolean,
  };

  handleCloseModal: Function;

  constructor(props) {
    super(props);

    this.state = {
      settingsModalOpen: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keyup', this.handleKeyPress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress.bind(this));
  }

  handleKeyPress(event) {
    if (event.key === 'e') {
      this.handleOpenModal();
    }

    if (event.key === 'Escape') {
      this.handleCloseModal();
    }
  }

  handleCloseModal() {
    this.setState({
      settingsModalOpen: false,
    });
  }

  handleOpenModal() {
    this.setState({
      settingsModalOpen: true,
    });
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.settingsModalOpen}
          contentLabel={'settings modal'}
        >
          <button onClick={this.handleCloseModal}>Done</button>
        </ReactModal>
        <Resume resume={resume} />
      </div>
    );
  }
}

export default Main;
