import Head from "next/head";
import Navbar from "./components/NavBar"; // Adjust the import path as needed
import CardComponent from "./components/cardComponent"; // Adjust the import path as needed

export default function Home({slug,description}:{slug:string; description:string}) {
  return (
    <>
      <Head>
        <title>Smart Tools</title>
      </Head>
      <Navbar />
      <CardComponent slug={slug} description={description} />
    </>
  );
}
