// import React, { useRef } from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import dynamic from 'next/dynamic';
// import { joditConfig } from '@/config';

// const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// interface JoditEditorProps {
//   name: string;
//   label?: string;
// }

// const MUIEditor: React.FC<JoditEditorProps> = ({ name, label }) => {
//   const { control } = useFormContext();
//   const editor = useRef(null);

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field: { onChange, onBlur, value } }) => (
//         <div>
//           {label && <label>{label}</label>}
//           <JoditEditor
//             ref={editor}
//             value={value}
//             config={joditConfig}
//             onBlur={(newContent: string) => onBlur()}
//             onChange={(newContent: string) => onChange(newContent)}
//           />
//         </div>
//       )}
//     />
//   );
// };

// export default MUIEditor;
