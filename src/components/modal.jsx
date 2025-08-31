import "./Modal.css";

export default function Modal({ title, cancelModal, confirmModal }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            type="button"
            className="btn btn__cancel"
            onClick={cancelModal}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn btn__confirm"
            onClick={confirmModal}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" onClick={cancelModal} />
    </>
  );
}
