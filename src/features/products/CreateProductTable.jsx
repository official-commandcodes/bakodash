import { useFormik } from 'formik';

import { useCreateProduct } from './useCreateProduct';

import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import Checkbox from '../../ui/Checkbox';
import InputFile from '../../ui/InputFile';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import useEditProduct from './useEditProduct';

function CreateProductTable({ onCloseModal, product, id }) {
  const { isCreating, createProduct } = useCreateProduct();
  const { isEditing, editProduct } = useEditProduct();

  const editValue = Boolean(product);

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      return {
        ...errors,
        title: 'Title must be provided!',
      };
    }

    if (!values.color) {
      return {
        ...errors,
        color: 'Color must be provided!',
      };
    }

    if (!values.price) {
      return {
        ...errors,
        price: 'Price must be provided!',
      };
    }

    if (!values.company) {
      return {
        ...errors,
        company: 'Company must be provided!',
      };
    }

    if (!values.image) {
      return {
        ...errors,
        image: 'Image must be provided!',
      };
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: product?.title || '',
      color: product?.color || '',
      price: product?.price || '',
      company: product?.company || '',
      availability: product?.availability || false,
      image: product?.image || '',
    },
    onSubmit: (values, { resetForm }) => {
      if (!editValue) {
        createProduct(values, {
          onSuccess: () => {
            onCloseModal();
          },
          onSettled: () => {
            resetForm();
          },
        });
      }

      if (editValue) {
        editProduct(
          { values, id },
          {
            onSuccess: () => {
              onCloseModal();
            },

            onSettled: () => {
              resetForm();
            },
          }
        );
      }
    },

    validate,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2 className="text-2xl font-medium mb-5">Add new Product</h2>

      <FormRow label="Title" error={formik.errors.title}>
        <Input
          id="title"
          name="title"
          disabled={isCreating || isEditing}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </FormRow>

      <FormRow label="Color" error={formik.errors.color}>
        <Input
          id="color"
          name="color"
          disabled={isCreating || isEditing}
          onChange={formik.handleChange}
          value={formik.values.color}
        />
      </FormRow>

      <FormRow label="Price" error={formik.errors.price}>
        <Input
          id="price"
          name="price"
          disabled={isCreating || isEditing}
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </FormRow>

      <FormRow label="Company" error={formik.errors.company}>
        <Input
          disabled={isCreating}
          id="company"
          name="company"
          onChange={formik.handleChange}
          value={formik.values.company}
        />
      </FormRow>

      <FormRow label="Image" error={formik.errors.image}>
        <InputFile
          id="picture"
          type="file"
          accept="image/*"
          name="picture"
          disabled={isCreating || isEditing}
          onChange={(e) => {
            formik.setFieldValue('image', e.target.files[0]);
          }}
        />
      </FormRow>

      <FormRow label="Availability">
        <Checkbox
          disabled={isCreating || isEditing}
          id="availability"
          name="availability"
          onChange={formik.handleChange}
          value={formik.values.availability}
        />
      </FormRow>

      <Button disabled={isCreating || isEditing} type="submit">
        Add Product
      </Button>
    </Form>
  );
}

export default CreateProductTable;
