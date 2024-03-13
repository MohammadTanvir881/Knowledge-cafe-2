import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between px-5 py-5 container mx-auto border-b-2 items-center'>
              <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
              <img src={Profile} alt="" /> 
        </div>
    );
};

export default Header;