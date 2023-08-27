import Avatar from '../../ui/Avatar';
import Heading from '../../ui/Heading';
import UserInformation from '../../ui/UserInformation';

function Profile() {
  return (
    <div className="py-1 px-3">
      <Heading>Profile</Heading>
      <div className="grid grid-rows-8 gap-3 h-screen">
        <Avatar />
        <UserInformation />
      </div>
    </div>
  );
}

export default Profile;
