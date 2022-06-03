import { useState } from "react";
import Footer from "components/layout/Footer";

const PageLayout = ({ children }) => {
  const [isJJKids, setJJKids] = useState(false);

  return (
    <>
      <main className="page-wrapper">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
