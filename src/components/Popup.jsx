/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import projects from '../projects/projects';
import ImageSlide from './ImageSlide';

export default function Popup({ name }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        See Project
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-70w"
        aria-labelledby="custom-modal-styling-title"
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>
            {projects[name].name}
          </Modal.Title>
        </Modal.Header>
        <div className="langs">
          {projects[name].stack.map((s) => (
            <Button
              key={Math.random()}
              className="techs m-1 rounded-0"
            >
              {s}
            </Button>
          ))}
        </div>
        <Modal.Body>
          <ImageSlide images={projects[name].images} />
          <p className="project-desc">{projects[name].description}</p>
          <div className="links d-flex justify-content-center gap-5">
            <a
              href={`${projects[name].source}`}
              className="btn rounded-1 px-4 py-2"
              target="_blank"
              rel="noreferrer"
            >
              See Source
              <i className="bi bi-github ms-2" />
            </a>
            <a
              href={`${projects[name].live}`}
              target="_blank"
              className="btn rounded-1 p-2"
              rel="noreferrer"
            >
              See Live
              <i className="bi bi-box-arrow-up-right ms-2" />
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
