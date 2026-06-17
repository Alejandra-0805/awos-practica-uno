import Sidebar from "@/components/Sidebar";

export default function PedidosPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <Sidebar active="Pedidos" role="cliente" />
      <main style={{ flex: 1, padding: "24px", maxWidth: "760px" }}>
        <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "24px", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>Realizar Pedido</h2>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Agrega los productos que deseas ordenar.</p>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>Items</label>
            <textarea rows={4} placeholder="Ej: 2x Leche Lala 1L, 1x Frijol Negro 1kg..."
              style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 12px", fontSize: "14px", color: "#111", backgroundColor: "#f9fafb", resize: "vertical", boxSizing: "border-box" }} />
          </div>
          <button style={{ backgroundColor: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
            Confirmar Pedido
          </button>
        </div>
        <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "24px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>Mis Pedidos</h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>No hay pedidos registrados aún.</p>
        </div>
      </main>
    </div>
  );
}
