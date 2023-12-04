import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8000"; // Adjust the base URL according to your server configuration

const createAxiosConfig = (token: string): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const createChat = async (userId: string, token: string) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/chat`,
      { userId },
      createAxiosConfig(token)
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAIResponse = async (userId: string, messageId: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/messages/${messageId}`
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const addMessageToChat = async (
  userId: string,
  chatId: string,
  message: string,
  token: string
) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/chat/${userId}/chats/${chatId}/messages`,
      { message },
      createAxiosConfig(token)
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllUserMessages = async (userId: string, token: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/messages`,
      createAxiosConfig(token)
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatById = async (
  userId: string,
  chatId: string,
  token: string
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/chats/${chatId}`,
      createAxiosConfig(token)
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllMessagesForChat = async (
  userId: string,
  chatId: string,
  token: string
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/chats/${chatId}/messages`,
      createAxiosConfig(token)
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteMessage = async (
  userId: string,
  chatId: string,
  messageId: string,
  token: string
) => {
  try {
    const { data } = await axios.delete(
      `${BASE_URL}/chat/${userId}/chats/${chatId}/messages/${messageId}`,
      createAxiosConfig(token)
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteChat = async (
  userId: string,
  chatId: string,
  token: string
) => {
  try {
    await axios.delete(
      `${BASE_URL}/chat/${userId}/chats/${chatId}`,
      createAxiosConfig(token)
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatHistory = async (userId: string, token: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/chats`,
      createAxiosConfig(token)
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
