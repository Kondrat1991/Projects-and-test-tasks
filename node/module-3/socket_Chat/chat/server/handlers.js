function handleRegister(userName, callback) {
    if (!clientManager.isUserAvailable(userName))
        return callback('user is not available');

    const user = clientManager.getUserByName(userName);
    clientManager.registerClient(client, user);

    return callback(null, user)
}

function handleEvent(chatroomName, createEntry) {
    return ensureValidChatroomAndUserSelected(chatroomName)
        .then(function ({ chatroom, user }) {
            // append event to chat history
            const entry = { user, ...createEntry() };
            chatroom.addEntry(entry);

            // notify other clients in chatroom
            chatroom.broadcastMessage({ chat: chatroomName, ...entry });
            return chatroom
        })
}

