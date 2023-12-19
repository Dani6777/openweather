const NavBar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-700 to-blue-500 text-white text-2xl rounded-md p-4 fixed w-full top-0 z-10 shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-300">
            <div className="container mx-auto">
                <h1 className="text-red-100 text-lg font-semibold">Pronóstico del Tiempo</h1>
            </div>
        </nav>
    );
};

export default NavBar;
