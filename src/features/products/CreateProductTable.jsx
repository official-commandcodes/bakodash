import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

function CreateProductTable() {
  return (
    <form className="flex flex-col gap-2 py-2">
      <h2 className="text-xl font-medium mb-5">Add new Product</h2>

      <FormRow label="Title" error={''}>
        <input
          className="col-span-4 rounded-sm outline-none px-2 py-1 focus:border-blue-400 focus:border-[2px] transition-all duration-300 ease-in-out "
          type="text"
          id="title"
        />
      </FormRow>

      <FormRow label="Color" error={''}>
        <input
          className="col-span-4 rounded-sm outline-none px-2 py-1 focus:border-blue-400 focus:border-[2px] transition-all duration-300 ease-in-out "
          type="text"
          id="color"
        />
      </FormRow>

      <FormRow label="Price" error={''}>
        <input
          className="col-span-4 rounded-sm outline-none px-2 py-1 focus:border-blue-400 focus:border-[2px] transition-all duration-300 ease-in-out "
          type="text"
          id="price"
        />
      </FormRow>

      <FormRow label="Company" error={''}>
        <input
          className="col-span-4 rounded-sm outline-none px-2 py-1 focus:border-blue-400 focus:border-[2px] transition-all duration-300 ease-in-out "
          type="text"
          id="company"
        />
      </FormRow>

      <FormRow label="Availability" error={''}>
        <input
          className="col-span-4 rounded-sm outline-none px-2 py-1 focus:border-blue-400 focus:border-[2px] transition-all duration-300 ease-in-out "
          type="text"
          id="availability"
        />
      </FormRow>

      <FormRow label="Picture" error={''}>
        <input
          className="col-span-4 text-sm rounded-sm outline-none px-2 py-1 focus:border-blue-400 focus:border-[2px] transition-all duration-300 ease-in-out "
          id="picture"
          type="file"
          accept="image/*"
        />
      </FormRow>

      <Button>Create Product</Button>
    </form>
  );
}

export default CreateProductTable;
