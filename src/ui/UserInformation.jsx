import Button from './Button';
import FormRow from './FormRow';
import Input from './Input';

function UserInformation() {
  return (
    <div className="bg-neutral-200 rounded-md row-span-6 h-96 p-3">
      <h3 className="font-medium pb-4">User Information</h3>

      <form className="flex flex-col gap-5">
        <FormRow label="Username">
          <Input />
        </FormRow>

        <FormRow label="Name">
          <Input />
        </FormRow>

        <FormRow label="Email">
          <Input />
        </FormRow>

        <FormRow label="Old Password">
          <Input />
        </FormRow>

        <FormRow label="New Password">
          <Input />
        </FormRow>

        <span>
          <Button>Update</Button>
        </span>
      </form>
    </div>
  );
}

export default UserInformation;
