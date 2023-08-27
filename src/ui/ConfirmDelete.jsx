import { useDeleteProduct } from '../features/products/useDeleteProduct';
import Button from './Button';

function ConfirmDelete({ title, id, onCloseModal }) {
  const { isDeleting, deleteProduct } = useDeleteProduct();

  function handleDelete() {
    deleteProduct(id, {
      onSuccess: () => {
        onCloseModal();
      },
    });
  }

  return (
    <div className="">
      <p className="text-xs text-center">
        Did you really want to delete{' '}
        <span className="text-red-900 font-bold underline">
          {title}
        </span>{' '}
        from products?
      </p>
      <div className="flex justify-between pt-5">
        <Button
          type="cool"
          onClick={onCloseModal}
          disabled={isDeleting}
        >
          Cancel
        </Button>
        <Button
          buttonType="danger"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
