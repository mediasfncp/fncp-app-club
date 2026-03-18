"use client"

export default function Home() {
  return (
    <div style={{padding:20}}>
      <h1>🏖️ FNCP – Club de Plage</h1>

      <a href="/booking">
        <button style={{
          padding:15,
          background:"#FF9900",
          color:"white",
          border:"none",
          borderRadius:10
        }}>
          Réserver une séance
        </button>
      </a>
    </div>
  )
}
