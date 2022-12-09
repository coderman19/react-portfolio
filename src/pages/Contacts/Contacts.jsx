import React from 'react'

export default function Contacts() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-2">Contacts</h1>
            <ul className="content__list">
              <li className="content__list-item">
                <h2 className="title">Location</h2>
                <p><a href="!#">Moscow / Russia</a></p>
              </li>

              <li className="content__list-item">
                <h2 className="title">Telegram / WhatsApp</h2>
                <p><a href="tel:+79269690922">+7 (926) 969 09 22</a></p>
              </li>

              <li className="content__list-item">
                <h2 className="title">E-mail</h2>
                <p><a href="mailto:greenman966@gmail.com">greenman966@gmail.com</a></p>
              </li>   
            </ul>
        </div> 
      </main>
    </>
  )
}
