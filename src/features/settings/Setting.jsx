import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';

function Setting() {
  return (
    <div className="flex justify-center h-full">
      <div className="bg-neutral-50 rounded-md w-10/12 my-10 p-3">
        <Heading>Settings</Heading>

        <div className="flex flex-col gap-2 pt-3">
          <FormRow label="Product discount">
            <Input id="discount" name="discount" />
          </FormRow>

          <FormRow label="Max Delete per/day">
            <Input id="deleteCount" name="deleteCount" />
          </FormRow>
        </div>
      </div>
    </div>
  );
}

export default Setting;
