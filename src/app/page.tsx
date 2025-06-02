"use client";
import Begining from "@/components/main/Begining";
import CompanyInfo from "@/components/main/CompanyInfo";
import MiddleOfPage from "@/components/main/Middle-of-Page";
import Referances from "@/components/main/Referances";
import SEO from "@/components/SEO";
import { Fade } from '@mui/material';

export default function Home() {
  return (
    <Fade in={true} timeout={500}>
      
      <div className="h-auto w-full">
      <SEO 
        title="Anasayfa | RegeditPos"
        description="Zincir restoran operasyonlarınızı tek bir sistemle yönetin, zamandan ve maliyetten tasarruf edin."
        image="/images/regedit_logo.ico"
      />
        <Begining />
        <MiddleOfPage />
        <CompanyInfo />
    
      </div>
    </Fade>
  );
}
