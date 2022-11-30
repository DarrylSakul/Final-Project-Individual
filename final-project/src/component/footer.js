import React from 'react'

function Footer() {
  return (
    <div className="container">
    <footer className="footer">       
      <p className="mb-0">Copyright  © <a href="http://www.devcrud.com">DevCRUD</a></p>
      <div className="social-links text-right m-auto ml-sm-auto">
        <a href="javascript:void(0)" className="link"><i className="ti-facebook" /></a>
        <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt" /></a>
        <a href="javascript:void(0)" className="link"><i className="ti-google" /></a>
        <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt" /></a>
        <a href="javascript:void(0)" className="link"><i className="ti-instagram" /></a>
        <a href="javascript:void(0)" className="link"><i className="ti-rss" /></a>
      </div>
    </footer>
  </div>
  )
}

export default Footer