'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { Client, IMessage } from '@stomp/stompjs';

type WebSocketContextType = {
  stompClient: Client | null;
  isConnected: boolean;
  sendMessage: (chatId: number, senderId: number, content: string) => void;
  subscribeToChat: (chatId: number, onMessage: (msg: string) => void) => void;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

export const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: 'ws://localhost:8080/chat',
      reconnectDelay: 5000,
      onConnect: () => {
        setIsConnected(true);
        console.log('[WebSocket] Connected to broker');
      },
      onDisconnect: () => {
        setIsConnected(false);
        console.log('[WebSocket] Disconnected');
      },
      onStompError: (frame) => {
        console.error('[WebSocket] Error:', frame.headers['message'], frame.body);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
      clientRef.current = null;
    };
  }, []);

  const sendMessage = (chatId: number, senderId: number, content: string) => {
    if (!clientRef.current || !isConnected) return;

    clientRef.current.publish({
      destination: '/app/chat.sendMessage',
      body: JSON.stringify({ chatId, senderId, content }),
    });
  };

  const subscribeToChat = (
    chatId: number,
    onMessage: (msg: string) => void
  ) => {
    if (!clientRef.current || !isConnected) return;

    clientRef.current.subscribe(`/topic/chat/${chatId}`, (message: IMessage) => {
      onMessage(message.body);
    });
  };

  return (
    <WebSocketContext.Provider
      value={{ stompClient: clientRef.current, isConnected, sendMessage, subscribeToChat }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const ctx = useContext(WebSocketContext);
  if (!ctx) throw new Error('useWebSocket must be used within a WebSocketProvider');
  return ctx;
};
