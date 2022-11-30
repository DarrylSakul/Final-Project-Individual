import React from 'react'

function About() {
  return (
    <section className="section pt-0" id="about">
    <div className="container text-center">
      <div className="about">
        <div className="about-img-holder">
          <img src="assets/imgs/man.jpg" className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
        </div>
        <div className="about-caption">
          <p className="section-subtitle">Siapa saya?</p>
          <h2 className="section-title mb-3">Tentang Saya</h2>
          <p>
          Saya adalah mahasiswa dari Universitas Klabat lulusan 2022/2023, saya adalah mahasiswa jurusan akuntansi, saya juga mempunyai pengetahuan mengenai pembuatan dalam membuat web juga cara kerjanya bagi user.
            <br />            
          </p>
          <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
        </div>              
      </div>
    </div>
  </section>
  )
}

export default About