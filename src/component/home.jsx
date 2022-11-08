import About from "./about";
import React from "react";
import logo from '../asset/logo-tk.jpg'
import icon1 from '../asset/element/lg-a.svg'
import icon2 from '../asset/element/lg-b.svg'
import icon3 from '../asset/element/lg-c.svg'

const Home = () =>{  

  return(
    
  <div>
    <section className="header">
      <header>
          <div className="bg">
          <div className="banner-home">
              <div className="navbar-home fixed-top">
                  <img src={logo} width="50px" height="40px" alt="logo"/>
                  <ul>
                      <li><a href="home.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="daftar.html">Pendaftaran</a></li>
                      <li><a href="login.html">Login</a></li>
                  </ul>
              </div>
              <div className="text">
                  <h1 className="fw-bold" id="h1">Selamat Datang</h1>
                  <h2 className="fw-bold" id="h2">TK-AL-MUHAJIRIN</h2>
                  <p className="fw-bold" id="p">Setiap hari membawa keceriaan dalam setiap pembelajaran.</p>
                  <div>
                      <a href="daftar.html"id="btn-daftar">Daftar Sekarang!
                      </a>
                  </div>
              </div>  
          </div>
          <div class="content-row">
            <div class="content-col">
                <img src={'icon1'}class="mb-3" alt=""/>
                <h4>Sistem Belajar Baik</h4>
                <p>Sistem Pembelajaran yang menarik 
                    dan memudahkan anak memahami
                    semua materi pembelajaran.</p>
            </div>
            <div class="content-col ">
                <img src={'icon2'} class="mb-3" alt=""/>
                <h4>Pengajar Ahli</h4>
                <p>Tenaga pengajar yang ahli di
                    bidangnya. Minimal lulusan S2 dan 
                    berpengalaman mengajar. </p>
            </div>
            <div class="content-col">
                <img src={'icon3'} class="mb-3" alt=""/>
                <h4>Fasilitas Terbaik</h4>
                <p>Fasilitas penunjang belajar lengkap:
                    perpustakaan, lab k omputer,
                    ruang seni, taman bermain, dan tenis,
                    perangkat alat musik, dll. 
                    </p>
            </div>
        </div>
      </div>
      </header>
    </section>
    {/* galeri */}
    <section id="galeri">
        <div className="galeri">
            <div className="judul-home">
            <h1>Galeri</h1>
            </div>
            <div className="foto">
                <div className="foto1">
                    <img src="https://source.unsplash.com/450x300?school" alt=""/>
                    <div className="deskripsi">
                        <h3>Membaca Bersama</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, omnis ratione porro ab reprehenderit dolorum quisquam corrupti perferendis eum voluptatum.</p>
                    </div>
                </div>
                <div className="foto1">
                    <img src="https://source.unsplash.com/450x300?school" alt=""/>
                    <div className="deskripsi">
                        <h3>Membaca Bersama</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, omnis ratione porro ab reprehenderit dolorum quisquam corrupti perferendis eum voluptatum.</p>
                    </div>
                </div>
                <div className="foto1">
                    <img src="https://source.unsplash.com/450x300?school" alt=""/>
                    <div className="deskripsi">
                        <h3>Membaca Bersama</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, omnis ratione porro ab reprehenderit dolorum quisquam corrupti perferendis eum voluptatum.</p>
                    </div>
                </div>
                <div className="foto1">
                    <img src="https://source.unsplash.com/450x300?school" alt=""/>
                    <div className="deskripsi">
                        <h3>Membaca Bersama</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, omnis ratione porro ab reprehenderit dolorum quisquam corrupti perferendis eum voluptatum.</p>
                    </div>
                </div>
                <div className="foto1">
                    <img src={"https://source.unsplash.com/450x300?school" }alt=""/>
                    <div className="deskripsi">
                        <h3>Membaca Bersama</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, omnis ratione porro ab reprehenderit dolorum quisquam corrupti perferendis eum voluptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="testimoni">
        <div className="judul-testi">
            <h1>Testimoni</h1>
            <p>Apa kata mereka tenang TK Al-Muhajirin</p>
        </div>
        <div className="testi-row">
                <div className="testi-col">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque asperiores enim earum soluta. Dolores voluptatibus inventore, commodi illum suscipit cupiditate eius quidem voluptas reprehenderit. Accusantium consequuntur minus ab qui animi voluptatibus asperiores adipisci aut, quae recusandae aperiam vitae vero tenetur.</p>
                </div>
                <div className="testi-col">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque asperiores enim earum soluta. Dolores voluptatibus inventore, commodi illum suscipit cupiditate eius quidem voluptas reprehenderit. Accusantium consequuntur minus ab qui animi voluptatibus asperiores adipisci aut, quae recusandae aperiam vitae vero tenetur.</p>
                </div>
                <div className="testi-col">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque asperiores enim earum soluta. Dolores voluptatibus inventore, commodi illum suscipit cupiditate eius quidem voluptas reprehenderit. Accusantium consequuntur minus ab qui animi voluptatibus asperiores adipisci aut, quae recusandae aperiam vitae vero tenetur.</p>
                </div>
            </div>
    </section> 
    <section> 
        <div className="promo">
            <p>Berkomitmen Dalam Mencetak Generasi Terpelajar, Religius Dan Berakhlak Mulia</p>
            <a href="daftar.html" className="btn btn-primary bg-green ">Daftar Sekarang</a>
        </div>
    </section>
    <section id="footer-home">
        <div className="judul">
        </div>
        <div className="footer-row">
        <div className="footer-left">
            <h2>Kontak Kami</h2>
            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> @al-muhajirin.com</p>
            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>  0812345678</p>
        </div>
        <div class="footer-right">
            <h2>Kunjungi Kami</h2>
            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> Konoha Barat No.1212 </p>
            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
        </svg> Senin-Jumat Jam 08.00-14.00</p>
            <p></p>
        </div>
        <div class="sosmed">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
            <p>Copyright Al-Muhajirin</p>
        </div>
        </div>
    </section>
  </div>




  )
}

export default Home;