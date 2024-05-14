import React from 'react'
import useGetApi from '../CustomHook/useGetApi'
import useRoute from "../CustomHook/useRoute";
import useRedux from "../CustomHook/useRedux";
const Home = () => {
  const data = useGetApi('/api/product')
  const {
    navigate,
    params,
    searchParam,
    setSearchParam
  } = useRoute();
  const {state,dispatch} = useRedux();

  console.log({state,dispatch})

  return (
    <div className="container">
      <p style={{fontSize:state.fSizeState}}>Lorem ipsum dolor sit amet.</p>
      <button className="btn btn-success" onClick={()=>{
        const action = {
          type:'CHANGE_FONT_SIZE',
          payload: 1
        }
        dispatch(action);
      }}>ZoomFont</button>

      <button className="about" onClick={()=>{
        navigate('/about')
      }}>Next page</button>
      <h3>Shoes shop</h3>
      <div className="row">
        {data.content?.map((prod,index)=>{
          return <div className="col-3 mt-2" key={index}>
            <div className="card">
              <img src={prod.image} alt='...' />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
export default Home