import MainLayout from "layout/MainLayout";
import Contact from "components/Contact";
import Reviews from "components/Reviews";
import FAQ from "components/FAQ";

function index() {
  return (
    <>
      <MainLayout>
        <FAQ />
        <Reviews />
        <Contact />
      </MainLayout>
    </>
  );
}

export default index;
