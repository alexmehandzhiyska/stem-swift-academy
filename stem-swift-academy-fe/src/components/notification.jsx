import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export const errorNotification = (title = 'Error!') => {
  MySwal.fire({
    icon: 'error',
    title: <p>{title}</p>,
    didOpen: () => {
      MySwal.clickConfirm()
    }
  }).then(() => MySwal.fire(title, '', 'error'));
}

export const successNotification = (title = 'Success!') => {
  MySwal.fire({
    icon: 'success',
    title: <p>{title}</p>,
    didOpen: () => {
      MySwal.clickConfirm()
    }
  }).then(() => MySwal.fire(title, '', 'success'));
}

export const deleteConfirmNotification = async (title = 'Are you sure?') => {
  const result = await MySwal.fire({
    title: <p>{title}</p>,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });
  return result.isConfirmed;
}

export const saveConfirmNotification = async (title = 'Are you sure?') => {
  const result = await MySwal.fire({
    title: <p>{title}</p>,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Save',
    cancelButtonText: 'Don\'t save'
  });
  return result.isConfirmed;
}