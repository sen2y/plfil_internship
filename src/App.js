// import logo from "./logo.svg";
// // import "./App.css";
// import { fetchDataFromDb } from "lib/api";
// import { MyResponsiveBar } from 'lib/test';
// import Counter from "lib/Counter";
// import InputSample from "lib/InputSample";
// import { MyResponsiveBar2 } from "lib/test2";
// import { MyResponsiveBar3 } from "lib/createAt";
// import { MyResponsiveBar4 } from "lib/create2022";
// import { MyResponsiveBar5 } from "lib/createMonth";
// import { MyResponsiveBar6 } from "lib/createWeek";
// import { MyResponsiveBar7 } from "lib/createDate";
// import styled from "styled-components";
// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

// const list = [
//   {
//     heightIn: '600px',
//     widthIn: '700px',
//     height: '500px', width: '700px',
//     content: <MyResponsiveBar />,
//     bColor: 'beige',
//     scrollbar: false,
//     text: "배우프로필 성비"
//   },
//   {
//     heightIn: '750px',
//     widthIn: '100%',
//     height: '700px',
//     width: '100%',
//     content: <MyResponsiveBar2 />,
//     bColor: 'aliceblue',
//     scrollbar: false,
//     text: "배우 연령대"
//   },
//   {
//     heightIn: '750px',
//     widthIn: '700px',
//     height: '700px',
//     width: '700px',
//     content: <MyResponsiveBar3 />,
//     bColor: 'antiquewhite',
//     scrollbar: false,
//     text: "연도별 배우등록 data"
//   },
//   {
//     heightIn: '750px',
//     widthIn: '1050px',
//     height: '700px',
//     width: '1050px',
//     content: <MyResponsiveBar4 />,
//     bColor: 'aliceblue',
//     scrollbar: false,
//     text: "2022 배우 등록일 월별 data"
//   },
//   {
//     heightIn: '750px',
//     widthIn: '1050px',
//     height: '700px',
//     width: '1050px',
//     content: <MyResponsiveBar5 />,
//     bColor: 'aliceblue',
//     scrollbar: false,
//     text: "배우 등록일 월별 data"
//   },
//   {
//     heightIn: '700px',
//     widthIn: '70%',
//     height: '600px',
//     width: '230rem',
//     content: <MyResponsiveBar6 />,
//     bColor: 'aliceblue',
//     scrollbar: true,
//     text: "배우 등록일 주별 data"
//   },
//   {
//     heightIn: '600px',
//     widthIn: '70%',
//     height: '2000px',
//     width: '1300rem',
//     content: <MyResponsiveBar7 />,
//     bColor: 'aliceblue',
//     scrollbar: true,
//     text: "배우 등록일 일별 data"
//   },
// ]

// function App() {

//   //const [changeColor, setChangeColor] = useState("전체");

//   return (
//     <>
//       <div>
//         <b>Actor</b>
//         <Link to='/actor'> 로 이동</Link>
//       </div>
//       <div>
//         <b>User</b>
//         <Link to='/user'> 로 이동</Link>
//       </div>
//       {/* <div>
//         <h1>Bookkeeper</h1>
//         <nav
//           style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}
//         >
//           <Link to="/actor">actor</Link> |{" "}
//           <Link to="/user">user</Link>
//         </nav>
//       </div> */}
//       <Container>
//         {/* <InputSample /> */}
//         {/* <Counter /> */}

//         {list.map((item, index) => (
//           <>
//             <Text>{item.text}</Text>
//             <CreateBoxInner
//               scrollbar={item.scrollbar} heightIn={item.heightIn} widthIn={item.widthIn}
//               color={item.bColor}>
//               <CreateBox height={item.height} width={item.width} >
//                 {item.content}
//               </CreateBox>
//             </CreateBoxInner>
//           </>

//         ))}

//         {/* <Box1Inner>
//         <Box1>
//           <MyResponsiveBar />
//         </Box1>
//       </Box1Inner> */}

//         {/* <Box onClick={() => setChangeColor(true)}>
//         <Text>김권희</Text>
//       </Box>

//       <ChangeBox bgcolor={changeColor} />
//      */}

//       </Container>

//     </>
//   );
// }

// const Container = styled.div`
// `
// const Box1Inner = styled.div`
//   width: 700px;
//   height: 600px;
//   background-color: beige;
//   margin-bottom: 20px;
// `

// const Box1 = styled.div`
//   width: 700px;
//   height: 500px;
// `

// const Box = styled.div`
//   width: 100px;
//   height: 50px;
//   border: 1px solid #000;
//   margin-bottom: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;

//   &:hover {
//     border: 2px solid red;
//     color: red;
//   }
// `

// const CreateBoxInner = styled.div`
//   width: ${props => props.widthIn};
//   height: ${props => props.heightIn};
//   background-color: ${props => props.color};
//   overflow-x: ${props => props.scrollbar ? 'scroll' : 'none'};
//   margin-top: 20px;
//   margin-bottom:20px;
// `
// //background-color: ${props => props.bColor === true ? 'pink' : "red"};

// const CreateBox = styled.div`
//   width: ${props => props.width};
//   height: ${props => props.height};
// `

// const Text = styled.div`
//   margin-top: 50px;
//   font-size: medium;
//   font-weight: bold;
// `

// export default App;
