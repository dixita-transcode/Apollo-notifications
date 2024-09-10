document.addEventListener('DOMContentLoaded', function () {
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
            document.head.appendChild(script);
        });
    }

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/5.0.11/signalr.min.js').then(() => {
        const token = localStorage.getItem('token') || "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2RldmVsb3BtZW50LmFwb2xsby5idXNpbmVzcyIsInN1YiI6InM2QmhkUmtxdDMiLCJhdWQiOiJodHRwczovL2RldmFwaS5hcG9sbG8uYnVzaW5lc3MiLCJqdGkiOiIzZTdlMDJiOS05OWJlLTQ5NTktODA2YS1lYzI0MDM4ZTcwM2EiLCJleHAiOjE3MjA1OTI3MDYsImlhdCI6MTcyMDQxOTkwNiwic2lkIjoiNTEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkFwb2xsbyB1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiaW5mb0BpbmNyZWF0aWUubmwifQ.CZoFccrC_eBIvc60zLk9cwokS29MI8KPYdfGrX7KKiw";
        // Define the SVG icon variables
        console.log(token, 'token');
        const userIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" color="#3A3A3A" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
    `;

        const documentIcon = `
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_159)">
                <path d="M9.33331 2V4.66667C9.33331 4.84348 9.40355 5.01305 9.52858 5.13807C9.6536 5.2631 9.82317 5.33333 9.99998 5.33333H12.6666" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.3333 14H4.66665C4.31302 14 3.97389 13.8595 3.72384 13.6095C3.47379 13.3594 3.33331 13.0203 3.33331 12.6667V3.33333C3.33331 2.97971 3.47379 2.64057 3.72384 2.39052C3.97389 2.14048 4.31302 2 4.66665 2H9.33331L12.6666 5.33333V12.6667C12.6666 13.0203 12.5262 13.3594 12.2761 13.6095C12.0261 13.8595 11.6869 14 11.3333 14Z" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 9.33333H6" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33602 7.44801C9.03435 7.34115 8.71145 7.30824 8.39443 7.35205C8.07741 7.39586 7.77553 7.51511 7.51415 7.69978C7.25277 7.88445 7.03953 8.12915 6.89233 8.41332C6.74513 8.69749 6.66827 9.01283 6.66821 9.33287C6.66816 9.6529 6.7449 9.96828 6.892 10.2525C7.0391 10.5367 7.25226 10.7815 7.51357 10.9663C7.77488 11.151 8.07672 11.2704 8.39373 11.3143C8.71073 11.3582 9.03365 11.3254 9.33535 11.2187" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1_159">
                    <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;

        const graduationIcon = `
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6668 6.00004L8.00016 3.33337L1.3335 6.00004L8.00016 8.66671L14.6668 6.00004ZM14.6668 6.00004V10" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 7.06665V10.6667C4 11.1971 4.42143 11.7058 5.17157 12.0809C5.92172 12.4559 6.93913 12.6667 8 12.6667C9.06087 12.6667 10.0783 12.4559 10.8284 12.0809C11.5786 11.7058 12 11.1971 12 10.6667V7.06665" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

        // Function to get the appropriate icon based on some condition
        function getIcon(type) {
            switch (type) {
                case 'user':
                    return userIcon;
                case 'document':
                    return documentIcon;
                case 'graduation':
                    return graduationIcon;
                default:
                    return userIcon; // Default icon
            }
        }

        // Select the .app-logo element
        const appLogo = document.querySelector('.app-logo');

        // Create the .topbar-container and .notification-section elements if they don't exist
        let topbarContainer = document.querySelector('.topbar-container');
        if (!topbarContainer) {
            topbarContainer = document.createElement('div');
            topbarContainer.classList.add('topbar-container');
            appLogo.appendChild(topbarContainer);
        }

        let notificationSection = document.querySelector('.notification-section');
        if (!notificationSection) {
            notificationSection = document.createElement('div');
            notificationSection.classList.add('notification-section');
            topbarContainer.appendChild(notificationSection);
        }

        // Append notification icon to the top bar
        const notificationIcon = document.createElement('div');
        notificationIcon.id = 'notification-icon';
        notificationIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" color="#0088CE" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bell">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>
        <span class="unread-count">0</span>
    `;
        notificationSection.appendChild(notificationIcon);

        // Create the dropdown structure
        const dropdown = document.createElement('div');
        dropdown.id = 'notification-dropdown';
        dropdown.classList.add('dropdown-content');
        dropdown.innerHTML = `
        <div class="dropdown-arrow"></div>
        <div class="dropdown-header">
            <span class="notification-title">Notificaties</span>
           <!-- <span class="unread-count">0</span>-->
        </div>
        <div class="dropdown-body">
            <!-- Messages will be appended here -->
        </div>
        <div class="dropdown-footer">
            <button class="read-more" style="display: none;"><span>Read More</span>  <div class="loader-container">
                <div class="loader"></div>
            </div></button>
        </div>
    `;
        notificationSection.appendChild(dropdown);

        const dropdownBody = dropdown.querySelector('.dropdown-body');
        const readMoreButton = dropdown.querySelector('.read-more');
        let isReadMoreClicked = false;
        let currentLimit = 10;
        let unreadMessagesCount = 0;
        let notificationsData = [];

        // Function to fetch notifications from the API
        function fetchNotifications(limit = 10) {
            const requestBody = {
                strEventTypes: "string",
                iLimit: 0,
                iLimit2: limit,
                iCMID: window.iCMID || 2,
                cmName: window.cmName || "Vincent Fabris - Apollo.courses Admin",
                iSiteID: window.iSiteID || 51,
                outputCasing: "pascal"
            };

            fetch('https://devapi.apollo.business/api/Common/GetAllNotifications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Add token to headers
                },
                body: JSON.stringify(requestBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data, 'data -2');
                    notificationsData = data.messages.filter(message => message.customerID !== window.CMID);
                    updateNotifications({ messages: notificationsData }, limit);
                    unreadMessagesCount = data.nrUnreadMessages;
                    updateUnreadCount(unreadMessagesCount); // Update unread count on load
                })
                .catch(error => console.error('Error fetching notifications:', error))
                .finally(() => {
                    hideLoader();
                });
        }

        // Function to create a message item element
        function createMessageItem(message, index) {
            const messageItem = document.createElement('div');
            messageItem.classList.add('message-item');
            messageItem.dataset.id = index;

            // Check if the message is read or unread
            if (message.isCalled === 1) {
                messageItem.classList.add('read');
            }

            // Parse the dateSet to get the time
            const messageTime = new Date(message.dateSet).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

            messageItem.innerHTML = `
                <div class="message-content">
                    <div class="indicator-container">
                        <div class="unread-indicator" style="display: ${message.isCalled === 1 ? 'none' : 'block'};"></div>
                    </div>
                    ${getIcon('user')} <!-- Assuming 'user' icon for now -->
                    <span class="text-start message-text">${message.text} <b>${message.customerName}</b></span>
                </div>
                <span class="message-time">${messageTime}</span>
            `;

            messageItem.addEventListener('click', function () {
                markAsRead(index, message);
            });

            return messageItem;
        }

        // Function to update the notifications in the dropdown
        function updateNotifications(data, limit) {
            dropdownBody.innerHTML = ''; // Clear existing notifications

            let unreadCount = 0;

            if (data.messages && data.messages.length > 0) {
                data.messages.forEach((message, i) => {
                    const messageItem = createMessageItem(message, i);
                    dropdownBody.appendChild(messageItem);

                    // Increment unread count if the message is unread
                    if (message.isCalled === 0) {
                        unreadCount += 1;
                    }
                });

                updateUnreadCount(unreadCount); // Update unread count

                // Show or hide "Read more" button based on the number of messages
                readMoreButton.style.display = data.messages.length >= limit ? 'inline-flex' : 'none';
            } else {
                updateUnreadCount(0); // No messages, set unread count to 0
                readMoreButton.style.display = 'none'; // Hide "Read more" button
            }
        }

        // Add the "Read more" button
        readMoreButton.addEventListener('click', function () {
            isReadMoreClicked = true;
            showLoader();
            currentLimit += 10; // Increment the limit by 10
            fetchNotifications(currentLimit); // Fetch more notifications with the updated limit
        });

        // Function to mark all notifications as read
        function markAllNotificationsAsRead() {
            const requestBody = {
                iCMID: window.iCMID || 2,
                CMName: window.cmName || "Vincent Fabris - Apollo.courses Admin",
                iSiteID: window.SiteID || 51,
                outputCasing: "pascal"
            };

            fetch('https://devapi.apollo.business/api/Common/MarkAllNotificationsAsRead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Add token to headers
                },
                body: JSON.stringify(requestBody)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.IsSuccess) {
                        updateUnreadCount(0);
                    } else {
                        console.error('Error marking all notifications as read:', data.message);
                    }
                })
                .catch(error => console.error('Error marking all notifications as read:', error));
        }

        // Event listener for expanding notifications
        notificationIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the click from propagating to the document
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 300); // Match the duration of the CSS transition
            } else {
                dropdown.style.display = 'block';
                setTimeout(() => {
                    dropdown.classList.add('show');
                }, 10); // Small delay to ensure display is set before adding class
                if (unreadMessagesCount > 0) {
                    markAllNotificationsAsRead(); // Call the API to mark all notifications as read if there are unread messages
                    updateUnreadCount(0); // Set unread count to 0
                }
            }
        });

        // Fetch unread messages count (dummy data for now)
        updateUnreadCount(0);

        // SignalR connection for real-time updates
        var connection = new signalR.HubConnectionBuilder()
            .withUrl("https://signalrdev.apollo.business/chatHub")
            .configureLogging(signalR.LogLevel.Information)
            .build();

        function AddConnectionToGroup() {
            connection.invoke("AddConnectionToGroup", window.SiteID.toString()).catch(function (err) {
                return console.error(err.toString());
            });
        }

        async function start() {
            try {
                console.log("Start connection Trying...!!");
                await connection.start();
                console.log("Connection Started successfully...!!");
                await AddConnectionToGroup();
                console.log("Connection Added to Group successfully...!!");
            } catch (err) {
                console.log(err.toString());
                setTimeout(() => start(), 5000);
            }
        }

        connection.onclose(async () => {
            await start();
        });

        // Start the connection.
        start();

        connection.on("ReceiveConversationsMessage", function (user, message) {
            // Log the entire user object to see its structure
            console.log("Received user object:", user);
            // Check if user.siteId exists before logging it
            const conversation = user.data.conversations[0] || {};

            // Add the new message to the global array
            const newMessage = {
                text: conversation.text || "No message text",
                customerName: user.customerName || "",
                dateSet: new Date().toISOString(),
                isCalled: conversation.isVisited || 0,
                eventID: conversation.eventId || "-",
                customerID: user.data.senderId.toString() || '0'
            };
            if (newMessage.customerID !== window.CMID) {
                notificationsData.unshift(newMessage);

                // Calculate the new unread messages count
                unreadMessagesCount = notificationsData.filter(msg => msg.isCalled === 0).length;
                updateUnreadCount(unreadMessagesCount);

                // Update the notifications in the dropdown
                updateNotifications({ messages: notificationsData }, currentLimit);
            }
        });

        function markAsRead(messageId, message) {
            // Update UI immediately
            const messageItem = document.querySelector(`.message-item[data-id='${messageId}']`);
            if (messageItem) {
                if (!messageItem.classList.contains('read')) {
                    messageItem.classList.add('read');
                    const unreadIndicator = messageItem.querySelector('.unread-indicator');
                    if (unreadIndicator) {
                        unreadIndicator.style.display = 'none';
                        const requestBody = {
                            iSiteID: window.SiteID || 51,
                            contactevent: {
                                eventID: message.eventID,
                                text: message.text,
                                isCalled: 1
                            }
                        };
                        fetch('https://devapi.apollo.business/api/Common/MarkNotificationAsRead', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}` // Add token to headers
                            },
                            body: JSON.stringify(requestBody)
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (!data) {
                                    console.error('Error marking notification as read:', data.message);
                                }
                            })
                            .catch(error => console.error('Error marking notification as read:', error));
                    }
                    const currentCount = parseInt(document.querySelector('.unread-count').innerText);
                    if (currentCount > 0) {
                        updateUnreadCount(currentCount - 1);
                    }
                }
            }
        }

        function showLoader() {
            readMoreButton.classList.add('loading');
            readMoreButton.classList.remove('show-text');
        }

        // Function to hide loader and show content
        function hideLoader() {
            readMoreButton.classList.remove('loading');
            if (isReadMoreClicked) {
                readMoreButton.classList.add('show-text');
                isReadMoreClicked = false;
            }
        }

        // Function to update the unread count
        function updateUnreadCount(count) {
            const unreadCountElements = document.querySelectorAll('.unread-count');
            unreadCountElements.forEach(element => {
                element.innerText = count;
                element.style.display = count > 0 ? 'flex' : 'none'; // Show only if count > 0
            });
        }

        // Event listener for closing the dropdown when clicking outside
        window.addEventListener('click', function (event) {
            if (!event.target.closest('#notification-dropdown, #notification-icon')) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                    setTimeout(() => {
                        dropdown.style.display = 'none';
                    }, 300); // Match the duration of the CSS transition
                }
            }
        });

        // Prevent event propagation to window when clicking inside the dropdown
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
        });

        // Fetch notifications on page load
        fetchNotifications();
    });
});