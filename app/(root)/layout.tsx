import { Navbar } from "@/app/components";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h1 className="text-5xl">Hola mundo</h1>
        {children}
      </main>
    </>
  );
}
