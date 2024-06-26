import React from 'react'

const Modal = (props) => {
    const {prodDetail} = props;
    //bs5-modal-default
  return (
   <div>

  {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">
            {prodDetail.name}
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
            <img src={prodDetail.img} alt='...' className='w-100' />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Optional: Place to the bottom of scripts */}
</div>

    
  )
}

export default Modal