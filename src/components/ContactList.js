import React from "react";

class ContactList extends React.Component {
  render() {
    console.log("This.props: ", this.props);
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.name} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button className="contact-remove">Remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ContactList;
