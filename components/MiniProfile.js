import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://media.licdn.com/dms/image/D4D03AQHVEtsCODP-QQ/profile-displayphoto-shrink_800_800/0/1673711126433?e=2147483647&v=beta&t=zvyJRW9Z7JLgdxY98qiv6CG8ozrROcBGjrJGvua26Hc"
        alt="user-image"
      ></img>

      <div className="flex-1 ml-4">
        <h2 className="font-bold">Sara C</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
