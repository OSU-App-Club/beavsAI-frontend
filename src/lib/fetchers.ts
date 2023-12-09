import axios, { AxiosRequestConfig } from "axios";
import { Message } from "../types";

const BASE_URL = "http://localhost:8000";
const AI_URL = "http://localhost:8080";

const createAxiosConfig = (token: string): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: false,
});

/*
 * In the future, it will make the most sense
 * to have the token be passed in as a parameter and
 * get the userID using that. For now, we'll just
 * pass in the userID as a parameter.
 */

export const createChat = async (
  userId: string,
  token: string,
  courseId: string,
) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/chat`,
      { userId, courseId },
      createAxiosConfig(token),
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
      `${BASE_URL}/chat/${userId}/messages/${messageId}`,
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addMessageToChat = async (
  userId: string,
  chatId: string,
  message: Message,
  token: string,
  courseId: string,
) => {
  try {
    console.log("addMessageToChat", message);
    const { data } = await axios.post(
      `${BASE_URL}/chat/${userId}/chats/${chatId}/messages`,
      { message, courseId },
      createAxiosConfig(token),
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
      createAxiosConfig(token),
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
  token: string,
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/chats/${chatId}`,
      createAxiosConfig(token),
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
  token: string,
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/chat/${userId}/chats/${chatId}/messages`,
      createAxiosConfig(token),
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
  token: string,
) => {
  try {
    const { data } = await axios.delete(
      `${BASE_URL}/chat/${userId}/chats/${chatId}/messages/${messageId}`,
      createAxiosConfig(token),
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
  token: string,
) => {
  try {
    await axios.delete(
      `${BASE_URL}/chat/${userId}/chats/${chatId}`,
      createAxiosConfig(token),
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
      createAxiosConfig(token),
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatIdForCourse = async (
  userId: string,
  courseId: string,
  token: string,
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/courses/${userId}/chat/${courseId}`,
      createAxiosConfig(token),
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCourseById = async (
  userId: string,
  chatId: string,
  token: string,
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/courses/${userId}/chats/${chatId}`,
      createAxiosConfig(token),
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loadDocument = async (crn: string) => {
  const requestData = {
    class_name: `${crn}`,
  };
  if (crn === "") {
    return;
  }
  try {
    const { data } = await axios.post(`${AI_URL}/load_documents`, requestData, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
