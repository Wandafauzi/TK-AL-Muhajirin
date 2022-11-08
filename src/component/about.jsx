import React from "react";
import bootstrap from "bootstrap";

const About = () => {
return (
    <div>
      <section>
        <div className="banner">
          <div className="navbar fixed-top">
            <img src="./asset/logo-tk.jpg" width="50px" height="40px" alt="" />
            <ul>
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="daftar.html">Pendaftaran</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="judul-sec">
          <h1>TK AL-MUHAJIRIN</h1>
          <h3>Profil Sekolah</h3>
        </div>
      </section>
      <section>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./asset/lorong.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./asset/k-coding.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./asset/taman-3.jpeg" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="visi">
          <h3>Visi</h3>
          <p>“Membentuk generasi yang berakhlakul karimah, mandiri dan kreatif.”</p>
          <h3>Misi</h3>
          <p>1. Menanamkan aqidah yang baik sesuai tuntunan nabi muhammad SAW.</p>
          <p>2. Membiasakan perilaku Islami dalam kehidupan sehari-hari.</p>
          <p>3. Melatih dan mengembangkan kecerdasan anak dalam berfikir & berucap.</p>
          <p>4. Menyelenggarakan proses pembelajaran yang kreatif dan menyenangkan.</p>
        </div>
      </section>
      <section>
        <div className="sambutan">
          <h1>Sambutan Kepala Sekolah</h1>
          <p>Kepala Sekolah</p>
          <img src="https://i.pravatar.cc/260" alt="Kepala Sekolah" />
          <p>Drs.Aziz,M.Pd.</p>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima nulla, fugit neque eos debitis, voluptas assumenda ratione repellendus voluptatibus qui eaque corrupti aliquam aperiam autem molestias perspiciatis. Qui
              quidem, cumque doloribus praesentium, cum, provident labore et ab a animi officia reprehenderit voluptatum asperiores perferendis eum? Harum, nostrum vitae cupiditate repellendus magni praesentium voluptas iure laboriosam ex
              ipsum laudantium facere rem eveniet ipsam voluptatem a unde ratione? Ea deleniti, ullam ut reprehenderit dolore nobis excepturi hic eius laudantium eaque nostrum maxime iure molestias delectus dolorem nulla quisquam possimus,
              magni amet culpa. Cumque minima quia id assumenda voluptatibus, reiciendis sunt
            </p>
          </div>
        </div>
      </section>
      <section className="struktur-pengajar">
        <div className="container">
          <div className="section-file">
            <h2>Tenaga Pengajar</h2>
          </div>
          <div className="owl-carousel" id="tenaga-pendidik-slider">
            <p>
              <b>Jabatan Pengajar</b>
            </p>
            <img src="https://i.pravatar.cc/260" style="border-radius:  100%;" alt="Foto Tenaga Pengajar" />
            <p>Nama Pengajar</p>
            <div className="sec-item"></div>
          </div>
        </div>
      </section>
      <section id="footer-home">
        <div className="judul"></div>
        <div className="footer-row">
          <div className="footer-left">
            <h2>Kontak Kami</h2>
            <p>
              {" "}
              <i className="fa-sharp fa-solid fa-envelope"></i> @al-muhajirin.com
            </p>
            <p>
              {" "}
              <i className="fa-sharp fa-solid fa-circle-phone"></i> 0812345678
            </p>
          </div>
          <div className="footer-right">
            <h2>Kunjungi Kami</h2>
            <p>
              {" "}
              <i className="fa-sharp fa-solid fa-location-dot"></i> Konoha Barat No.1212{" "}
            </p>
            <p>
              {" "}
              <i className="fa-sharp fa-solid fa-clock-two"></i> Senin-Jumat Jam 08.00-14.00
            </p>
            <p></p>
          </div>
          <div className="sosmed">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <p>Copyright Al-Muhajirin</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
