export default function Home() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <img src="/logo.png" alt="Caffe with Code Logo" width="100" />
      <h1>Bienvenido a Caffe with Code</h1>
      <p>
        Somos una agencia de software a la medida que se especializa en crear
        soluciones personalizadas para nuestros clientes.
      </p>
      <nav style={{ marginTop: "1rem" }}>
        <a href="https://git.cafewithcode.site" style={{ marginRight: "1rem", color: "blue" }}>
          Nuestro repositorio profesional
        </a>
      </nav>
    </main>
  );
}
