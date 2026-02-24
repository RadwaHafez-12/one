import { Button } from 'bootstrap'
import React from 'react'
import "./Home.css"
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
export function Home() {
  return (
    <>

      <div className="position-relative hero-grid vh-100">

        <div className="blur-bg"></div>
        <div className="blur-bg2"></div>

        <section className="content text-center text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="innerHomeSec mt-4">
                  <span className='p-2 rounded-4 px-3 text-white-75  fr-head'>
                    <i class="fa-solid fa-circle fa-2xs"></i>
                    <i class="fa-solid fa-circle fa-2xs"></i>

                    مرحباً بك في عدسة</span>
                  <h1 className='mt-4 photogrphy'>
                    اكتشف <span>فن</span>
                    <br />
                    التصوير الفوتوغرافي</h1>

                  <p className='  pt-3'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
                    <br />
                    التصوير.</p>


                </div>
              </div>
            </div>

        
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-4 gap-3 buttons">
              <button className="btn text-white rounded-4 px-4 py-2 or-color">
                استكشف المقالات
              </button>

              <button className="btn  btn-outline-light rounded-4 px-4 py-2 d-inline-flex align-items-center gap-2 more-btn">
                <RiErrorWarningLine />
                اعرف المزيد
              </button>
            </div>


            <div className="row mt-4 mb-2 pb-5">
              <div className="col-md-3 col-sm-6 ">

                <div className="card-item text-center px-4 py-2 rounded-4">

                  <div className="icon-box mb-3">
                    <FaRegNewspaper size={32} />
                    <p >50+</p>
                  </div>


                  <h6 className="text-muted-50 ">مقالة</h6>

                </div>
              </div>


              <div className="col-md-3 col-sm-6 mb-4">

                <div className="card-item text-center px-4 py-2 rounded-4">

                  <div className="icon-box">
                    <IoPeopleSharp size={32} />

                    <p className="">+10ألف</p>
                  </div>


                  <h6 className="text-muted-50 ">قارئ</h6>

                </div>
              </div>


              <div className="col-md-3 col-sm-6 mb-4">

                <div className="card-item text-center px-4 py-2 rounded-4">

                  <div className="icon-box">
                    <FaFolderOpen size={32} />

                    <p className="">4</p>
                  </div>


                  <h6 className="text-muted-50 ">
                    تصنيفات</h6>

                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">

                <div className="card-item text-center px-4 py-2 rounded-4">

                  <div className="icon-box">
                    <FaPenNib size={32} />

                    <p className="">6</p>
                  </div>


                  <h6 className="text-muted-50 ">كاتب</h6>

                </div>
              </div>



            </div>



          </div>

        </section>

      </div>



    </>
  )
}
