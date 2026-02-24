import React, { useState } from 'react'
import "./Blog.css"
import { FaFolderOpen, FaListUl } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import data from "../../../posts.json"
import Cateogryitem from '../Cateogryitem/Cateogryitem';
import { BsFillGridFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export function Blog() {

  const { categories, posts } = data;
  const Allcateogry = (["جميع المقالات", ...categories.map(function (item) { return item.name })]);
  const [display, setdisplay] = useState("grid")
  const [currentCateogry, setcurrentCateogry] = useState("جميع المقالات")
  const [search ,setsearch]=useState("");
  
  

  function handelCateogry(value) {
    setcurrentCateogry(value)
  }
  
  
  const filteration=posts.filter((item)=>{
    return currentCateogry==item.category ||currentCateogry=="جميع المقالات"
  }).filter((item)=>{
    return item.title.includes(search)
  })


  return (

    <>



      <main>
        <div className="position-relative hero-grid mt-5   ">


          <div className="blur-bg"></div>
          <div className="blur-bg2"></div>
          <section className='s' >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="innerBlogSec mt-4 text-center text-white">
                    <span className='p-2 rounded-4 px-3   fr-head '>
                      <GoDotFill size={12} className='ms-1' />
                      <FaFolderOpen size={15} className='ms-1' />

                      مدونتنا</span>

                    <h1 className='mt-4 fw-bolder headingBlog '>استكشف <span>مقالاتنا</span></h1>

                    <p className='  pt-3 fs-5 text-white opacity-75 '>
                      اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                    </p>


                  </div>
                </div>
              </div>


            </div>
          </section>





        </div>


        <section className='bgBlog mt-0'>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className=" mb-3 w-75 my-2 ">
                  <input value={search} onChange={(e)=>setsearch(e.target.value)} type='text' className=' mt-2 border-white border-1 rounded-3 p-2 bg-black w-50  text-white' placeholder='ابحث في المقالات ' />
                </div>
              </div>

              <div className="col-md-6">
                <div className='my-2 '>
                  <ul className='   list-unstyled  d-flex gap-3   '>
                    {Allcateogry.map(function (item) { return < Cateogryitem currentCateogry={currentCateogry} handelCateogry={handelCateogry} key={item} item={item} /> })}
                  </ul>

                </div>

              </div>
            </div>

            <div className="row">
              <div className='grid text-white d-flex justify-content-between '>
                <span>عرض {posts.length} مقالات</span>

                <div className="d-inline-flex align-items-center bg-dark border border-secondary rounded-3 p-1">

                  <button
                    onClick={() => setdisplay("grid")}
                    className={`btn btn-sm rounded-2 ${display === "grid"
                      ? "bg-warning text-white"
                      : "bg-transparent text-secondary"
                      }`}
                  >
                    <BsFillGridFill />
                  </button>

                  <button
                    onClick={() => setdisplay("list")}
                    className={`btn btn-sm rounded-2 ${display === "list"
                      ? "bg-warning text-white"
                      : "bg-transparent text-secondary"
                      }`}
                  >
                    <FaListUl />
                  </button>

                </div>



              </div>
            </div>





            <div className="row g-4 mt-2">
              {filteration?.map((item) => (
                <div className={`col-md-${display == "grid" ? "4" : "12"}`} key={item.id}>
                  <article className="card bg-dark text-white border-0 shadow-sm h-100 overflow-hidden blog-card">

                    <Link
                      to={`/blog/${item.id}`}
                      className="text-decoration-none text-white"
                    >



                      <div
                        className="position-relative overflow-hidden"
                        style={{ height: "220px" }}
                      >
                        <img
                          src={item.image}
                          className="w-100 h-100 object-fit-cover blog-img"
                          alt={item.title}
                        />


                        <div className="position-absolute top-0 start-0 w-100 h-100 blog-overlay"></div>


                        <span className="badge bg-dark position-absolute top-0 end-0 m-3 border">
                          {item.category}
                        </span>
                      </div>


                      <div className="card-body">


                        <div className="d-flex align-items-center gap-2 text-secondary small mb-3">
                          <span>⏱ {item.readTime}</span>
                          <span>•</span>
                          <span>
                            {new Date(item.date).toLocaleDateString("ar-EG", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>


                        <h5 className="fw-bold mb-3 blog-title">
                          {item.title}
                        </h5>


                        <p className="text-secondary small mb-4">
                          {item.excerpt}
                        </p>


                        <div className="d-flex justify-content-between align-items-center border-top pt-3">

                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={item.author.avatar}
                              className="rounded-circle"
                              width="40"
                              height="40"
                              alt={item.author.name}
                            />
                            <div>
                              <div className="small fw-semibold text-white">
                                {item.author.name}
                              </div>
                              <div className="small text-secondary">
                                {item.author.role}
                              </div>
                            </div>
                          </div>

                          <div className="btn btn-sm btn-outline-warning rounded-circle">
                            ←
                          </div>

                        </div>
                      </div>
                    </Link>
                  </article>
                </div>
              ))}
            </div>



          </div>




        </section>
      </main>






    </>
  )
}
