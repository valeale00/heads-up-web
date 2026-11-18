import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '¡Adivina! — El juego de la frente', description: 'Risas, amigos y palabras por adivinar.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
