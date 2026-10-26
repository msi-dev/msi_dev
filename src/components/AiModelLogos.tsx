import React from 'react';

interface LogoProps {
  className?: string;
}

export const ChatGptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 10.3c-.2-1.5-1.1-2.8-2.4-3.5-.4-.2-.8-.4-1.2-.5-.3-.7-.7-1.4-1.3-1.9-1.3-1.2-3.1-1.6-4.8-1.2-.5.1-.9.3-1.4.6-1.1-.9-2.6-1.3-4-.9-1.7.4-3.1 1.7-3.7 3.3-.2.5-.3 1-.3 1.5-1.2.6-2.1 1.7-2.4 3-.5 1.7-.1 3.5 1 4.9.4.5.9.9 1.4 1.2.1.8.4 1.5.9 2.1 1.1 1.4 2.8 2.1 4.6 2 1.1-.1 2.2-.6 3-1.4.6.4 1.3.7 2 .8 1.8.3 3.6-.5 4.6-2 .4-.6.6-1.3.7-2 1.3-.7 2.2-2 2.3-3.5.2-1.1-.1-2.1-.6-3.1z"
      fill="#10A37F"
    />
    <path
      d="M12 4.5c.3 0 .7.1 1 .2l3.4 2c.2.1.4.3.5.5s.1.5 0 .8l-2.4 4.2c-.1.2-.3.4-.6.4-.1 0-.3 0-.4-.1L10 10.4V6c0-.4.2-.8.5-1 .4-.3.9-.5 1.5-.5z"
      fill="#ffffff"
    />
    <path
      d="M5.5 8.8c.2-.3.5-.5.8-.6l3.7-1.3c.3-.1.6 0 .8.1s.4.4.4.7v4.8c0 .3-.1.5-.3.7-.1.1-.3.2-.5.2L6.1 11.5c-.3-.2-.5-.5-.6-.9s0-.7.2-1l-.2-.8z"
      fill="#ffffff"
    />
  </svg>
);

export const AiStudioLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"
      fill="url(#ai-studio-grad)"
    />
    <defs>
      <linearGradient id="ai-studio-grad" x1="3" y1="2" x2="21" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="0.5" stopColor="#4285F4" />
        <stop offset="1" stopColor="#9C27B0" />
      </linearGradient>
    </defs>
  </svg>
);

export const GoogleCloudLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      fill="#4285F4"
    />
    <path
      d="M19 19H6c-2.76 0-5-2.24-5-5 0-2.5 1.83-4.57 4.24-4.92l.85-.12.42-.76C7.54 6.3 9.63 5 12 5c2.97 0 5.48 2.03 6.17 4.95l.23.98.99.14C20.98 11.3 22 12.54 22 14c0 2.21-1.79 4-4 4l1 1z"
      fill="#34A853"
      opacity="0.3"
    />
  </svg>
);

export const DeepSeekLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1E50FF" />
    <path
      d="M6 14C7.5 11 11 9 16 10C18 10.4 19 11.5 19 13C19 15 17 16.5 14 16.5C10 16.5 7.5 15.5 6 14Z"
      fill="#FFFFFF"
    />
    <circle cx="15.5" cy="12" r="1.5" fill="#1E50FF" />
  </svg>
);

export const OpenRouterLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#6366F1" />
    <path
      d="M12 6L17.5 9.2V15.8L12 19L6.5 15.8V9.2L12 6Z"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12.5" r="2" fill="#FFFFFF" />
  </svg>
);

export const MetaLlamaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#0668E1" />
    <path
      d="M8.5 7.5C10 7.5 11 8.5 11.5 10C12 8.5 13 7.5 14.5 7.5C16.5 7.5 18 9.5 18 12C18 14.5 16 17 14 17C12.5 17 11.5 15.5 11.5 14C11.5 12.5 10.5 11 9.5 11C8.5 11 7.5 12 7.5 13.5C7.5 15 8.5 16.5 10 16.5"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GoogleGeminiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
      fill="url(#gemini-grad)"
    />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1BA1E2" />
        <stop offset="0.5" stopColor="#9C27B0" />
        <stop offset="1" stopColor="#FF7043" />
      </linearGradient>
    </defs>
  </svg>
);

export const AiLogo: React.FC<{ logoType: string; className?: string }> = ({ logoType, className }) => {
  switch (logoType) {
    case 'chatgpt':
      return <ChatGptLogo className={className} />;
    case 'aistudio':
      return <AiStudioLogo className={className} />;
    case 'cloud':
      return <GoogleCloudLogo className={className} />;
    case 'deepseek':
      return <DeepSeekLogo className={className} />;
    case 'openrouter':
      return <OpenRouterLogo className={className} />;
    case 'llama':
      return <MetaLlamaLogo className={className} />;
    case 'gemini':
      return <GoogleGeminiLogo className={className} />;
    default:
      return <GoogleGeminiLogo className={className} />;
  }
};
