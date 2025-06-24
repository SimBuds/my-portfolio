import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto p-6">
        <section className="text-center mt-10">
          <h2 className="text-3xl font-bold text-primary">Welcome to My Portfolio</h2>
          <p className="mt-4 text-gray-600">I'm a full-stack developer focused on clean, performant, secure websites.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}