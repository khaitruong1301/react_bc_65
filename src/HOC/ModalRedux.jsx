import React from 'react'
import useRedux from '../CustomHook/useRedux'

const ModalRedux = () => {
    const {dispatch,state} = useRedux()
    const {modalTitle,modalContent,onSubmitFunction} = state.modalReducer;
    
    return (
        <div>
            {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
            <div className="modal fade" id="modal-redux" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                {modalTitle}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            {modalContent}
                        </div>
                        <div className="modal-footer">
                       
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={onSubmitFunction}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Optional: Place to the bottom of scripts */}
        </div>

    )
}

export default ModalRedux