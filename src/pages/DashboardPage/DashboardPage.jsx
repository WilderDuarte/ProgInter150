import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

function DashboardPage() {
  return (
    <div
      className="d-flex flex-column"
      style={{ minHeight: "100vh", height: "100vh", overflow: "hidden" }}
    >

      {/* NAVBAR */}
      <Navbar />

      <div className="d-flex flex-grow-1" style={{ overflow: "hidden" }}>

        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENIDO CENTRAL */}
        <main className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
          <h1>Bienvenido al Dashboard</h1>
          <p>Este es el contenido principal de esta vista.</p>
        </main>

      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default DashboardPage;
