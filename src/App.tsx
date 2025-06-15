import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";

const App = () => {
  const [userName, setUserName] = useState("quincylarson");
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-20">
      {/* Hero Section */}
      <section className="mb-12 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          Search GitHub User Explorer
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground mb-2">
          Effortlessly search and visualize GitHub user profiles, repositories,
          and language stats with interactive charts.
          <br className="hidden sm:block" />
          Powered by GraphQL, Apollo Client, and a modern UI for a seamless
          developer experience.
        </p>
      </section>
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
export default App;
