'use client';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ChangeEvent, MouseEvent, useState } from 'react';

export default function useNewsLetter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const changeEventEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changeEventMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitEvent = (e: MouseEvent<HTMLButtonElement>) => {
    if (!email || !message) {
      toast({
        className: cn(
          'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
        ),
        title: 'Uh oh! Something went wrong.',
        description: 'News Letter Email or Message cant empty ',
      });
      return;
    }
    e.preventDefault();
    setEmail('');
    setMessage('');
    toast({
      className: cn(
        'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
      ),
      title: 'News Letter',
      description: 'News Letter Send',
    });
  };

  return {
    email,
    message,
    changeEventEmail,
    changeEventMessage,
    handleSubmitEvent,
  };
}
