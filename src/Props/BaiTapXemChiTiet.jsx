//rafce
import React, { useState } from 'react'
import SanPham from './SanPham'

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

const BaiTapXemChiTiet = () => {

    const [spChiTiet, setSpChiTiet] = useState({
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    })

    const renderProduct = () => {
        return data.map((item) => {
            return <div className='col-4 mt-2' key={item.maSP}>
                <SanPham item={item} xemChiTiet={xemChiTiet}/>
            </div>
        })
    }


    const xemChiTiet = (spClick) => {
        console.log(spChiTiet);
        //set lại giá trị của state
        setSpChiTiet(spClick)
    }


    return (
        <div className='container'>
            <h3>Danh sách sản phẩm</h3>
            <div className='row'>
                {renderProduct()}
            </div>
            <div className='mt-2'>
                <div className='row'>
                    <div className='col-4'>
                        <h3>{spChiTiet.tenSP}</h3>
                        <img className='w-100' alt='...' src={spChiTiet.hinhAnh} />
                    </div>
                    <div className='col-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{spChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{spChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{spChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{spChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>Rom</td>
                                    <td>{spChiTiet.rom}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{spChiTiet.heDieuHanh}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BaiTapXemChiTiet