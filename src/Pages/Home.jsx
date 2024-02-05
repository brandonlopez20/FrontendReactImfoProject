import React from 'react'
import Header from '../Components/Header'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "../Components/PDF";

function Home() {
  return (
    <>
    <Header />
    {/* <PDFDownloadLink document={<PDF />} fileName="document">
  <button className="btn btn-warning">PDF</button>
</PDFDownloadLink> */}

  <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <PDF 
      name={"Bacara"}
    />
  </PDFViewer>

    </>
  )
}

export default Home