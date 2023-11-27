import ActiveLink from "../ActiveLink/ActiveLink";

const NavBar = () => {
    return (
        <nav className="flex justify-center">
            <div className="w-50">
                <ActiveLink to="/home">Home</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
                <ActiveLink to='/contact'>Contact</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
            </div>
        </nav>
    );
};

export default NavBar;