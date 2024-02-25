
import { useForm } from "react-hook-form"
import { PostThread } from "@/entities/threads/query";
import { useState } from "react";


export function usePostThreadForm(desk:string){
    const {register, handleSubmit} = useForm<PostThread>()
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const filesUrl =  files.map(file => ({
      file: file,
      url: URL.createObjectURL(file) // Создаем URL для каждого файла
    }))

    const convertToHTML = (bbcode: string) => {
        bbcode = bbcode.replace(/\[b\](.*?)\[\/b\]/g, `${<strong></strong>}`);
        bbcode = bbcode.replace(/\[i\](.*?)\[\/i\]/g, `${<em></em>}`);
        bbcode = bbcode.replace(/\[u\](.*?)\[\/u\]/g, `${<u></u>}`);

        return bbcode;
      };

      const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
      };
    
      const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const fileList = Array.from(e.dataTransfer.files);
        setFiles(prev => [...prev, ...fileList]);
      };
    
      const handleDragLeave = () => {
        setDragging(false);
      };
    
     const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        console.log(file)
        if (file) {
          const fileList: File[] = Array.from(file);
          setFiles(prev => [...prev, ...fileList]);
        }
    
      }


      

      return {
        register, 
        handleSubmit,
        convertToHTML,
        handleDragEnter,
        handleDrop,
        handleDragLeave,
        handleFileInputChange,
        dragging,
        files,
        setFiles,
        filesUrl,

      }

}
