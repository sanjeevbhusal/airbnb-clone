import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onUpload: (url: string) => void;
  value: string;
}

export function ImageUpload({ onUpload, value }: ImageUploadProps) {
  const handleUpload = (result: any) => {
    onUpload(result.info.secure_url);
  };

  return (
    <CldUploadWidget uploadPreset="airbnb-clone" onUpload={handleUpload}>
      {({ open }) => {
        return (
          <div
            className=" w-full h-64 border-2 border-neutral-300 border-dashed flex items-center justify-center flex-col gap-4 cursor-pointer hover:opacity-70 text-neutral-600 relative"
            onClick={() => open()}
          >
            <TbPhotoPlus size={40} />
            <p className="font-semibold text-lg">Upload a photo</p>
            {value ? (
              <div className="absolute inset-0 w-full h-full">
                <Image alt="image" fill src={value} className="object-cover" />
              </div>
            ) : null}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
