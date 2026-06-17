"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const comprasIniciales = [
  { factura: "FAC-001", proveedor: "Distribuidora Lala S.A.", items: "3 productos", fecha: "2026-06-10" },
  { factura: "FAC-002", proveedor: "Enlatados del Norte", items: "5 productos", fecha: "2026-06-12" },
];

export default function ComprasPage() {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <Sidebar active="Compras" role="admin" />
      <main style={{ flex: 1, padding: "24px" }}>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
          <button onClick={() => setMostrarForm(!mostrarForm)}
            style={{ backgroundColor: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 18px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
            + Registrar Compra
          </button>
        </div>

        {/* Formulario */}
        {mostrarForm && (
          <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "24px", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "20px" }}>Nueva Compra</h2>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>Proveedor</label>
              <select style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 12px", fontSize: "14px", color: "#111", backgroundColor: "#f9fafb", boxSizing: "border-box" }}>
                <option value="">Seleccionar proveedor...</option>
                <option>Distribuidora Lala S.A.</option>
                <option>Proveedor de Harinas Y</option>
                <option>Enlatados del Norte</option>
              </select>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>Número de factura</label>
              <input style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 12px", fontSize: "14px", color: "#111", backgroundColor: "#f9fafb", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>Productos comprados</label>
              <textarea rows={3} placeholder="Ej: 10x Leche Lala 1L, 5x Frijol Negro 1kg..."
                style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 12px", fontSize: "14px", color: "#111", backgroundColor: "#f9fafb", boxSizing: "border-box", resize: "vertical" }} />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={{ backgroundColor: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 20px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Guardar</button>
              <button onClick={() => setMostrarForm(false)}
                style={{ backgroundColor: "#fff", color: "#374151", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 20px", fontSize: "14px", cursor: "pointer" }}>Cancelar</button>
            </div>
          </div>
        )}

        {/* Tabla */}
        <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "16px" }}>Historial de Compras</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                {["Factura", "Proveedor", "Items", "Fecha", "Acciones"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "0 8px 10px 0", fontSize: "12px", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comprasIniciales.map((c, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "12px 8px 12px 0", color: "#2563eb", fontFamily: "monospace", fontSize: "13px", fontWeight: 600 }}>{c.factura}</td>
                  <td style={{ padding: "12px 8px 12px 0", color: "#2563eb", fontWeight: 500 }}>{c.proveedor}</td>
                  <td style={{ padding: "12px 8px 12px 0", color: "#4b5563" }}>{c.items}</td>
                  <td style={{ padding: "12px 8px 12px 0", color: "#6b7280" }}>{c.fecha}</td>
                  <td style={{ padding: "12px 8px 12px 0" }}>
                    <button style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "4px 14px", fontSize: "13px", cursor: "pointer", backgroundColor: "#fff", color: "#374151" }}>Ver detalle</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
