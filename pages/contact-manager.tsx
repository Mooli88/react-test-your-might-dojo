import type { NextPage } from 'next'
import ContactManager from '../app/dojo/Reconciliation/ContactManager/ContactManager'
import contactData from '../app/dojo/Reconciliation/ContactManager/contacts.json'
import styles from '../styles/Home.module.css'

const ContactManagerPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ContactManager contacts={contactData} />
      </main>
    </div>
  )
}

export default ContactManagerPage
