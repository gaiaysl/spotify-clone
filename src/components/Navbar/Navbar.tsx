import Auth from "./Auth";
import Navigation from "./Navigation";

export default function Navbar() {
    return (
      <div className="flex flex-row justify-between  mx-6">
        <Navigation />
        <Auth />
      </div>
    );
  }