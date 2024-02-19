import "./globals.css";
import TransitionProvide from "../components/transitionProvider"


export const metadata = {
    title: "Tanmay Rane",
    description: "This is an portfolio  website of Tanmay Rane, which showcase  his work and learning in  the field of web development.",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="">
  
          <TransitionProvide>
              {children}
          </TransitionProvide>
  
        </body>
      </html>
    );
  }
  