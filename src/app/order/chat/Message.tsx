"use client"

const Message = ({ user, text }:{user:any, text:any}) => {
    return (
      <div className={`flex ${user === 'me' ? 'justify-end' : 'justify-start'}`}>
        <div className="p-2 m-2 bg-white rounded-lg shadow">
          <p className="text-sm text-black">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Message;
  