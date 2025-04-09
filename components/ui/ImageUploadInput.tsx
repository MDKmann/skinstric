// "use client";

// import { ChangeEvent, ReactNode } from "react";

// interface ImageInputProps {
//   // save it to state or process it, does not return anything = void
//   onFileChange: (file: File) => void;
//   icon: ReactNode;
// }

// function ImageUploadInput({ onFileChange, icon }: ImageInputProps) {
//   function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       onFileChange(file);
//     }
//   }

//   return (
//     <div className="z-50 relative">
//       <label htmlFor="image-upload" className="cursor-pointer">
//         {icon}
//       </label>
//       <input
//         id="image-upload"
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// }

// export default ImageUploadInput;

"use client";

import { ChangeEvent, ReactNode } from "react";

interface Props {
  onFileChange: (file: File) => void;
  icon: ReactNode;
}

function ImageUploadInput({ onFileChange, icon }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) onFileChange(e.target.files[0]);
  }

  return (
    <label
      htmlFor="image-upload"
      className="cursor-pointer relative z-50 inline-block"
    >
      {icon}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleChange}
        hidden
      />
    </label>
  );
}

export default ImageUploadInput;