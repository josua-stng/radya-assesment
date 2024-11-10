'use client';
import { Input } from '@/components/ui/input';
import useNewsLetter from './NewsLetter.hooks';
import { Button } from '@/components/ui/button';

export default function NewsLetter() {
  const {
    changeEventEmail,
    email,
    message,
    changeEventMessage,
    handleSubmitEvent,
  } = useNewsLetter();

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md mt-28 mb-20 space-y-7">
      <h1 className="font-bold text-xl italic mb-3 text-center">
        Join Our Newsletter
      </h1>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={changeEventEmail}
        className="w-full p-2 border border-gray-300 rounded mb-4 mt-2"
      />
      <Input
        placeholder="Your message"
        value={message}
        onChange={changeEventMessage}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <Button
        onClick={handleSubmitEvent}
        className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Submit
      </Button>
    </div>
  );
}
