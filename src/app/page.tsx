import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center text-foreground">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Bienvenido a Tamashi
        </h1>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          Descubre una nueva forma de conectar. Descarga nuestra aplicación y empieza tu experiencia hoy mismo.
        </p>
        
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=com.oolestudio.tamashi" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90 shadow-lg shadow-muted"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <span>Descargar en Google Play</span>
          </a>
          <a
            href="https://play.google.com/apps/internaltest/4701039988783695630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-3 text-primary transition-colors hover:bg-primary/10"
          >
            <span>Unirse al programa de Prueba</span>
          </a>
        </div>

        <div className="mt-12">
           <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
              Aviso de Privacidad
           </Link>
        </div>
      </main>
    </div>
  );
}
