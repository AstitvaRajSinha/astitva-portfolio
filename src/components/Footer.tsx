import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" left-0 w-full text-center p-4 text-sm bg-black border-t shadow-md opacity-80">
      !made with 💚 by  
      <Link 
        href="https://www.linkedin.com/in/astitvarajsinha/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white font-bold no-underline ml-1"
      >
        Astitva
      </Link> 
      
    </footer>
  );
};

export default Footer;
