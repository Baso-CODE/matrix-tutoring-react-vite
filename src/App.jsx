// App.jsx - SETELAH DIPERBAIKI

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// ✅ Komponen layout & global — tetap static import (selalu dipakai)
import { useEffect, useState } from "react";
import Floatingcta from "./Components/FloatingCta/Floatingcta";
import MatrixFooterV2 from "./Components/MatrixFooterV2/MatrixFooterV2";
import Nav from "./helper/Navbar/Nav/Nav";
import ScrollToTop from "./helper/scrollToTop";
import ScrollToTopButton from "./helper/ScrollToTopButton/ScrollToTopButton";
import { Menus } from "./helper/utils";
import { fetchContactCs } from "./lib/features/contactCsSlice";
import { useAppDispatch } from "./lib/hooks";

// ✅ Semua halaman/page — lazy import
const Homepage = lazy(() => import("./Home/Homepage"));
const AboutUsLesPrivate = lazy(
  () => import("./Components/AboutUsLesPrivate/AboutUsLesPrivate"),
);
const Tutor = lazy(() => import("./Components/Tutor/Tutor"));
const ContactUsPage = lazy(() => import("./pages/ContactUs/ContactUsPage"));
const Promo = lazy(() => import("./pages/Promo/Promo"));
const Term = lazy(() => import("./pages/Term/Term"));
const Testimoni = lazy(() => import("./pages/Testimoni/Testimoni"));

// Halaman Lokasi
const Halamankota = lazy(() => import("./Components/HalamanKota/Halamankota"));
const Halamankabupaten = lazy(
  () => import("./Components/HalamanKabupaten/Halamankabupaten"),
);
const Halamankecamatan = lazy(
  () => import("./Components/HalamanKecamatan/Halamankecamatan"),
);
const Halamankelurahan = lazy(
  () => import("./Components/HalamanKelurahan/HalamanKelurahan"),
);

// Les Privat TK
const LesPrivateTK = lazy(
  () => import("./LesPrivate/LesPrivateTK/LesPrivateTK"),
);
const LesPrivateTKKota = lazy(
  () => import("./LesPrivate/LesPrivateTK/LesPrivateTKKota/LesPrivateTKKota"),
);
const LesPrivateTKKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateTK/LesPrivateTKKabupaten/LesPrivateTKKabupaten"),
);
const LesPrivateTKKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateTK/LesPrivateTkKecamatan/LesPrivateTkKecamatan"),
);
const LesPrivateTKKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateTK/LesPrivateTkKelurahan/LesPrivateTkKelurahan"),
);

// Les Privat SD
const LesPrivateSD = lazy(
  () => import("./LesPrivate/LesPrivateSD/LesPrivateSD"),
);
const LesPrivateSDKota = lazy(
  () => import("./LesPrivate/LesPrivateSD/LesPrivateSDKota/LesPrivateSDKota"),
);
const LesPrivateSDKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSD/LesPrivateSDKabupaten/LesPrivateSDKabupaten"),
);
const LesPrivateSDKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSD/LesPrivateSDKecamatan/LesPrivateSDKecamatan"),
);
const LesPrivateSDKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSD/LesPrivateSDKelurahan/LesPrivateSDKelurahan"),
);

// Les Privat SMP
const LesPrivateSMP = lazy(
  () => import("./LesPrivate/LesPrivateSMP/LesPrivateSMP"),
);
const LesPrivateSMPKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKota/LesPrivateSMPKota"),
);
const LesPrivateSMPKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKabupaten/LesPrivateSMPKabupaten"),
);
const LesPrivateSMPKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKecamatan/LesPrivateSMPKecamatan"),
);
const LesPrivateSMPKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKelurahan/LesPrivateSMPKelurahan"),
);

// Les Privat SMA
const LesPrivateSMA = lazy(
  () => import("./LesPrivate/LesPrivateSMA/LesPrivateSMA"),
);
const LesPrivateSMAKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKota/LesPrivateSMAKota"),
);
const LesPrivateSMAKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKabupaten/LesPrivateSMAKabupaten"),
);
const LesPrivateSMAKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKecamatan/LesPrivateSMAKecamatan"),
);
const LesPrivateSMAKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKelurahan/LesPrivateSMAKelurahan"),
);

// Les Privat TKA
const LesPrivateTKA = lazy(
  () => import("./LesPrivate/LesPrivateTKA/LesPrivateTKA"),
);
const LesPrivateTKAKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateTKA/LesPrivateTKAKota/LesPrivateTKAKota"),
);
const LesPrivateTKAKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateTKA/LesPrivateTKAKabupaten/LesPrivateTKAKabupaten"),
);
const LesPrivateTKAKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateTKA/LesPrivateTKAKecamatan/LesPrivateTKAKecamatan"),
);
const LesPrivateTKAKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateTKA/LesPrivateTKAKelurahan/LesPrivateTKAKelurahan"),
);

// Les Privat Mahasiswa
const LesPrivateMahasiswa = lazy(
  () => import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswa"),
);
const LesPrivateMahasiswaKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKota/LesPrivateMahasiswaKota"),
);
const LesPrivateMahasiswaKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKabupaten/LesPrivateMahasiswaKabupaten"),
);
const LesPrivateMahasiswaKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKecamatan/LesPrivateMahasiswaKecamatan"),
);
const LesPrivateMahasiswaKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKelurahan/LesPrivateMahasiswaKelurahan"),
);

// Les Privat Bahasa
const LesPrivateBahasa = lazy(
  () => import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasa"),
);
const LesPrivateBahasaKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKota/LesPrivateBahasaKota"),
);
const LesPrivateBahasaKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKabupaten/LesPrivateBahasaKabupaten"),
);
const LesPrivateBahasaKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKecamatan/LesPrivateBahasaKecamatan"),
);
const LesPrivateBahasaKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKelurahan/LesPrivateBahasaKelurahan"),
);

// Les Privat SIMAK UI
const LesPrivateSimakUI = lazy(
  () => import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUI"),
);
const LesPrivateSimakUIKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKota/LesPrivateSimakUIKota"),
);
const LesPrivateSimakUIKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKabupaten/LesPrivateSimakUIKabupaten"),
);
const LesPrivateSimakUIKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKecamatan/LesPrivateSimakUIKecamatan"),
);

// Les Privat SBMPTN
const LesPrivateSBMPTN = lazy(
  () => import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTN"),
);
const LesPrivateSBMPTNKkota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKkota/LesPrivateSBMPTNKkota"),
);
const LesPrivateSBMPTNKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKabupaten/LesPrivateSBMPTNKabupaten"),
);
const LesPrivateSBMPTNKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKecamatan/LesPrivateSBMPTNKecamatan"),
);
const LesPrivateSBMPTNKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKelurahan/LesPrivateSBMPTNKelurahan"),
);

// Modal — lazy karena jarang dibuka
const ProgramModal = lazy(
  () => import("./helper/Navbar/ProgramModal/ProgramModal"),
);
const MoreModal = lazy(() => import("./Home/MoreModal/MoreModal"));

// ✅ Komponen loading fallback — buat satu file terpisah
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}>
    <div
      style={{
        width: 40,
        height: 40,
        border: "3px solid #f3f3f3",
        borderTop: "3px solid #3498db",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
  </div>
);

const programSubMenuData =
  Menus.find((menu) => menu.name === "Program")?.subMenu || [];
const mainNavItems = ["Home", "About Us", "Program"];
const otherMenus = Menus.filter((menu) => !mainNavItems.includes(menu.name));

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContactCs());
  }, [dispatch]);

  const [showProgramModal, setShowProgramModal] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Nav />

      {/* ✅ Satu Suspense membungkus semua Routes */}
      <Suspense fallback={<PageLoader />}>
        <main
          id="main-content"
          style={{ paddingTop: "var(--navbar-height, 70px)" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/les-privat-di-kota/:kotaSlug"
              element={<Halamankota />}
            />
            <Route
              path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug"
              element={<Halamankabupaten />}
            />
            <Route
              path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<Halamankecamatan />}
            />
            <Route
              path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<Halamankelurahan />}
            />

            <Route path="/tentang-kami" element={<AboutUsLesPrivate />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/testimoni" element={<Testimoni />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/term" element={<Term />} />
            <Route path="/contact-us" element={<ContactUsPage />} />

            {/* TK */}
            <Route path="/les-privat-tk" element={<LesPrivateTK />} />
            <Route
              path="/les-privat-tk/:kotaSlug"
              element={<LesPrivateTKKota />}
            />
            <Route
              path="/les-privat-tk/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateTKKabupaten />}
            />
            <Route
              path="/les-privat-tk/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateTKKecamatan />}
            />
            <Route
              path="/les-privat-tk/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateTKKelurahan />}
            />

            {/* SD */}
            <Route path="/les-privat-sd" element={<LesPrivateSD />} />
            <Route
              path="/les-privat-sd/:kotaSlug"
              element={<LesPrivateSDKota />}
            />
            <Route
              path="/les-privat-sd/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateSDKabupaten />}
            />
            <Route
              path="/les-privat-sd/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateSDKecamatan />}
            />
            <Route
              path="/les-privat-sd/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateSDKelurahan />}
            />

            {/* SMP */}
            <Route path="/les-privat-smp" element={<LesPrivateSMP />} />
            <Route
              path="/les-privat-smp/:kotaSlug"
              element={<LesPrivateSMPKota />}
            />
            <Route
              path="/les-privat-smp/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateSMPKabupaten />}
            />
            <Route
              path="/les-privat-smp/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateSMPKecamatan />}
            />
            <Route
              path="/les-privat-smp/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateSMPKelurahan />}
            />

            {/* SMA */}
            <Route path="/les-privat-sma" element={<LesPrivateSMA />} />
            <Route
              path="/les-privat-sma/:kotaSlug"
              element={<LesPrivateSMAKota />}
            />
            <Route
              path="/les-privat-sma/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateSMAKabupaten />}
            />
            <Route
              path="/les-privat-sma/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateSMAKecamatan />}
            />
            <Route
              path="/les-privat-sma/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateSMAKelurahan />}
            />

            {/* TKA */}
            <Route
              path="/les-privat-tka-tes-kemampuan-akademik"
              element={<LesPrivateTKA />}
            />
            <Route
              path="/les-privat-tka-tes-kemampuan-akademik/:kotaSlug"
              element={<LesPrivateTKAKota />}
            />
            <Route
              path="/les-privat-tka-tes-kemampuan-akademik/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateTKAKabupaten />}
            />
            <Route
              path="/les-privat-tka-tes-kemampuan-akademik/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateTKAKecamatan />}
            />
            <Route
              path="/les-privat-tka-tes-kemampuan-akademik/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateTKAKelurahan />}
            />

            {/* Mahasiswa */}
            <Route
              path="/les-privat-mahasiswa"
              element={<LesPrivateMahasiswa />}
            />
            <Route
              path="/les-privat-mahasiswa/:kotaSlug"
              element={<LesPrivateMahasiswaKota />}
            />
            <Route
              path="/les-privat-mahasiswa/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateMahasiswaKabupaten />}
            />
            <Route
              path="/les-privat-mahasiswa/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateMahasiswaKecamatan />}
            />
            <Route
              path="/les-privat-mahasiswa/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateMahasiswaKelurahan />}
            />

            {/* Bahasa */}
            <Route
              path="/les-privat-bahasa-asing"
              element={<LesPrivateBahasa />}
            />
            <Route
              path="/les-privat-bahasa-asing/:kotaSlug"
              element={<LesPrivateBahasaKota />}
            />
            <Route
              path="/les-privat-bahasa-asing/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateBahasaKabupaten />}
            />
            <Route
              path="/les-privat-bahasa-asing/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateBahasaKecamatan />}
            />
            <Route
              path="/les-privat-bahasa-asing/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateBahasaKelurahan />}
            />

            {/* SIMAK UI */}
            <Route
              path="/les-privat-simak-ui"
              element={<LesPrivateSimakUI />}
            />
            <Route
              path="/les-privat-simak-ui/:kotaSlug"
              element={<LesPrivateSimakUIKota />}
            />
            <Route
              path="/les-privat-simak-ui/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateSimakUIKabupaten />}
            />
            <Route
              path="/les-privat-simak-ui/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateSimakUIKecamatan />}
            />
            <Route
              path="/les-privat-simak-ui/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateSMAKelurahan />}
            />

            {/* SBMPTN */}
            <Route path="/les-privat-sbmptn" element={<LesPrivateSBMPTN />} />
            <Route
              path="/les-privat-sbmptn/:kotaSlug"
              element={<LesPrivateSBMPTNKkota />}
            />
            <Route
              path="/les-privat-sbmptn/:kotaSlug/:kabupatenSlug"
              element={<LesPrivateSBMPTNKabupaten />}
            />
            <Route
              path="/les-privat-sbmptn/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<LesPrivateSBMPTNKecamatan />}
            />
            <Route
              path="/les-privat-sbmptn/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<LesPrivateSBMPTNKelurahan />}
            />

            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>

        {/* Modal juga di dalam Suspense yang sama */}
        {showProgramModal && (
          <ProgramModal
            isOpen={showProgramModal}
            onClose={() => setShowProgramModal(false)}
            programSubMenu={programSubMenuData}
          />
        )}
        {showMoreModal && (
          <MoreModal
            isOpen={showMoreModal}
            onClose={() => setShowMoreModal(false)}
            otherMenus={otherMenus}
          />
        )}
      </Suspense>

      <Floatingcta />
      <ScrollToTopButton />
      <MatrixFooterV2 />
    </>
  );
}

export default App;
