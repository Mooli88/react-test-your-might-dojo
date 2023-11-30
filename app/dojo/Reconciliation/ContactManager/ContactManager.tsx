import { useState } from 'react'

// ContactManager is a component that displays a list of contacts and allows the user to select one of them to display their email address.
// The code below is buggy.
// When you click on a contact name, the wrong email address is displayed.
// Fix it so that it works as expected.
// You can run the tests but output might be a bit misleading.

type Contact = {
  id: number
  name: string
  email: string
}

type Props = {
  contacts: Contact[]
  selectedId: number
  onSelect: (id: number) => void
}

const ContactManager = ({ contacts }: Pick<Props, 'contacts'>) => {
  const [selectedId, setSelectedId] = useState(0)
  const selectedContact = contacts.find((c) => c.id === selectedId)!

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <hr />
      <EditContact initialData={selectedContact} />
    </div>
  )
}

const ContactList = ({ contacts, selectedId, onSelect }: Props) => {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact.id)
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

const EditContact = ({ initialData }: { initialData: Contact }) => {
  return (
    <section>
      <label>
        Email: <input type='email' defaultValue={initialData.email} />
      </label>
    </section>
  )
}

export default ContactManager
