import booredLogo from "/assets/booredLogo.png";

function NavBar() {
  return (
    <div className="navbar bg-base-100 mb-6 px-4">
      <div className="flex-1">
        <img src={booredLogo} alt="Boored Logo" className="w-32 h-auto" />
      </div>
    </div>
  );
}

export default NavBar
