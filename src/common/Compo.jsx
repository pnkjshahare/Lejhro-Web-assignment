// import React from 'react';

// const Compo = ({ text, color, image, order, heading }) => {
//   return (
//     <>
//       {order == 'imagetotext' ? (
//         <ImageToText
//           text={text}
//           color={color}
//           image={image}
//           heading={heading}
//         />
//       ) : (
//         <TextToIamge text={text} color={color} image={image} />
//       )}
//     </>
//   );
// };

// export default Compo;

// function ImageToText(text, color, image, heading) {
//   return (
//     <>
//       <div className={`bg-[${color}] flex justify-between`}>
//         <div>
//           <img src={image} alt="" />
//         </div>
//         <div>
//           <h2>{heading}</h2>
//           {text}
//         </div>
//       </div>
//     </>
//   );
// }

// function TextToIamge(text, color, image, heading) {
//   return (
//     <>
//       <div className={`bg-[${color}] flex justify-between`}>
//         <div>
//           <h2>{heading}</h2>
//           {text}
//         </div>
//         <div>
//           <img src={image} alt="" />
//         </div>
//       </div>
//     </>
//   );
// }


// import React from 'react';

// const Compo = ({ text, color, image, order, heading }) => {
//   return (
//     <>
//     <div className='bg-white'>
//           {order === 'imagetotext' ? (
//         <ImageToText
//           text={text}
//           color={color}
//           image={image}
//           heading={heading}
//         />
//       ) : (
//         <TextToImage text={text} color={color} image={image} heading={heading} />
//       )}
//     </div>
//     </>
//   );
// };

// export default Compo;

// // Fixed function parameters to destructure props correctly
// function ImageToText({ text, color, image, heading }) {
//   return (
//     <div 
//       style={{ backgroundColor: color }} 
//       className="flex justify-center items-center m-5"
//     >
//       {/* <div className="flex-1">
//         <img src={image} alt="" className="w-full max-w-md ml-40" />
//       </div>
//       <div className="flex-1 mr-40">
//         <h2 className="text-2xl font-bold mb-4">{heading}</h2>
//         <p className="text-lg">{text}</p>
//       </div> */}
//     </div>
//   );
// }

// function TextToImage({ text, color, image, heading }) {
//   return (
//     <div 
//       style={{ backgroundColor: color }} 
//       className="flex justify-center items-center p-8"
//     >
//       <div className="flex-1 ">
//         <h2 className="text-2xl font-bold mb-4">{heading}</h2>
//         <p className="text-lg">{text}</p>
//       </div>
//       <div className="flex-1">
//         <img src={image} alt="" className="w-full max-w-md" />
//       </div>
//     </div>
//   );
// }

