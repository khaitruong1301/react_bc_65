import React, { useState } from 'react'
import HOCModal from './HOCModal'
import Login from '../pages/Login'
import DemoAntd from '../components/DemoAntd';
import ContainerModal from './ContainerModal';
import { openModalAction } from '../redux/reducers/modalReducer';
import useRedux from '../CustomHook/useRedux';


//HOF: Higher order function

const LoginModalComponent = HOCModal('Login', Login);
const AntDModalComponent = HOCModal('DemoAnt', DemoAntd);

//HOC: Higher order component là component nhận vào tham số là component khác để tạo ra logic của component đó với nội dung bên trong là component được truyền vào. HOCModal, HOCPaging, ...


const DemoHOC = () => {
    const [component,setComponent] = useState(<Login />);
    const{dispatch,state} = useRedux();
    return (
        <div className='container'>
            <h3 draggable onDragStart={(props) => {
                const handleDragStart = (event) => {
                    event.dataTransfer.setData('text/plain', props.children); // Set drag data
                }
            }}>Demo HOC(Higher Order Component)</h3>
            {/* Modal trigger button */}
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
                setComponent(<Login />)
            }}>
                Login
            </button>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
                setComponent(<DemoAntd />)
            }}>
                andDesign
            </button>
            {/* <LoginModalComponent /> */}
            <hr />
            <h3>Container component</h3>
            {/* <ContainerModal funcComponent={DemoAntd} jsxComponent={component}  /> */}
            <hr />
            <h3>Modal redux</h3>
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal-redux" onClick={()=>{
                const payload = {
                    modalTitle: 'Login',
                    modalContent: <Login />
                }
                const action = openModalAction(payload);
                dispatch(action);
            }}>Open modal redux</button>


        </div>
    )
}

export default DemoHOC