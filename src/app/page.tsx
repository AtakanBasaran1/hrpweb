import Begining from "@/components/main/Begining";
import CompanyInfo from "@/components/main/CompanyInfo";
import MiddleOfPage from "@/components/main/Middle-of-Page";
import Referances from "@/components/main/Referances";
import { Fade } from '@mui/material';

export default function Home() {
  return (
    <Fade in={true} timeout={500}>
      <div className="h-auto w-full">
        <Begining />
        <MiddleOfPage />
        <CompanyInfo />
        <Referances />
      </div>
    </Fade>
  );
}
