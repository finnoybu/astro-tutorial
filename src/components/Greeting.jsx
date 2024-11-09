import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const greeting = useState(
    messages[Math.floor(Math.random() * messages.length)]
  );

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      {/* <button onClick={() => setGreeting(randomMessage())}>New Greeting</button> */}
    </div>
  );
}
