export function timeAgo(timestampStr: string): string {
  
    const timestamp = new Date(timestampStr);
  
    
    const now = new Date();
    const delta = now.getTime() - timestamp.getTime();
  
    
    if (delta > 86400000) { // 1 day in milliseconds
      const days = Math.floor(delta / 86400000);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (delta >= 3600000) { // 1 hour in milliseconds
      const hours = Math.floor(delta / 3600000);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (delta >= 60000) { // 1 minute in milliseconds
      const minutes = Math.floor(delta / 60000);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'just now';
    }
  }