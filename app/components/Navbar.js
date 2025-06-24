export default function Navbar() {
    return (
        <nav className="bg-primary text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold">Casey Hsu</h1>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-accent">About</a></li>
                    <li><a href="#projects" className="hover:text-accent">Projects</a></li>
                    <li><a href="#contact" className="hover:text-accent">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}