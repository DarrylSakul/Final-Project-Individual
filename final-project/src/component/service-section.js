import React from 'react'

function Service() {
  return (
    <section className="section" id="service">
    <div className="container text-center">
      <p className="section-subtitle">Apa yang bisa saya lakukan ?</p>
      <h6 className="section-title mb-6">Pelayanan</h6>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="assets/imgs/pencil-case.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Designing Web</h6>
              <p className="subtitle">making a template of how the front page looks like.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="assets/imgs/responsive.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Front End Web</h6>
              <p className="subtitle">making graphical user interface on the web.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="assets/imgs/toolbox.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Finance</h6>
              <p className="subtitle">prepares and analyze financial records, reports and statement.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-card">
            <div className="body">
              <img src="assets/imgs/analytics.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon" />
              <h6 className="title">Data analytics</h6>
              <p className="subtitle">capable of reviewing accounts and financial records .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service