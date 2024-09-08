import React from 'react';

export const ChatItem = ({ data, isLeft }: ChatItemProps) => {
    return (
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg space-y-2 text-white max-w-80 ${isLeft ? 'bg-green-800' : 'bg-blue-600 text-white'}`}
          >
            {item.message}
          </div>
        ))}
      </div>
    );
  };
