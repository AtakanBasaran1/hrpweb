'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHide from "./tools/scrollHide";
import HeaderControl from "./tools/headerControl";
import Loading from "./tools/Loading";
import { Suspense } from 'react';
import { SnackbarProvider } from 'notistack';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SnackbarProvider maxSnack={3}>
      <>
        {isLoading && (
          <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              <img src="/images/regedit_blue.png" className="w-48" />
            </div>
          </div>
        )}

        <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
          <Navbar />
        </div>

        <div className={isLoading ? 'invisible' : 'visible'}>
          {children}
          <Footer />
          <ScrollHide />
          <HeaderControl setShowHeader={setShowHeader} lastScrollY={lastScrollY} setLastScrollY={setLastScrollY} />
        </div>

        {/* Suspending the Loading component */}
        <Suspense fallback={null}>
          <Loading setIsLoading={setIsLoading} />
        </Suspense>
      </>
    </SnackbarProvider>
  );
}
