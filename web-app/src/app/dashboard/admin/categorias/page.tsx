"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const categoriasIniciales = [
  { id: 1, nombre: "Lácteos", productos: 12 },
  { id: 2, nombre: "Granos", productos: 8 },
  { id: 3, nombre: "Enlatados", productos: 25 },
  { id: 4, nombre: "Aceites", productos: 5 },
  { id: 5, nombre: "Bebidas", productos: 18 },
];

export default function AdminCategoriasPage() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [nombre, setNombre] = useState("");

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <Sidebar active="Categorías" role="admin" />
      <main style={{ flex: 1, padding: "24px" }}>

        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
          <button onClick={() => setMostrarForm(!mostrarForm)}
            style={{ backgroundColor: "#111", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 18px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
            + Nueva Categoría
          </button>
        </div>

        {/* Formulario */}
        {mostrarForm && (
          <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "24px", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "20px" }}>Crear Categoría</h2>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>Nombre</label>
              <input value={nombre} onChange={e => setNombre(e.target.value)}
                style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "6px", padding: "8px 12px", fontSize: "14px", color: "#111", backgroundColor: "#f9fafb", boxSizing: "border-box" }} />
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
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "16px" }}>Categorías</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                {["ID", "Nombre", "Productos", "Acciones"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "0 8px 10px 0", fontSize: "12px", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categoriasIniciales.map((c) => (
                <tr key={c.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "12px 8px 12px 0", color: "#9ca3af", fontFamily: "monospace" }}>{c.id}</td>
                  <td style={{ padding: "12px 8px 12px 0", color: "#111", fontWeight: 500 }}>{c.nombre}</td>
                  <td style={{ padding: "12px 8px 12px 0", color: "#374151" }}>{c.productos}</td>
                  <td style={{ padding: "12px 8px 12px 0" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "4px 14px", fontSize: "13px", cursor: "pointer", backgroundColor: "#fff", color: "#374151" }}>Editar</button>
                      <button style={{ backgroundColor: "#dc2626", color: "#fff", border: "none", borderRadius: "6px", padding: "4px 14px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Eliminar</button>
                    </div>
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
