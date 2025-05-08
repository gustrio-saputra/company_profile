import Image from "next/image";
import HeroInfo from "@/components/HeroInfo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* title */}
      <div id="beranda" className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
  <h1 className="sm:text-6xl text-5xl font-extrabold sm:text-center text-left leading-tight tracking-wide sm:max-w-4xl mx-auto px-4 sm:px-0">
    Bangun Cerita Visual <br />Untuk Bisnis Anda!
  </h1>
</div>

      {/* title */}

      {/* Hero Image */}
      <div className="max-w-10xl mx-auto relative">
        <Image src="/assets/company1.jpeg" alt="Hero Image" priority width={1920} height={1280} />
        <HeroInfo />
      </div>
      {/* Hero Image */}

      <div className="mt-32 max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar/Visual */}
          <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/assets/logo1.jpg"
              alt="Tentang Kami"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Teks */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Tentang Framework Visual</h1>
            <p className="text-base/relaxed text-slate-700 mb-6 text-justify font-semibold text-xl">
              Studio kreatif multifungsi- Spesialis yang tidak hanya menawarkan sesi fotografi, tetapi juga layanan penuh  konten digital, dan desain grafis.
            </p>
            <p className="text-base/relaxed text-slate-700 mb-6 text-justify text-xl">
              Framework Visual adalah studio kreatif yang berfokus pada penyediaan solusi visual
              profesional untuk kebutuhan bisnis dan personal. Dengan pengalaman lebih dari 15 tahun,
              kami telah membantu ratusan klien dalam membangun identitas visual yang kuat melalui
              fotografi, videografi, konten digital, dan desain grafis yang inovatif.
            </p>
            <ul className="space-y-3 text-base text-slate-700">
              <li className="flex items-start gap-2 font-bold text-xl">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Tim profesional dengan latar belakang industri kreatif
              </li>
              <li className="flex items-start gap-2 font-bold text-xl">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Portofolio luas dari UMKM hingga perusahaan besar
              </li>
              <li className="flex items-start gap-2 font-bold text-xl">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Pelayanan end-to-end dari konsep hingga eksekusi
              </li>
              <li className="flex items-start gap-2 font-bold text-xl">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Satu tempat solusi semua kebutuhan visual (foto, video, desain).
              </li>
              <li className="flex items-start gap-2 font-bold text-xl">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Cocok untuk UKM yang ingin naik kelas lewat branding kuat.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Tentang Kami */}

      {/* Layanan */}
      <div id="layanan" className="pt-28">
        <h1 className="text-4xl/normal text-center font-semibold">Layanan Dan Produk Kami</h1>
        <div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1">
          <div className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
            <p className="font-semibold text-2xl/normal mb-2">Harga Terbaik</p>
            <p className="text-base/loose">Investasi cerdas, hasil luar biasa.</p>
          </div>
          <div className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-service-fill ri-3x text-slate-700"></i>
            <p className="font-semibold text-2xl/normal mb-2">Full Service Terbaik</p>
            <p className="text-base/loose">Layanan end-to-end yang tak tertandingi.</p>
          </div>
          <div className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-star-s-fill ri-3x text-slate-700"></i>
            <p className="font-semibold text-2xl/normal mb-2">Hasil Terbaik</p>
            <p className="text-base/loose">Hasil kreatif yang melebihi harapan dan standar.</p>
          </div>
        </div>
        <div className="mt-25 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">

          <div className="shadow-2xl p-4 rounded-2xl">
            <div className="relative w-full aspect-square rounded-t-2xl overflow-hidden">
              <Image
                src="/assets/produk1.png"
                alt="Produk"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Fotografi Profesional</h1>

            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Event-wedding,seminar,konser dll
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Company Profile
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Personal Branding
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Produk
              </li>
            </ul>

            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>



          <div className="shadow-2xl p-4 rounded-2xl">
            <div className="relative w-full aspect-square rounded-t-2xl overflow-hidden">
              <Image
                src="/assets/produk22.webp"
                alt="Produk"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Konten Visual</h1>

            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Produksi Foto Dan video Produk
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Reels dan Feed Tiktok,IG, Facebook
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                YouTube
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Testimonial Dll
              </li>
            </ul>

            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>


          <div className="shadow-2xl p-4 rounded-2xl">
            <div className="relative w-full aspect-square rounded-t-2xl overflow-hidden">
              <Image
                src="/assets/produk3.jpg"
                alt="Produk"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Desain Grafis</h1>

            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Logo
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Branding Kit - Company Profile, Katalog, Packaging
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                Banner, Dll
              </li>
              {/* <li className="flex items-start gap-2">
                <i className="ri-check-line text-green-600 mt-0"></i>
                DLL
              </li> */}
            </ul>

            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>


        </div>

      </div>
      {/* Layanan */}

      {/* Testimoni */}
      <div id="testimoni" className="pt-28">
        <h1 className="text-4xl/normal text-center font-semibold">Testimoni</h1>
        <p className="text-xl text-center text-gray-700 font-semibold leading-relaxed mt-6 max-w-3xl mx-auto px-4 md:px-0">
  Lihat bagaimana klien kami merasakan layanan Framework Visual. <span className="text-indigo-600 font-bold">Cerita nyata, hasil nyata</span> — saatnya giliran Anda membangun visual yang mengesankan!
</p>


        <div className="mt-25 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">

          <div className="shadow-2xl p-4 rounded-2xl">
            <Image
              src={`/assets/proyek11.png`}
              alt={`Proyek`}
              className="rounded-tl-2xl rounded-tr-2xl"
              priority
              width={1250}
              height={1250}
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Wedding Photos</h1>
            <p className="text-base/loose">Hasil fotonya indah dan profesional, tim ramah dan bantu abadikan momen spesial kami.</p>
            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          <div className="shadow-2xl p-4 rounded-2xl">
            <Image
              src={`/assets/proyek22.png`}
              alt={`Proyek`}
              className="rounded-tl-2xl rounded-tr-2xl"
              priority
              width={1250}
              height={1250}
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Pebisnis Personal Branding</h1>
            <p className="text-base/loose">Kontennya sangat mendukung citra profesional saya. Visualnya konsisten, tajam, dan penuh karakter.</p>
            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          <div className="shadow-2xl p-4 rounded-2xl">
            <Image
              src={`/assets/proyek33.jpg`}
              alt={`Proyek`}
              className="rounded-tl-2xl rounded-tr-2xl"
              priority
              width={1250}
              height={1250}
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Event Organizer </h1>
            <p className="text-base/loose">Dokumentasi acaranya luar biasa! Semua momen penting tertangkap jelas, hasilnya sangat memuaskan.</p>
            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          <div className="shadow-2xl p-4 rounded-2xl">
            <Image
              src={`/assets/proyek44.jpg`}
              alt={`Proyek`}
              className="rounded-tl-2xl rounded-tr-2xl"
              priority
              width={1250}
              height={1250}
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">UMKM Pemilik Produk</h1>
            <p className="text-base/loose">Konten foto produknya sangat menarik dan profesional, bantu tingkatkan penjualan dan branding kami!</p>
            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          <div className="shadow-2xl p-4 rounded-2xl">
            <Image
              src={`/assets/proyek55.jpg`}
              alt={`Proyek`}
              className="rounded-tl-2xl rounded-tr-2xl"
              priority
              width={1250}
              height={1250}
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Katalog & Logo</h1>
            <p className="text-base/loose">Desain katalog dan logo kami terlihat profesional, sesuai brand dan sangat memikat pelanggan!</p>
            <div className="mt-6 mb-3">
              <Link
                href="/detail"
                className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

        </div>
      </div>
      {/* Testimoni */}

      {/* Kontak */}

      <div id="kontak" className="mt-32">
        <h1 className="text-4xl/normal text-center font-semibold">Kontak Kami</h1>
        <p className="text-lg text-center text-gray-800 font-medium leading-relaxed mt-4 max-w-2xl mx-auto px-4 md:px-0">
  Tertarik untuk <span className="text-indigo-600 font-semibold">bekerja sama</span> atau memiliki <span className="text-indigo-600 font-semibold">pertanyaan</span>? Hubungi kami dan mulai bangun <span className="text-indigo-600 font-semibold">visual cerita Anda</span> bersama Framework Visual. Kami siap membantu!
</p>

        <div className="mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Framework Visual</h2>

            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com/akun_kamu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                <i className="ri-instagram-fill ri-2x"></i>
              </a>
              <a
                href="https://tiktok.com/@akun_kamu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                <i className="ri-tiktok-fill ri-2x"></i>
              </a>
              <a
                href="https://youtube.com/@akun_kamu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                <i className="ri-youtube-fill ri-2x"></i>
              </a>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl shadow w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-2">Kontak Kami</h3>
            <ul className="space-y-2 text-base text-slate-700">
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-slate-600"></i>
                <span>Frameworkvisual@company.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-slate-600"></i>
                <span>+62 838 291 047 61</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-slate-600"></i>
                <span>Jl. Kurungan Nyawa No.103 Pesawaran Lampung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Kontak */}
    </>
  );
}
