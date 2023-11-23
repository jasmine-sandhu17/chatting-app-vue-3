// src/store/modules/auth.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        currentUserName: 'JV',
        chatGroups: [],
        messages:{
            He: [
                    {
                        userName: 'JJ',
                        groupName: 'Hello',
                        messages: [
                            {
                                content: 'Hello',
                                createdAt: '12:23AM'
                            },
                            {
                                content: 'How are you doing',
                                createdAt: '12:23AM'
                            }
                        ]
                    },
                    {
                        userName: 'Oh',
                        groupName: 'Hello',
                        messages: [
                            {
                                content: 'Hello',
                                createdAt: '12:23AM'
                            },
                            {
                                content: 'How are you doing',
                                createdAt: '12:23AM'
                            }
                        ]
                    },
                    {
                        userName: 'JJ',
                        groupName: 'Hello',
                        messages: [
                            {
                                content: 'Hello',
                                createdAt: '12:23AM'
                            },
                            {
                                content: 'How are you doing',
                                createdAt: '12:23AM'
                            }
                        ]
                    },
                ]
        }
    }),
    actions: {
        updateChatGroups(name) {
           let obj = {
            name,
            createdAt: this.formatDate()
           }
           this.chatGroups = [obj, ...this.chatGroups]
        },
        updateMessages(msgOb){
            const lastGroupMessageObj = this.messages.He[this.messages.He.length - 1]
            const lastMessageBy = lastGroupMessageObj.userName;
            if (lastMessageBy === this.currentUserName) {
                lastGroupMessageObj.messages = [...lastGroupMessageObj.messages, msgOb]
            }else{
                const newMsgObj = {
                    userName: this.currentUserName,
                        groupName: 'Hello',
                    messages: [msgOb]
                }
                this.messages.He = [...this.messages.He, newMsgObj]
            }
        },
        formatDate(){
            const months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = months[currentDate.getMonth()];
            const year = currentDate.getFullYear();
            const formattedDate = `${day}${month}${year}`;
            return formattedDate
        }
    },
});
