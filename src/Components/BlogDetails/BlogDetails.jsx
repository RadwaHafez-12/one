import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../../../posts.json"

export function BlogDetails() {
  const { posts } = data;

  const { id } = useParams();

  const post = posts.find((item) => item.id == id);
  console.log(post);


  return (
    <>
      <div style={{ background: "#0a0a0a", minHeight: "100vh" }} className="text-light">


        <div className="position-relative" style={{ height: "60vh", minHeight: "500px" }}>

          <img
            src={post.image}
            alt={post.title}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />


          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.5), transparent)"
            }}
          ></div>


          <div className="position-absolute bottom-0 start-0 end-0 p-4 p-md-5">
            <div className="container">

              <span className="badge bg-warning text-dark mb-3">
                {post.category}
              </span>

              <h1 className="fw-bold display-5 mb-3">
                {post.title}
              </h1>

              <p className="text-light opacity-75">
                {post.date} • {post.readTime}
              </p>

            </div>
          </div>
        </div>


        <div className="container py-5">
          <div className="row g-5">


            <div className="col-lg-8">

              <div className="p-4 mb-4 rounded"
                style={{ background: "rgba(255,165,0,0.08)", border: "1px solid rgba(255,165,0,0.2)" }}>
                <p className="lead fst-italic mb-0">
                  {post.excerpt}
                </p>
              </div>

              <div
                style={{
                  lineHeight: "1.9",
                  fontSize: "18px",
                  whiteSpace: "pre-line",
                }}
              >
                {post.content.replace(/#/g, "")}
              </div>

              <div className="p-4 mt-5 rounded border"
                style={{ background: "#111", borderColor: "#262626" }}>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author}
                    width="80"
                    height="80"
                    className="rounded"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-1">{post.author.name}</h5>
                    <small className="text-secondary">{post.author.role}</small>
                  </div>
                </div>
              </div>

            </div>


            <div className="col-lg-4">

              <div className="p-4 rounded border mb-4"
                style={{ background: "#111", borderColor: "#262626" }}>
                <h5 className="mb-3">معلومات المقال</h5>
                <p className="mb-2">
                  <i className="fa-regular fa-clock me-2 text-warning"></i>
                  {post.readTime}
                </p>
                <p>
                  <i className="fa-regular fa-calendar me-2 text-warning"></i>
                  {post.date}
                </p>
              </div>

              <div className="p-4 rounded border"
                style={{ background: "#111", borderColor: "#262626" }}>
                <h5 className="mb-3">شارك المقال</h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-light btn-sm">
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button className="btn btn-outline-light btn-sm">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button className="btn btn-outline-light btn-sm">
                    <i className="fa-brands fa-whatsapp"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>




        </div>


        <div className="container py-5">
          <div className="row g-5">

            <div className="col-lg-8">


              <div className="mt-4">
                <h5 className="mb-3">الوسوم</h5>
                <div className="d-flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="badge bg-dark border border-secondary">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">

              <div
                className="p-4 rounded border mb-4"
                style={{ background: "#111", borderColor: "#262626" }}
              >
                <h5 className="mb-3">محتويات المقال</h5>
                <nav className="d-flex flex-column gap-2">
                  {[...Array(6)].map((_, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="text-decoration-none text-light d-flex align-items-center gap-2 p-2 rounded hover-bg-warning"
                    >
                      <span className="badge bg-dark text-secondary">{i + 1}</span>
                      <span>
                        {["التواصل مع الموضوع", "اختيار العدسة المناسبة", "الإضاءة الطبيعية", "التركيز على العيون", "الخلفية والتكوين", "الخلاصة"][i]}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div
                className="p-4 rounded border mb-4 text-center"
                style={{ background: "#111", borderColor: "#262626" }}
              >
                <p className="mb-2"><i className="fa-regular fa-clock me-2 text-warning"></i>{post.readTime}</p>
                <p><i className="fa-regular fa-calendar me-2 text-warning"></i>{new Date(post.date).toLocaleDateString("ar-EG")}</p>
              </div>

            </div>
          </div>


        </div>
      </div>


    </>
  )
}

