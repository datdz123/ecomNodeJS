import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4 className="text-white text-14 ">Lorem</h4>
              <p className={"text-white"}>
                Trụ sở chính: 234 Hoàng Quốc Việt, Thành phố Hà Nội, Việt Nam
                ĐT: 0344585777 Email: lorem@gmail.com
              </p>
            </div>

            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4 className="text-white text-14">Hỗ trợ khách hàng
              </h4>
              <ul className="text-14 !text-white">
              <li><a className="text-white " href="#">Điều khoản chung</a></li>
              <li><a  className="text-white "  href="#">Chính sách thành viên</a></li>
              <li><a className="text-white "   href="#">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 single-footer-widget">
              <p className="footer-text m-0 col-lg-8 col-md-12 text-14 text-white">{}
                © Lorem Ipsum is simply dummy  . All rights reserved <i className="fa fa-heart-o" aria-hidden="true"/>
              </p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;