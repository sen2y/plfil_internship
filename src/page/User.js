// import { rotatePDF } from "pdf-actions";
// import { Button } from '@material-ui/core';
// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import styled from 'styled-components';
// import { rotatePlugin, RenderRotatePageProps } from '@react-pdf-viewer/rotate';
// import { PrimaryButton, RotateDirection, Viewer } from '@react-pdf-viewer/core';


// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const User = () => {
//     const [numPages, setNumPages] = useState(null); // 총 페이지수
//     const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
//     const [pageScale, setPageScale] = useState(1); // 페이지 스케일

//     const rotatePluginInstance = rotatePlugin();
//     const { RotatePage } = rotatePluginInstance;


//     // function Rotate(pdf) {
//     //     const RotatePDF = await rotatePDF(pdf, 180)
//     // }


//     function onDocumentLoadSuccess({ numPages }) {
//         console.log(`numPages ${numPages}`);
//         setNumPages(numPages);
//     }
//     let pdf = "https://plfilbuket223845-staging.s3.ap-northeast-2.amazonaws.com/public/test_pdf/10.pdf"
//     // pdf = Rotate(pdf)

//     return (
//         <>

//             <div>
//                 <Text2>
//                     Page {pageNumber} of {numPages}
//                 </Text2>

//                 <Text2>
//                     페이지 이동 버튼
//                     <Button onClick={() => {
//                         setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1)

//                     }}> +
//                     </Button>

//                     <Button onClick={() => {
//                         setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
//                     }}> -
//                     </Button></Text2>

//                 <Text2>
//                     페이지 스케일
//                     <Button onClick={() => {
//                         setPageScale(pageScale === 3 ? 3 : pageScale + 0.1)
//                     }}> +
//                     </Button>
//                     <Button onClick={() => {
//                         setPageScale((pageScale - 1) < 1 ? 1 : pageScale - 1)
//                     }}> -
//                     </Button>
//                 </Text2>
//                 <RotatePage>
//                     {(props) => (
//                         <Button onClick={() => props.onRotatePage(pageNumber, RotateDirection.Forward)}>
//                             Rotate the first page forward

//                         </Button>
//                     )}
//                 </RotatePage>
//                 <RotatePage>
//                     {(props) => (
//                         <Button onClick={() => props.onRotatePage(pageNumber, RotateDirection.Backward)}>
//                             Rotate the first page backward

//                         </Button>
//                     )}
//                 </RotatePage>

//             </div>
//             {/* pdf 크기가 1280 * 720이 넘는 경우, overflow 처리 */}
//             <div style={{ overflow: 'auto' }}>
//                 <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page scale={pageScale} pageNumber={pageNumber} />
//                     {/* <Page width={1280} height={720} scale={pageScale} pageNumber={pageNumber} /> */}
//                 </Document>
//             </div>
//         </>
//     );
// };

// const Text2 = styled.div`
//     margin-left: 10px;
//     margin-top: 10px;
//     margin-bottom: 5px;
//     font-size: 25px;
//     font-weight: bold;
//     `

// export default User;