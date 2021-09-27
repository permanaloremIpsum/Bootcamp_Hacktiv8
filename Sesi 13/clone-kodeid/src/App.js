import React, { useEffect, useState } from 'react';
import './App.css'
import M from 'materialize-css'; // import js
import "materialize-css/dist/css/materialize.min.css"; // import css
import logo from './images/logo-kode.png'
import foto from './images/banner.PNG'

function Navbar(){
  return(
    <div className="navbar-fixed">
      <nav className="white z-depth-2">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            <img src={logo} alt="logo" className="logo"/>
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger grey-text text-darken-2"><i className="material-icons">menu</i></a>
          <ul className="black-text right hide-on-med-and-down">
            <li>
              <form className="row">
                  <div className="input-field col s9">
                    <input id="search" type="text" required/>
                  </div>
                  <div className="input-field col s3">
                    <a href="#!" className="btn white grey-text text-darken-1" type="submit" name="action"><i className="material-icons">search</i></a>
                  </div>
              </form>
            </li>
            <li><a href="/" className="grey-text text-darken-2">Katalog</a></li>
            <li><a href="/" className="grey-text text-darken-2">Prakerja</a></li>
            <li><a href="/" className="waves-effect waves-light btn red lighten-1 fw-bold">Sign In</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <form className="row">
              <div className="input-field col s9">
                <input id="search" type="text" required/>
              </div>
              <div className="input-field col s3">
                <a href="#!" className="btn white grey-text text-darken-1" type="submit" name="action"><i className="material-icons">search</i></a>
              </div>
          </form>
        </li>
        <li><a href="/" className="grey-text text-darken-2">Katalog</a></li>
        <li><a href="/" className="grey-text text-darken-2">Prakerja</a></li>
        <li><a href="/" className="waves-effect waves-light btn red lighten-1 fw-bold">Sign In</a></li>
      </ul>
    </div>
  )
}

function Header(){
  return(
    <div>
      <header className="row vertical-align banner valign-wrapper">
        <div className="col m4 s12 offset-m4 center">
            <h4 className="white-text fw-bold" style={{marginBottom: "25px"}}>Tingkatkan Kemampuan dan Kompetensi Diri</h4>
            <p className="white-text" style={{marginBottom: "20px"}}>Akses beragam course di bidang pemrograman, marketing, bisnis, hingga personal development!</p>
            <a href="/" className="waves-effect waves-light btn-large red lighten-1 fw-bold">Daftar Gratis</a>
        </div>
      </header>
    </div>
  )
}

function Content(){
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`./data.json`)
    .then((response) => response.json())
    .then((data) => setCourses(data))
  })
  return(
    <div className="container">
      <div className="row">
        <div className="col s12 m12 center" style={{marginBottom: "30px"}}>
          <h4 className="fw-bold">Belajar Online di KODE</h4>
          <h6>Platform E-learning yang menyediakan beragam kelas untuk meningkatkan kompetensi serta daya saing di dunia kerja.</h6>
        </div>
      </div>
      <div className="row">
        {
          courses.map((course, index) =>(
            <div className="col s12 m3" key={index}>
              <a href="#!">
                <div className="card card-product">
                  <div className="card-image">
                    <img className="responsive-img" src={course.banner} alt="cardImage"/>
                  </div>
                  <div className="card-content">
                    <p className="fw-bold">{(course.title).substring(0, 45)+"..."}</p>
                  </div>
                  <div className="card-detail">
                    <div className="card-detail-row">
                      <span className="instructor">{course.instructor}</span>
                      <span className="price">{course.price}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))
        }
      </div>
      <div className="row">
      <div className="col s12 m12 center" style={{marginBottom: "-10px", marginTop: "-20px"}}>
        <a className="waves-effect waves-light btn-large red lighten-1 fw-bold" href="#!" style={{marginBottom: "40px"}}>Explore More...</a>
      </div>
      </div>
    </div>
  )
}

function Banner(){
  return(
    <>
    <div className="container-fluid grey lighten-3 valign-wrapper" style={{padding: "30px"}}>
      <div className="container col s12 center">
        <h5 className="flow-text"><b>Proses Belajar Lebih Efektif</b></h5>
        <p>Fitur-fitur di KODE dibuat untuk memudahkan proses belajar</p>
        <div className="row" style={{paddingTop: "20px"}}>
          <div className="col s12 m4">
          <i className="fas fa-star fa-2x grey-text text-darken-1" style={{paddingBottom: "10px"}}></i>
            <p><b>Pilihan Kelas Unggulan</b></p>
            <p>Dapatkan keterampilan profesional baru yang banyak dibutuhkan industri 4.0 melalui ratusan kelas unggulan.</p>
          </div>
          <div className="col s12 m4">       
          <i className=" fa fa-lightbulb-o fa-2x grey-text text-darken-1" style={{paddingBottom: "10px"}}></i>
            <p><b>Instruktur Handal</b></p>
            <p>Dapatkan pembelajaran langsung dari ahlinya dan bersiaplah untuk mengembangkan potensimu.</p>
          </div>
          <div className="col s12 m4">
            <i className=" fa fa-calculator fa-2x grey-text text-darken-1" style={{paddingBottom: "10px"}}></i>
            <p><b>Beragam metode pembayaran</b></p>
            <p>Tersedia pilihan metode pembayaran mulai dari transfer virtual account hingga pembayaran melalui kartu kredit.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid valign-wrapper left-align" style={{padding: "50px"}}>
      <div className="container col s12 m6">
        <div className="row" >   
          <div className="col s12 m6">
           <h5 className="flow-text"  style={{paddingBottom: "20px"}}><b>Tambah pengetahuan semudah sentuhan jari</b></h5>
           <p>Dimanapun, kapanpun, bisa belajar sepuasnya dengan laptop, komputer desktop, tablet, atau smartphone-mu.</p>
          </div>
          <div className="col s12 m6">
            <img className="responsive-img" src={foto} alt="Ini Foto"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
 }
 
 function Review(){
   return(
     <div className="container-fluid valign-wrapper left-align white-text" style={{padding: "50px"}} id="review">
      <div className="container col s12 m6">
        <div className="row" >
          <div className="col s9">
            <h5><b>“Aksesnya yang mudah membuat saya selalu menyempatkan diri untuk belajar di saat perjalanan berangkat maupun pulang kantor.”</b></h5>
            <p>Chris, Video Editor</p>
            <a href="#!" className="waves-effect waves-light btn-large red lighten-1" id="button"><b>Daftar Sekarang</b></a>
          </div>
        </div>
      </div>
    </div>
   );
 }
 
 function Footer(){
   return(
   <footer className="page-footer blue-grey darken-3" >
     <div className="container">
       <div className="row" style={{padding: "20px"}}>
         <div className="col s12 footstyle center">  
         <ul > 
           <li><a href="#!"><b>Tentang Kami</b></a></li>
           <li><a href="#!"><b>Hubungi Kami</b></a></li>
           <li><a href="#!"><b>Pertanyaan (FAQ)</b></a></li>
           <li><a href="#!"><b>Syarat Dan Ketentuan</b></a></li>
           <li><a href="#!"><b>Kebijakan Privasi</b></a></li>
         </ul>
         </div>
       </div>
       <hr style={{opacity:"0.2"}}/> 
     </div>
     
     <div className="footer-copyright">
       <div className="container center">
         <div className="row ficon">
           <i className="fab fa-facebook-square fa-2x"></i>
           <i className="fab fa-instagram fa-2x"></i>
           <i className="fab fa-linkedin fa-2x"></i>
         </div>
         <p style={{paddingBottom:"5px",paddingTop:"20px"}}>© Copyright KODE by Hacktiv8 2021</p>
       </div>
     </div>
   </footer>
   );
 }

function App() {
  useEffect(()=> {
    document.title = "Explore Materialize CSS"    
    
    M.AutoInit()
  })
  return (
    <div>
      <Navbar/>
      <Header/>
      <Content/>
      <Banner/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
