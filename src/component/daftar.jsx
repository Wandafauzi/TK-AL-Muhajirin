import bootstrap from "bootstrap";
const Daftar = () => {

return(

  <div className="container p-3 my-3 border bg-white">
    <div id="header" className="mt-5">
      <h1>Form Pendaftaran Siswa Baru</h1>
      <h4>Silakan isi Data  Calon Siswa secara lengkap</h4>
      <img src="./asset/foto-form.png" alt=""/>
      <div className="alert alert-success" role="alert">
        <p>Data Calon Siswa</p>
      </div>
      </div>

      <div className="form-container">
        <form method="post">
          <div className="row">
            <div className="form-grup mt-3 col-8">
                <label>Nama Lengkap</label>
                <input type="text" name="" className="form-control" placeholder="Isikan nama lengkap">
            </div>
          </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="form-grup">
                  <Label>Tempat Lahir</Label>
                  <input type="text" className="form-control" placeholder="Tempat Lahir"/>
                </div>
              </div>
                <div className="col-sm-4">
                  <div className="form-grup">
                    <label>Tanggal lahir</label>
                    <input type="date" name="" className="form-control" placeholder="isi tanggal lahir">
                  </div>
                </div>
              </div>
              
              <div className="form-grup col-md-4">
                <label>Jenis Kelamin</label>
                
                <input type="radio" name="gender" value="1" placeholder="#"> Laki-laki
                
                <input type="radio" name="gender" value="2" placeholder="#"> Perempuan
            </div>
            <div className="form-grup col-md-4">
              <label>Pilih kelas</label>
              <input type="checkbox" placeholder="Kelas Regular"/><p>Kelas Regular</p>
          </div>
          <div className="form-grup col-md-4">
              <label>Pilihan Kelas Tambahan</label>
              <select name="kelas" >
                <option selected>Kelas Piano</option>
                <option selected>Kelas Bahasa</option>
                <option selected>Kelas Coding</option>
              </select>
          </div>
            <div className="row col-sm-8">
            <div className="form-grup">
                <label>Alamat</label>
                <textarea name="" placeholder="Isi alamat lengkap Anda"  className="form-control" rows="5"></textarea>
            </div>
          </div>
            <div className="form-grup">
                <label>Foto</label>
                <label for="file-upload" className="upload-foto">
                  Upload Foto
                </label>
                <input id="file-upload" type="file" className="" name="foto">
            </div>
            
            <div className="alert alert-success" role="alert">
              Data Orangtua Siswa
            </div>
            <div className="row">
              <div className="form-grup mt-3 col-8">
                  <label>Nama Ibu</label>
                  <input type="text" name="" className="form-control" placeholder="Isikan nama lengkap">
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="form-grup">
                  <Label>Tempat Lahir</Label>
                  <input type="text" className="form-control" placeholder="Tempat Lahir">
                </div>
              </div>
                <div className="col-sm-4">
                  <div className="form-grup">
                    <label>Tanggal lahir</label>
                    <input type="date" name="" className="form-control" placeholder="isi tanggal lahir"/>
                  </div>
                </div>
              </div>
        </form>
        </div>
    </div>  
) 

}

export default Daftar;