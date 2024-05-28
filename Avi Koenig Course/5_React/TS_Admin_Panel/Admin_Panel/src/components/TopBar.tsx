import LinkText from './LinkText'; 

const TopBar: React.FC<TopBarProps> = ({ buttons }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-red-600 px-4 flex items-center justify-between">
      <LinkText label="" icon="./src/images/logo_2.png" to="/" />
      <LinkText label="Manage Users" to="/manage-users" />
    </div>
  );
};

export default TopBar;