
function Navbar() {
  return (
    <header className='w-full flex justify-center py-4 bg-pink-500 text-white shadow-md'>
      <nav className="container flex justify-between items-center text-lg px-8">
        
        {/* Logo / Título */}
        <div className='font-bold cursor-pointer'>
          Blog Pessoal
        </div>

        {/* Links de Navegação */}
        <div className='flex gap-4'>
         Postagens
          Temas
          Cadastrar tema
          Perfil
          Sair
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
