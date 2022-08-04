import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container py-4">
                <div className='row'>
                    <section className="mb-4">
                        <h2 className="h1-responsive font-weight-bold text-center my-4">Kontak kami</h2>
                        <p className="text-center w-responsive mx-auto mb-5">Punya pertanyaan seputar spesifikasi produk elektronik ? Silahkan kirimkan pertanyannya di form berikut.</p>

                        <div className="row">
                            <div className="col-md-8 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating md-form">
                                                <input type="text" id="name" name="name" className="form-control" />
                                                <label for="name" className="">Nama Lengkap</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating md-form">
                                                <input type="text" id="email" name="email" className="form-control" />
                                                <label for="email" className="">Email</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12 mb-2">
                                            <div className="form-floating md-form mb-0">
                                                <input type="text" id="subject" name="subject" className="form-control" />
                                                <label for="subject" className="">Judul</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <div className="form-floating md-form">
                                                <textarea type="text" id="message" name="message" className="form-control" style={{ height: '100px' }}></textarea>
                                                <label for="message">Isi pertanyaan</label>
                                            </div>

                                        </div>
                                    </div>

                                </form>

                                <div className="text-center">
                                    <button type='submit' className='btn btn-primary'>Kirim</button>
                                </div>
                                <div className="status"></div>
                            </div>

                            <div className="col-md-4 text-center">
                                <img src="https://img.freepik.com/free-vector/illustration-e-mail-protection-concept-e-mail-envelope-with-file-document-attach-file-system-security-approved_1150-41788.jpg?w=740&t=st=1659348511~exp=1659349111~hmac=e06e94ef8c173648b082e8028e0c148094325f7a0ecef6c33b30105de2bf6f6c" alt="" className="img-fluid mb-4 mb-lg-0" style={{ width: "500px" }} />
                            </div>

                        </div>

                    </section>
                </div>
            </div>

        </>
    )
}

export default Contact