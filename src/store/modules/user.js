// src/store/modules/auth.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        currentUserName: '',
        chatGroups: [
            {
                name: 'Coding Pals',
                createdAt:'4Feb2022'
            },
            {
                name: 'Scouting',
                createdAt: '4Feb2022'
            },
            {
                name: 'Sports',
                createdAt: '4Feb2022'
            }
        ],
        allGroupChats:{
            'Coding Pals': [
                {
                    userName: 'JJ',
                    messages: [
                        {
                            content: 'Message Display',
                            createdAt: '12:23AM'
                        },
                        {
                            content: 'Neque sagittis at ut consequat dolor odio penatibus lacus vel.',
                            createdAt: '12:23AM'
                        }
                    ]
                },
                {
                    userName: 'Oh',
                    messages: [
                        {
                            content: 'Viverra arcu fusce suspendisse tortor. Euismod lorem sed libero gravida.',
                            createdAt: '12:23AM'
                        },
                        {
                            content: 'Amet, in gravida aliquam duis maecenas',
                            createdAt: '12:23AM'
                        }
                    ]
                },
                    
            ],
            'Scouting': [
                {
                    userName: 'JV',
                    messages: [
                        {
                            content: 'Message Display',
                            createdAt: '12:23AM'
                        },
                        {
                            content: 'Neque sagittis at ut consequat dolor odio penatibus lacus vel.',
                            createdAt: '12:23AM'
                        }
                    ]
                },
                {
                    userName: 'Oh',
                    messages: [
                        {
                            content: 'Viverra arcu fusce suspendisse tortor. Euismod lorem sed libero gravida.',
                            createdAt: '12:23AM'
                        },
                        {
                            content: 'Amet, in gravida aliquam duis maecenas',
                            createdAt: '12:23AM'
                        }
                    ]
                },

            ],
            'Sports': [
                {
                    userName: 'HI',
                    messages: [
                        {
                            content: 'Message Display',
                            createdAt: '12:23AM'
                        },
                        {
                            content: 'Neque sagittis at ut consequat dolor odio penatibus lacus vel.',
                            createdAt: '12:23AM'
                        }
                    ]
                },
                {
                    userName: 'Oh',
                    messages: [
                        {
                            content: 'Viverra arcu fusce suspendisse tortor. Euismod lorem sed libero gravida.',
                            createdAt: '12:23AM'
                        },
                        {
                            content: 'Amet, in gravida aliquam duis maecenas',
                            createdAt: '12:23AM'
                        }
                    ]
                },

            ]
        },
        selectedGroupChat: [],
        selectedChat: '',
        filteredChatGroups: []
    }),
    actions: {
        updateChatGroups(name) {
           let obj = {
            name,
            createdAt: this.formatDate()
           }
           this.chatGroups = [obj, ...this.chatGroups];
            this.allGroupChats[name] = [];
            this.selectedChat = name;
        },
        updateMessages(msgOb){
            const lastGroupMessageObj = this.selectedGroupChat[this.selectedGroupChat.length - 1];
            const lastMessageInGroupBy = lastGroupMessageObj?.userName || '';
            if (lastMessageInGroupBy === this.currentUserName) {
                lastGroupMessageObj.messages = [...lastGroupMessageObj.messages, msgOb]
            }else{
                const newMsgObj = {
                    userName: this.currentUserName,
                    messages: [msgOb]
                }
                this.allGroupChats[this.selectedChat] = [...this.allGroupChats[this.selectedChat], newMsgObj]
            }
        },
        filterChatGroupData(){
            this.selectedGroupChat = this.allGroupChats[this.selectedChat]
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
