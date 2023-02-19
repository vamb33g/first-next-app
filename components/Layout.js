import { Store } from '../utils/Store';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const Layout = ({ title, children }) => {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + ' - AnalyaTech' : 'AnalyaTech'}</title>
        <meta name="description" content="Miner Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <p className="text-lg font-bold">AnalyaTech</p>
            </Link>
            <div className="flex">
              <Link href="/cart">
                <p className="p-2">
                  Panier
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </p>
              </Link>

              {status === 'loading' ? (
                'loading'
              ) : session?.user ? (
                <p className="p-2">{session.user.name}</p>
              ) : (
                <Link href="/login">
                  <p className="p-2">Connexion</p>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          2022 AnalyaTech
        </footer>
      </div>
    </>
  );
};

export default Layout;
