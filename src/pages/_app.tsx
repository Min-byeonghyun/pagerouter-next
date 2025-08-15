import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/book/1");
  };
  //라우터 프리페칭 
  useEffect(() => {
    router.prefetch('/book/1')
  },[])

  
  return (
    <>
      <header>
        <Link href={"/"}>home</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book"}>book</Link>
        <div>
          <button onClick={onClickButton}>/book/1 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
