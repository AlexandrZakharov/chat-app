const UserAPI = {
  async signup({ firstName, lastName, email, password }) {
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });
    return await res.json();
  },
  async signin({ email, password }) {
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return await res.json();
  },
  async getUser(userId) {
    const res = await fetch(`/user?userId=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    return await res.json();
  },
  async getConversations(userId) {
    const res = await fetch(`/conversation/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async createConversation({ senderId, recieverId }) {
    const res = await fetch("/conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId,
        recieverId,
      }),
    });
    return await res.json();
  },
  async getMessages(convId) {
    const res = await fetch(`/messages/${convId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },
  async addMessage(message) {
    const res = await fetch(`/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message)
    });
    return await res.json();
  },
};

export default UserAPI;
