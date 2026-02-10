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
        
        <div className="mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
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

          <a
            href="/TamashiApp.apk"
            download
            className="flex items-center gap-2 rounded-lg border border-muted-foreground/30 bg-card px-6 py-3 text-foreground transition-colors hover:bg-muted/50"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M6.18,19.64C6.44,19.8 6.74,19.89 7.04,19.89C7.5,19.89 7.95,19.67 8.24,19.26L11.5,14.68L15.76,19.26C16.05,19.67 16.5,19.89 16.96,19.89C17.26,19.89 17.56,19.8 17.82,19.64C18.34,19.33 18.58,18.67 18.27,18.15L13.5,13H18V11H13.5L18.27,5.85C18.58,5.33 18.34,4.67 17.82,4.36C17.3,4.05 16.63,4.29 16.32,4.81L12,10.88L7.68,4.81C7.37,4.29 6.7,4.05 6.18,4.36C5.66,4.67 5.42,5.33 5.73,5.85L10.5,11H6V13H10.5L5.73,18.15C5.42,18.67 5.66,19.33 6.18,19.64Z" />
              <path d="M12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2M12,20C16.41,20 20,16.41 20,12C20,7.59 16.41,4 12,4C7.59,4 4,7.59 4,12C4,16.41 7.59,20 12,20Z" />
            </svg>
            <span>Descargar .apk</span>
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
