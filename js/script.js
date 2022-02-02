console.log('JS ok');

dayjs.extend(dayjs_plugin_customParseFormat);

const chatList = new Vue({
     el: '#wa-box',
     data: {
       myLetterSearch: '',
       newMessage: '',
       currentOpenChat: 0,
      user: {
        name: 'Mariano Maselli',
        avatar: '_2'
      },
      contacts: [
        {
         
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_6',
          visible: false,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },
      ],
      },
      methods: {
        isActive(index){
          return index === this.currentOpenChat;
        },
        getCurrentChatUser(index){
          this.currentOpenChat = index;
          console.log(this.currentOpenChat)
         
        },
        isVisible(index){
          console.log(this.contacts[index].visible)
          return this.contacts[index].visible;
        },
        // toggleBGC(index){
        //   this.contacts[index].visible = !this.contacts[index].visible;
          
        // },
        sentOrReceived(index){
          const currentIndex = this.currentOpenChat;
          const status = this.contacts[currentIndex].messages[index].status;
          console.log(status)
          console.log(this.currentOpenChat)
          if (status === 'sent'){
            return true
          } else {
            return false
          }
        },
        getMyMessageInfo(){
          let myReplyText = this.newMessage.trim();
          const currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
          const myReply = { 
            date: currentDate,
            text: myReplyText,
            status: 'sent'
          };
          if(myReplyText){
            
            this.contacts[this.currentOpenChat].messages.push(myReply);
          }
          this.newMessage = '';
        },
        generateAnswer(){
          const myTimeout = setTimeout(() => {
            let computerReplyText = 'ok';
          const currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
          const computerReply = { 
            date: currentDate,
            text: computerReplyText,
            status: 'received'
          };
         
          
          return this.contacts[this.currentOpenChat].messages.push(computerReply);
          
          }, 1000);
        },
        searchLetter(){
          const myArray = Array.from(this.myLetterSearch);
          console.log(myArray)

          // se è vuoto metto a tutti visible = true
          console.log(this.contacts.visible);
          if (myArray === []){
            this.contacts.visible = true;
            console.log(this.contacts.visible); 


          }else {

            for (let i = 0; i < this.contacts.length; i++){
              
              const contactsArray = Array.from(this.contacts[i].name)
              console.log(contactsArray);
              for (let j = 0; j < myArray.length; j++){
                
  
                if (contactsArray[j] === myArray[j]){
                  this.contacts[i].visible = true;
                } else{
                  this.contacts[i].visible = false;
                } 
             
            }
          }


          

          this.myLetterSearch = '';
          



          }
        }
        

      }
})