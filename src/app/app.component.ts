import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularchat';

  ngOnInit() {
    $('#action_menu_btn').click(() => {
      $('.action_menu').toggle();
    });

    // Get references to the contacts card and chat card
    const contactsCard = document.getElementById('contactsCard');
    const chatCard = document.getElementById('chatCard');
    console.log(contactsCard);
    if (contactsCard && chatCard) {
      // Get all the person elements in the contacts list
      const personElements = contactsCard.getElementsByClassName('app-person');

      // Attach click event listener to each person element
      Array.from(personElements).forEach(personElement => {
        personElement.addEventListener('click', () => {
          // Remove "active" class from all person elements
          Array.from(personElements).forEach(element => {
            element.removeAttribute('selected');
          });

          // Add "active" class to the clicked person element
          personElement.setAttribute('selected', 'active');

          // Get the name of the clicked person
          const personName = personElement.getAttribute('name');

          // Update the chat card with the selected person's messages
          if(personName){
            updateChatCard(personName);
          }
        });
      });

      // Function to update the chat card with the selected person's messages
      // ...

// Function to update the chat card with the selected person's messages
// ...

// Function to update the chat card with the selected person's messages
function updateChatCard(personName: string) {
  // Clear the current messages in the chat card
  if (chatCard){
    chatCard.innerHTML = '';

  // Create a new message element with the person's name
  const messageElement = document.createElement('app-messages');
  messageElement.setAttribute('sended', 'd-flex justify-content-start mb-4');
  messageElement.setAttribute('msg', 'Hi, how are you ' + personName + '?');
  messageElement.setAttribute('time', '8:40 AM, Today');
  messageElement.setAttribute('msgbox', 'msg_cotainer');

  // Append the message element to the chat card
  chatCard.appendChild(messageElement);
  }

}

// ...


// ...

    }
  }
}
