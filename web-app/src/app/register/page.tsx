export default function RegisterPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6" }}>
      <div style={{ width: "100%", maxWidth: "360px", backgroundColor: "#fff", border: "1px solid #d1d5db", borderRadius: "8px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#111", borderBottom: "1px solid #e5e7eb", paddingBottom: "12px", marginBottom: "24px" }}>
          Crear Cuenta
        </h1>
        {[
          { label: "Nombre completo", type: "text" },
          { label: "Usuario", type: "text" },
          { label: "Correo electrónico", type: "email" },
          { label: "Contraseña", type: "password" },
        ].map((f) => (
          <div key={f.label} style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>{f.label}</label>
            <input type={f.type} style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 12px", fontSize: "14px", color: "#111", backgroundColor: "#f9fafb", boxSizing: "border-box" }} />
          </div>
        ))}
        <button style={{ width: "100%", backgroundColor: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer", marginTop: "8px" }}>
          Registrarse
        </button>
        <p style={{ textAlign: "center", fontSize: "13px", marginTop: "16px", color: "#6b7280" }}>
          ¿Ya tienes cuenta?{" "}
          <a href="/" style={{ color: "#111", fontWeight: 600 }}>Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
