import React from 'react'
import "./Footer.css"

export function Footer() {
  return (
    <>
      <footer className="footer-custom text-light pt-5 ">
      <div className="container">
        <div className="row g-5">

          <div className="col-md-4">
            <h4 className="footer-logo">عدسة</h4>
            <p className="footer-description mt-3">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
          </div>

          <div className="col-md-2">
            <h6 className="footer-title mb-3">استكشف</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">الرئيسية</a></li>
              <li><a href="#">المدونة</a></li>
              <li><a href="#">من نحن</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="footer-title mb-3">التصنيفات</h6>
            <ul className="list-unstyled footer-links">
              <li>إضاءة</li>
              <li>بورتريه</li>
              <li>مناظر طبيعية</li>
              <li>تقنيات</li>
            </ul>
          </div>

         
          <div className="col-md-4">
            <h6 className="footer-title mb-3">ابقى على اطلاع</h6>
            <p className="footer-description">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="d-flex gap-2">
              <input
                type="email"
                className="form-control footer-input"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button className="btn footer-btn">
                اشترك
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom text-center mt-5 py-3">
          © {new Date().getFullYear()} عدسة. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>

    </>
  )
}







