//rafce
import React from 'react'

const RenderWithMap = () => {

    const arrProduct = [
        { id: 1, name: 'phone 1', price: 1000 },
        { id: 2, name: 'phone 2', price: 2000 },
        { id: 3, name: 'phone 3', price: 3000 },
    ]
    console.log(<div></div>)

    const renderProduct = () => {
        const arrTrJSX = [];
        for (let item of arrProduct) {
            const jsxElement = <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button className='btn btn-danger'>Del</button></td>
            </tr>; //mỗi lần duyệt qua 1 phần tử tạo ra 1 jsx tương ứng
            arrTrJSX.push(jsxElement); // Đưa jsx vào arrTrJSX [<tr></tr>,<tr></tr>,<tr></tr>] 
        }
        return arrTrJSX; // [<tr></tr>,<tr></tr>,<tr></tr>] 
    }

    const renderMapProduct = () => {
        return arrProduct.map((item) => {
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button className='btn btn-danger'>Del</button></td>
            </tr>
        });
       
    };
    //Viết hàm render Card Product
    const renderCardProduct = () => {
        return arrProduct.map((item)=>{
            return <div className='col-4 mt-2' key={item.id}>
                <div className='card'>
                    <img src={`https://picsum.photos/id/${item.id}/200/200`} />
                    <div className='card-body'>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button className='btn btn-dark'>Detail</button>
                    </div>
                </div>
            </div>
        })
    }

    return <div className='container'>
        <h3>Product list</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {/* {[<tr></tr>,<tr></tr>]} */}
                {/* {renderProduct()} */}
                {renderMapProduct()}
            </tbody>
        </table>
        <hr />
        <h3>Product list (Card)</h3>
        <div className='row'>
            {renderCardProduct()}
        </div>
    </div>
}

export default RenderWithMap

// function main () {
//     return [{
//         id:1
//     },
//     {
//         id:2
//     }]
// }
// main();