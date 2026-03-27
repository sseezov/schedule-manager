import CrudModal from '../../../components/ui/CrudModal'

export default function TeachersCrudModal() {
  const formFields = [
    { text: 'ФИО', type: 'text', id: 'teachers-form-fio' },
    { text: 'Сокращение', type: 'text', id: 'teachers-form-abbreviation' },
    { text: 'Должность', type: 'text', id: 'teachers-form-position' },
  ]
  const onSubmit = (e) => {
    console.log(1, e)
  }

  return `${CrudModal('modal-teachers', formFields, onSubmit)}`
}
