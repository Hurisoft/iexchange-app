"use client"

import { Avatar } from "@/assets";
import { JSX, Key } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Image from 'next/image'

const ChatWindow = ({ messages }: { messages: any }) => {
    return (
        <div className="flex flex-col flex-grow bg-gray-100 rounded-lg shadow-md ">
            <div className="w-full border-b border-gray-400 p-4 bg-gray-200 rounded-tr-lg rounded-tl-lg">
                <div className="flex flex-row items-center space-x-2">
                    <Image src={Avatar} alt="avatar" className="bg-black rounded-full" />
                    <span className="text-gray-400 text-sm">Crypto.Gh</span>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto h-full p-4">
                {messages.map((msg: JSX.IntrinsicAttributes & { user: any; text: any; }, index: Key | null | undefined) => (
                    <Message key={index} {...msg} />
                ))}
            </div>
            <MessageInput />
        </div>
    );
};

export default ChatWindow;
